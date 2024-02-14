import { render, screen } from '@testing-library/react'
import Header from '../components/header'

describe('Header Component', () => {
    it('renders header with correct content and links', () => {
        render(<Header />)

        const logoImage = screen.getByAltText('logo')
        expect(logoImage).toBeInTheDocument()

        const addBlogLink = screen.getByText('Add Blog')
        expect(addBlogLink).toBeInTheDocument()
        expect(addBlogLink).toHaveAttribute('href', '/blogs/add')

        const homeLink = screen.getByText('Home')
        expect(homeLink).toBeInTheDocument()
        expect(homeLink).toHaveAttribute('href', '/')

        const teamLink = screen.getByText('Team')
        expect(teamLink).toBeInTheDocument()
        expect(teamLink).toHaveAttribute('href', '/')

        const featureLink = screen.getByText('Feature')
        expect(featureLink).toBeInTheDocument()
        expect(featureLink).toHaveAttribute('href', '/')

        const blogLink = screen.getByText('Blog')
        expect(blogLink).toBeInTheDocument()
        expect(blogLink).toHaveAttribute('href', '/')

        const aboutLink = screen.getByText('About')
        expect(aboutLink).toBeInTheDocument()
        expect(aboutLink).toHaveAttribute('href', '/')

        const contactLink = screen.getByText('Contact')
        expect(contactLink).toBeInTheDocument()
        expect(contactLink).toHaveAttribute('href', '/')
    })
})
