import { gql, useQuery } from '@apollo/client'

export const ALL_POSTS_SLUG_QUERY = gql`
    query GetBlogs($page: Int!, $size: Int) {
        blogs(page: $page, size: $size) {
            id
        }
    }
`

export const SINGLE_POST_QUERY = gql`
    query GetPost($id: Int!) {
        blog(id: $id) {
            id
            title
            content
        }
    }
`

export const ALL_POSTS_QUERY = gql`
    query GetBlogs($page: Int!, $size: Int) {
        blogs(page: $page, size: $size) {
            id
            title
            content
        }
    }
`

export const CREATE_BLOG_POST = gql`
    mutation CreateBlog($title: String!, $content: String!) {
        createBlog(title: $title, content: $content) {
            id
            title
            content
        }
    }
`
