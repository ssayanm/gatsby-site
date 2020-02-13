import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              title
              date
            }
            excerpt
          }
        }
        totalCount
      }
    }
  `)
  return (
    <Layout>
      <h1>Blog</h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          {node.frontmatter.title} - {node.frontmatter.date}
          <p>{node.excerpt}</p>
        </div>
      ))}
    </Layout>
  )
}

export default BlogPage
