import { render, screen } from '@testing-library/react'
import Layout from '../components/layout'

describe('Layout Component', () => {
    it('renders layout with correct children', () => {
        render(
            <Layout>
                <div>Test child</div>
            </Layout>,
        )

        const logoImage = screen.getByText('Test child')
        expect(logoImage).toBeInTheDocument()
    })
})
