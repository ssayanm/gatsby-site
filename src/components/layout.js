import React from "react"
import Header from "./header"
import Footer from "./footer"
import "./layout.modules.scss"

const Layout = (props) => {
  return (
    <div className="container">
      <div className="content">
        <Header />
        {props.children}
      </div>

      <Footer />
    </div>
  )
}

export default Layout
