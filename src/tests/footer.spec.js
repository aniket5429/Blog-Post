import { render, screen } from '@testing-library/react'
import Footer from '../components/footer'

describe('Footer Component', () => {
    it('renders footer with correct content and links', () => {
        render(<Footer />)

        const companySection = screen.getByText('Company')
        expect(companySection).toBeInTheDocument()
        expect(screen.getByText('About Us')).toBeInTheDocument()
        expect(screen.getByText('Contact')).toBeInTheDocument()
        expect(screen.getByText('Careers')).toBeInTheDocument()

        const informationSection = screen.getByText('Information')
        expect(informationSection).toBeInTheDocument()
        expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
        expect(screen.getByText('Terms of Service')).toBeInTheDocument()
        expect(screen.getByText('Refund Policy')).toBeInTheDocument()

        const helpSection = screen.getByText('Help')
        expect(helpSection).toBeInTheDocument()
        expect(screen.getByText('FAQs')).toBeInTheDocument()
        expect(screen.getByText('Shipping Information')).toBeInTheDocument()
        expect(screen.getByText('Returns & Exchanges')).toBeInTheDocument()

        const newsletterSection = screen.getByText('Newsletter')
        expect(newsletterSection).toBeInTheDocument()
        expect(
            screen.getByText(
                'Subscribe to our newsletter to get updates on new products and promotions.',
            ),
        ).toBeInTheDocument()
        expect(
            screen.getByPlaceholderText('Enter your email'),
        ).toBeInTheDocument()
        expect(screen.getByText('Subscribe')).toBeInTheDocument()

        expect(screen.getByText('Aniket Anand')).toBeInTheDocument()
    })
})
