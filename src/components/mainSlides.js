import React from "react"
//import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
//import BackgroundImage from "gatsby-background-image"
import Slider from "react-slick"

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
          fluid(quality: 90, maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      banner3: file(relativePath: { eq: "banner3.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 2000) {
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
    // fade: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 4000,
    
  }

  const textSize = "text-5xl sm:text-8xl"
  return (
    <section className={`mainSlidesContainer bg-black  ${nudge}`}>
      <Slider {...settings} className=" ">
        <Slide
          banner={1}
          text={
            <h1 className={`${textSize} uppercase text-white  font-extrabold `}>
              Good <br /> coffee <br /> good <br /> morning
            </h1>
          }
        />

        <Slide
          banner={2}
          text={
            <h1 className={`${textSize} uppercase text-white  font-extrabold`}>
              quality <br /> coffee, <br /> everyday
            </h1>
          }
        />

        <Slide
          banner={3}
          text={
            <h1 className={`${textSize} uppercase text-white  font-extrabold`}>
              everyday <br /> treats in <br /> a tap
            </h1>
          }
        />
      </Slider>
    </section>
  )
}

export default MainSlides
