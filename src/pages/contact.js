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
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify
        netlify-honeypot="bot-field"
        action="about"
      >
        <input type="hidden" name="contact" value="contact" />
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>

        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Layout>
  )
}

export default ContactPage
