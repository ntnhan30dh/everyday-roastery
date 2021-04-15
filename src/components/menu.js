import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Slider from "react-slick"
import OrderNow from "./ordernow"

const Menu = () => {
  const data = useStaticQuery(graphql`
    {
      coffees: file(relativePath: { eq: "menu_coffees.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      specialties: file(relativePath: { eq: "menu_specialties.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      hotDrinks: file(relativePath: { eq: "menu_hotDrinks.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      coldDrinks: file(relativePath: { eq: "menu_coldDrinks.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      sweets: file(relativePath: { eq: "menu_sweets.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    //  autoplay: true,
    autoplaySpeed: 3000,
  }
  return (
    <section className="menuContainer " id="menu">
      <div className="menuText max-w-max mx-auto text-center py-20">
        <h1 className="uppercase font-extrabold"> our menu</h1>
        <p className="text-xl">
          The <b>Everyday</b> menu has the treats for you. <br />
          Cookies for Tuesday, Frapps for Friday, your way, <b>Everyday </b>
        </p>
      </div>

      <div className="menuSlides ">
        <Slider {...settings} className="">
          <OrderNow
            display={
              <Img
                fluid={data.coffees.childImageSharp.fluid}
                className="menu-pic"
              />
            }
            buttonStyle="w-full p-2"
          />
          <OrderNow
            display={
              <Img
                fluid={data.specialties.childImageSharp.fluid}
                className="menu-pic "
              />
            }
            buttonStyle="w-full p-2"
          />
          <OrderNow
            display={
              <Img
                fluid={data.hotDrinks.childImageSharp.fluid}
                className="menu-pic "
              />
            }
            buttonStyle="w-full p-2"
          />
          <OrderNow
            display={
              <Img
                fluid={data.coldDrinks.childImageSharp.fluid}
                className="menu-pic"
              />
            }
            buttonStyle="w-full p-2"
          />
          <OrderNow
            display={
              <Img
                fluid={data.sweets.childImageSharp.fluid}
                className="menu-pic"
              />
            }
            buttonStyle="w-full p-2"
          />
        </Slider>
      </div>
    </section>
  )
}

export default Menu
