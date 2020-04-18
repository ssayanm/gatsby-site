import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import "./contact.modules.scss"

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
        <input type="hidden" name="form-name" value="contact" />

        <label>
          <input type="text" name="name" placeholder="" required />
          <div class="label-text">Your Name</div>
        </label>

        <label>
          <input type="email" name="email" placeholder="" required />
          <div class="label-text">Your Email</div>
        </label>

        <label>
          <textarea name="message" placeholder="" required></textarea>
          <div class="label-text">Your Message</div>
        </label>

        <button type="submit">Send</button>
      </form>
    </Layout>
  )
}

export default ContactPage
