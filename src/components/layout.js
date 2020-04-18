import React from "react"
import Header from "./header"
import Footer from "./footer"
import "./layout.modules.scss"

const Layout = (props) => {
  return (
    <div className="showcase">
      <div className="container">
        <Header />
        {props.children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
