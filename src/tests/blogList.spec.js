import { render, screen } from '@testing-library/react'
import BlogList from '../components/blogList'
import Card from '../components/blogCard'

describe('BlogList Component', () => {
    const mockBlogs = [
        {
            id: 1,
            title: 'Test Blog 1',
            content: 'Test content 1',
            photo_url: 'https://example.com/test1.jpg',
        },
        {
            id: 2,
            title: 'Test Blog 2',
            content: 'Test content 2',
            photo_url: 'https://example.com/test2.jpg',
        },
        {
            id: 3,
            title: 'Test Blog 3',
            content: 'Test content 3',
            photo_url: 'https://example.com/test3.jpg',
        },
    ]

    it('renders blog list with correct heading and content', async () => {
        render(<BlogList blogs={mockBlogs} />)

        const headingElement = await screen.getByText(
            'Read about the latest stories',
        )
        expect(headingElement).toBeInTheDocument()
    })

    it('renders correct number of blog cards', async () => {
        render(<BlogList blogs={mockBlogs} />)
        const cardElements = await screen.findAllByText('Read More')
        expect(cardElements.length).toBe(mockBlogs.length)
    })

    it('renders subscribe section with correct content', () => {
        render(<BlogList blogs={mockBlogs} />)

        const subscribeHeadingElement = screen.getByText(
            'Subscribe Our Newsletter',
        )
        expect(subscribeHeadingElement).toBeInTheDocument()

        const subscribeContentElement = screen.getByText(
            'Stay updated with our latest news and exclusive offers. Join our community today!',
        )
        expect(subscribeContentElement).toBeInTheDocument()

        const emailInputElement =
            screen.getByPlaceholderText('Enter your email')
        expect(emailInputElement).toBeInTheDocument()

        const subscribeButtonElement = screen.getByText('Subscribe')
        expect(subscribeButtonElement).toBeInTheDocument()
    })
})
