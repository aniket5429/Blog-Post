import { render, screen } from '@testing-library/react'
import Alert from '../components/alert'

describe('Alert Component', () => {
    it('renders error alert with the correct message', () => {
        const errorMessage = 'This is an error message'
        render(<Alert type="error" message={errorMessage} />)
        const errorAlert = screen.getByRole('alert')
        expect(errorAlert).toBeInTheDocument()
        expect(errorAlert).toHaveClass('bg-red-100 text-red-800')
        expect(screen.getByText('Error!')).toBeInTheDocument()
        expect(screen.getByText(errorMessage)).toBeInTheDocument()
    })

    it('renders success alert with the correct message', () => {
        const successMessage = 'This is a success message'
        render(<Alert type="success" message={successMessage} />)

        const successAlert = screen.getByRole('alert')
        expect(successAlert).toBeInTheDocument()
        expect(successAlert).toHaveClass('bg-green-100 text-green-800')
        expect(screen.getByText('Success!')).toBeInTheDocument()
        expect(screen.getByText(successMessage)).toBeInTheDocument()
    })
})
