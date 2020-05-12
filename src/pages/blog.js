import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import Head from "../components/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishDate(formatString: "MMMM Do, YYYY")
          }
        }
        totalCount
      }
    }
  `)
  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <h4> Posts</h4>
      <ol className="posts">
        {data.allContentfulBlogPost.edges.map(({ node }) => (
          <div key={node.id}>
            <li className="post">
              <Link to={`/blog/${node.slug}`}>
                <h2>{node.title}</h2>
                <p>{node.publishDate}</p>
              </Link>
            </li>
          </div>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
