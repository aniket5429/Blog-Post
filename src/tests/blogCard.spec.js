import { render, screen } from '@testing-library/react'
import BlogCard from '../components/blogCard'

describe('BlogCard Component', () => {
    const mockProps = {
        id: 1,
        title: 'Test Blog Post',
        content: '<p>This is a test blog post content</p>',
        photo_url: 'https://example.com/test-image.jpg',
    }

    it('renders blog card with title, content, and read more link', () => {
        render(<BlogCard {...mockProps} />)

        const titleElement = screen.getByText('Test Blog Post')
        expect(titleElement).toBeInTheDocument()

        const contentElement = screen.getByText(
            'This is a test blog post content',
        )
        expect(contentElement).toBeInTheDocument()

        const readMoreLink = screen.getByText('Read More')
        expect(readMoreLink).toBeInTheDocument()
        expect(readMoreLink).toHaveAttribute('href', '/blogs/1')
    })

    it('renders blog card without photo if photo_url is not provided', () => {
        const propsWithoutPhoto = { ...mockProps, photo_url: null }
        render(<BlogCard {...propsWithoutPhoto} />)

        const imageElement = screen.queryByAltText('Blog Post 1')
        expect(imageElement).not.toBeInTheDocument()
    })
})
