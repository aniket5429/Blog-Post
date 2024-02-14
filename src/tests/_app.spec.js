import { render } from '@testing-library/react'
import App from '../pages/_app'

jest.mock('../lib/apolloClient', () => ({
    useApollo: jest.fn(() => ({})),
}))

describe('App', () => {
    it('renders the component with ApolloProvider and correct props', async () => {
        const Component = () => <div id="customDiv">Custom Div</div>
        const pageProps = { prop1: 'value1', prop2: 'value2' }

        const renderedData = render(
            <App Component={Component} pageProps={pageProps} />,
        )
        const { container } = renderedData
        expect(container.querySelector('#customDiv')).toBeInTheDocument()
        expect(require('../lib/apolloClient').useApollo).toHaveBeenCalledWith(
            pageProps,
        )
    })
})
