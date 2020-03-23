import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import Slider from "react-animated-slider"
import "react-animated-slider/build/horizontal.css"
import sliderStyles from "./styles.module.scss"

const content = [
  {
    title: "Tortor Dapibus Commodo Aenean Quam",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
    button: "Discover",
    image: "https://i.imgur.com/DCdBXcq.jpg",
  },
  {
    title: "Vulputate Mollis Ultricies Fermentum Parturient",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Read More",
    image: "https://i.imgur.com/ZXBtVw7.jpg",
  },

  {
    title: "Phasellus volutpat metus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Buy now",
    image: "https://i.imgur.com/DvmN8Hx.jpg",
  },
]

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />

      <Slider classNames={sliderStyles} autoplay={5000}>
        {content.map((item, index) => (
          <div
            key={index}
            style={{
              // backgroundImage: `url('${item.image}')`,
              backgroundBlendMode: `overlay`,
              backgroundImage: `url('${item.image}'),linear-gradient(180deg,#0c71c3 0%,#002a72 100%)`,
              backgroundPosition: `center`,
            }}
          >
            <div className="center">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button>{item.button}</button>
            </div>
          </div>
        ))}
      </Slider>

      <h1>Hello !</h1>
      <h2>
        I am Sayan, I am currently enjoying learning Gatsby with React !!{" "}
      </h2>
      <p>
        Need a developer? <Link to="/contact">Contact Me</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
