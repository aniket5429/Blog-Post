import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";
import {  useQuery } from "@apollo/client";
import Layout from "@/components/layout";
import { initializeApollo, addApolloState } from "@/lib/apolloClient";
import { ALL_POSTS_SLUG_QUERY, ALL_POSTS_QUERY,  SINGLE_POST_QUERY, } from "@/lib/gql";

export default function Post(props) {
  const { loading, error, data: recommendedBlogs } = useQuery(ALL_POSTS_QUERY, {
    variables: { skip: 0, first: 3 },
    notifyOnNetworkStatusChange: true,
  });

  const router = useRouter();

  if (router.isFallback &&  !props.data?.blog.id) {
    return <div>Loading ...</div>;
  }
  
  if (!router.isFallback && !props.data?.blog.id) {
    return <ErrorPage statusCode={404} />;
  }
  const { blog } = props.data
  return (
    <Layout>
      <Head>
        <title>{blog.title}</title>
      </Head>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <h2 className="text-4xl font-bold text-primary-50">{blog.title}</h2>
            <div className="relative w-full my-5 rounded h-60 bg-gray-100 group-hover:scale-125 transition-all duration-300">
            </div>
            <p
              className="mt-2 text-sm text-gray-600"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
            <section className="not-format mt-10">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg lg:text-2xl font-bold text-primary-50">
                  Discussion
                </h2>
              </div>
              <form className="mb-6">
                <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <label htmlFor="comment" className="sr-only">
                    Your comment
                  </label>
                  <textarea
                    id="comment"
                    rows="6"
                    className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:placeholder-gray-400 dark:bg-gray-800"
                    placeholder="Write a comment..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                >
                  Post comment
                </button>
              </form>
            </section>
          </article>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticPaths() {
  const apolloClient = initializeApollo();
  const response =
    (await apolloClient.query({
      query: ALL_POSTS_SLUG_QUERY,
      variables: { page: 1, size: 100 },
    })) || {};
  let paths = [];
  if (response?.data?.blogs) {
    paths = (response?.data?.blogs ?? []).map((blog) => ({
      params: { id: String(blog.id) },
    }));
  }

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  try {
    const apolloClient = initializeApollo();
    const { data } = await apolloClient.query({
      query: SINGLE_POST_QUERY,
      variables: { id: Number(params.id) },
    });

    return addApolloState(apolloClient, {
      props: {
        data,
      },
      revalidate: 1,
    });
  } catch (error) {
    return {
      props: {
        data: {},
        error: "Error fetching post",
      },
      revalidate: 1,
    };
  }
}