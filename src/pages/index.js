import Layout from '@/components/layout'
import BlogList from '@/components/blogList'
import { initializeApollo, addApolloState } from '@/lib/apolloClient'
import { ALL_POSTS_QUERY } from '@/lib/gql'

export default function Index(props) {
    return (
        <Layout>
            <BlogList blogs={props?.data?.blogs ?? []} />
        </Layout>
    )
}

export async function getStaticProps() {
    const apolloClient = initializeApollo()

    const { data } = await apolloClient.query({
        query: ALL_POSTS_QUERY,
        variables: { page: 1, size: 10 },
    })

    return addApolloState(apolloClient, {
        props: { data },
        revalidate: 1,
    })
}
