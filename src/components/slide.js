import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import OrderNow from "./ordernow"

const Slide = props => {
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
  const banner1 = data.banner1.childImageSharp.fluid
  const banner2 = data.banner2.childImageSharp.fluid
  const banner3 = data.banner3.childImageSharp.fluid

  return (
    <BackgroundImage
      fluid={props.banner===1?banner1:props.banner===2?banner2:banner3}
      background-size="contain"
      className="bgContainer h-screen "
      backgroundPosition={"top left"}
    >
      <div className="textDiv pt-32 sm:pt-40  pl-20 sm:pl-40  ">
        {props.text}
        <OrderNow
          display={
            <div className="orderBtn text-white p-4 uppercase text-xl sm:text-2xl font-extrabold bg-blue">
              order now! 
            </div>
          }
        />
      </div>
    </BackgroundImage>
  )
}

export default Slide
