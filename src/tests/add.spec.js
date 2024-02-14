import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import AddBlogPost from '../pages/blogs/add'

// Mocking useMutation
jest.mock('@apollo/client', () => ({
    useMutation: jest.fn(() => [
        jest.fn(),
        { loading: false, error: null, data: null },
    ]),
}))
jest.mock('../lib/gql', () => ({
    CREATE_BLOG_POST: jest.fn(),
}))

const MockComponent = ({ value, onChange }) => (
    <div data-testid="mocked-rich-text-editor">
        <textarea
            name="content"
            type="text"
            onChange={({ target }) => onChange(target.value)}
            placeholder="Write blog content"
        />
    </div>
)

jest.mock('../components/textEditor', () => <MockComponent />);

jest.mock('../lib/gql', () => ({
    ALL_POSTS_SLUG_QUERY: jest.fn(),
}))

describe('AddBlogPost Component', () => {
    it('renders the form with correct elements', () => {
        const { getByLabelText, getByPlaceholderText, getByText } = render(
            <AddBlogPost />,
        )

        expect(getByText('Blog Title')).toBeInTheDocument()
        expect(getByPlaceholderText('Enter blog title')).toBeInTheDocument()
        expect(getByText('Blog Description')).toBeInTheDocument()
        expect(getByText('Submit')).toBeInTheDocument()
    })

    it('submits the form successfully', async () => {
        const mockCreateBlog = jest.fn().mockResolvedValueOnce({
            data: {
                createBlog: {
                    id: '123',
                    title: 'Test Title',
                    content: 'Test Content',
                },
            },
        })
        jest.mock('@apollo/client', () => ({
            useMutation: jest.fn(() => [
                mockCreateBlog,
                { loading: false, error: null, data: {} },
            ]),
        }))

        const { getByText, container } = render(<AddBlogPost />)

        const titleInput = screen.getByPlaceholderText('Enter blog title')
        fireEvent.change(titleInput, { target: { value: 'Test Title' } })
        const contentInput = screen.getByPlaceholderText('Write blog content')
        fireEvent.change(contentInput, {
            target: {
                value: 'Post content must be at least 20 characters long',
            },
        })

        // Assert the expected behavior
        await waitFor(() => {
            fireEvent.click(getByText('Submit'))
        })
        expect(getByText('Blog Post created successfully')).toBeInTheDocument()
    })

    it('shows error when form submitted with invalid data', async () => {
        const { getByText } = render(<AddBlogPost />)

        fireEvent.click(getByText('Submit'))
        await waitFor(() => {
            expect(getByText('Error!')).toBeInTheDocument()
        })
    })
})
