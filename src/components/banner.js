import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Gif from '../images/bannerGif.gif'

import OrderNow from "./ordernow"

const Banner = props => {
  const data = useStaticQuery(graphql`
    {
      banner: file(relativePath: { eq: "cupLineUp.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
        banner_m: file(relativePath: { eq: "cupLineUp_m.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        
      }
    }
  `)
  return (
    <section className="banner  " id="banner">
      <div className="text text-center uppercase my-20  md:mt-32 md:mb-0 ">
        <h2 className={`${props.textStyle.h2} font-black mb-0 xxsm:px-4  `}>
          {" "}
          Your Everyday COFFEE <br /> 
          <span className="  ">
            {" "}
            a tap away{" "}
          </span>
        </h2>
        <OrderNow
        country={props.country}
          display={
            <div className=" hidden md:block orderBtn  text-white text-base md:text-base rounded-full py-6 px-8  uppercase font-bold bg-blue mt-16  ">
              Order Now
            </div>
          }
        />
      </div>

      {/* <Img fluid={data.banner.childImageSharp.fluid} className="banner " className="hidden md:block"/> */}
<div className="hidden md:block">
  <img src={Gif} alt="gif" />
   </div>   
   <Img fluid={data.banner_m.childImageSharp.fluid} className="banner mobile" className=" md:hidden"/>
   
            <div className="  md:hidden orderBtn  text-center  text-white text-base md:text-base rounded-full py-3 px-6 uppercase font-bold bg-blue w-4/5 mx-auto my-10">
              Order Now
            </div>
         
      
    </section>
  )
}

export default Banner
