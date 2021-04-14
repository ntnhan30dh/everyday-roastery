import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Slider from "react-slick"

import OrderNow from "./ordernow"
import Slide from "./slide"

const MainSlides = props => {
  const data = useStaticQuery(graphql`
    {
      banner1: file(relativePath: { eq: "banner1.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      banner2: file(relativePath: { eq: "banner2.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 480) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      banner3: file(relativePath: { eq: "banner3.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 480) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  let nudge = props.menuState ? "nudge" : ""
  const banner1 = data.banner1.childImageSharp.fluid
  const banner2 = data.banner2.childImageSharp.fluid
  const banner3 = data.banner3.childImageSharp.fluid

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    //  autoplay: true,
    autoplaySpeed: 3000,
    // customPaging: i => (
    //   <div
    //     className="dot"
    //     style={{
    //       width: "14px",
    //       height: "14px",
    //       borderRadius: "50%",
    //       border: "1px solid white",
    //     }}
    //   >
    //     {/* {i + 1} */}
    //   </div>
    // ),
  }
  return (
    <section className={`mainSlidesContainer bg-black  ${nudge}`}>
      <Slider {...settings} className=" h-2/3">
        <Slide
          banner={1}
          text={
            <h1 className="uppercase text-white text-8xl font-extrabold">
              Good <br /> coffee <br /> good <br /> morning
            </h1>
          }
        />

        <Slide
          banner={2}
          text={
            <h1 className="uppercase text-white text-8xl font-extrabold">
            quality <br /> coffee, <br /> everyday 
            </h1>
          }
        />

        <Slide
          banner={3}
          text={
            <h1 className="uppercase text-white text-8xl font-extrabold">
              everyday <br /> treats in, <br /> abit 
            </h1>
          }
        />
      </Slider>
    </section>
  )
}

export default MainSlides
