import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className="footer">
      <p>Designed By {data.site.siteMetadata.author}, © 2020 </p>
    </footer>
  )
}

export default Footer
