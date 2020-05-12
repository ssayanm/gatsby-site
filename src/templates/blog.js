import React from "react"
import { graphql } from "gatsby"
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
      media {
        file {
          url
          contentType
        }
        id
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

      {blogpost.media.map((url) =>
        url.file.contentType === "video/mp4" ? (
          <video width="320" height="240" controls key={url.id}>
            <source src={url.file.url} type="video/mp4" />
            <track default kind="captions" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={url.file.url}
            width="500"
            alt={blogpost.title}
            key={url.id}
          />
        )
      )}
    </Layout>
  )
}

export default Blog
