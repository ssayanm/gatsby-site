import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"

import blogStyles from "./blog.module.scss"

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
            fields {
              slug
            }
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
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <li className={blogStyles.post}>
              <Link to={`/blog/${node.fields.slug}`}>
                <h2>{node.frontmatter.title}</h2>
              </Link>

              <p>{node.frontmatter.date}</p>
              <p>{node.excerpt}</p>
            </li>
          </div>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
