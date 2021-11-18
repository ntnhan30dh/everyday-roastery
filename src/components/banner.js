import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import OrderNow from "./ordernow"


const Banner = (props) => {

  const data = useStaticQuery(graphql`
    {
      banner: file(relativePath: { eq: "cupLineUp.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    
    }
  `)
  return (
    <section className="banner mb-52 ">
      <div className="text text-center uppercase py-32">
        <h2 className={`${props.textStyle.h2} font-black`}> Your Everyday COFFEE <br />  <span className=" "> a tap away </span> </h2>
        <OrderNow
            display={
              <div className="orderBtn  text-white text-base md:text-base rounded-full py-6 px-8  uppercase font-bold bg-blue  ">
                Order Now
              </div>
            }
          />
     
      </div>
            
        <Img
                fluid={data.banner.childImageSharp.fluid}
                className="menu-pic "
              />
    </section>
  )
}

export default Banner
