import React from "react"
//import { Link } from "gatsby"
import banani from "../images/logo-babani.png"
import foodpanda from "../images/logo-foodpanda.png"
import hungerstation from "../images/logo-hungerstation.png"
import pedidosya from "../images/logo-pedidosya.png"
import talabat from "../images/logo-talabat.png"
import yemekspeti from "../images/logo-yemekspeti.png"

import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"


const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      bg: file(relativePath: { eq: "footer-bg.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      logo: file(relativePath: { eq: "footer-logo.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const bg = data.bg.childImageSharp.fluid
  const logoDiv = " w-20 md:w-40 md:mx-4"
  return (
    <section className="footerContainer bg-black">
      <BackgroundImage
        fluid={bg}
        background-size="300px 100px"
        className="footerBgContainer "
      >
        <h2 className="text-white text-center uppercase font-extrabold text-sm md:text-xl mx-auto max-w-max pt-10 md:pt-40">
          Everyday, your way <br/> <br/> exlusively on
        </h2>
        <ul className="flex w-full flex-wrap justify-center md:max-w-max mx-auto px-4 ">
          <li>
            <div className={logoDiv}>
              <img src={hungerstation} alt="logo" />
            </div>
          </li>
          <li>
            <div className={logoDiv}>
              <img src={pedidosya} alt="logo" />
            </div>
          </li>
          <li>
            <div className={logoDiv}>
              <img src={talabat} alt="logo" />
            </div>
          </li>
          <li>
            <div className={logoDiv}>
              <img src={foodpanda} alt="logo" />
            </div>
          </li>
          <li>
            <div className={logoDiv}>
              <img src={yemekspeti} alt="logo" />
            </div>
          </li>
          <li>
            <div className={logoDiv}>
              <img src={banani} alt="logo" />
            </div>
          </li>
        </ul>

        {/* <h1 className="text-white uppercase font-extrabold text-2xl mx-auto max-w-max pb-4">
          {" "}
          more caffeine? sign up and get 10% off on first order
        </h1> */}
        <div className="bottomLogo w-full flex justify-end ">
        <Img fluid={data.logo.childImageSharp.fluid} className=" w-20 md:w-40 lg:w-60 mr-2 md:mr-20 mb-4 md:mb-20 " />
        </div>
      <div></div>
      </BackgroundImage>
    </section>
  )
}

export default Footer
