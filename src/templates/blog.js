import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "../components/head"
import Layout from "../components/layout"
import Img from "gatsby-image"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM DD YYYY")

      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

const Blog = ({ data }) => {
  const blogpost = data.contentfulBlogPost

  return (
    <Layout>
      <Head title={blogpost.title} />
      <h1>{blogpost.title}</h1>
      <p>{blogpost.publishDate}</p>

      <Img alt={blogpost.title} fluid={blogpost.heroImage.fluid} />
      <div
        dangerouslySetInnerHTML={{
          __html: blogpost.body.childMarkdownRemark.html,
        }}
      />
    </Layout>
  )
}

export default Blog
