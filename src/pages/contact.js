import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>Here is my contact below</p>
      <p>
        Twitter{" "}
        <a
          href="https://twitter.com/sayan_m87"
          rel="noopener noreferrer"
          target="_blank"
        >
          Click Here
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
