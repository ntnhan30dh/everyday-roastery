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
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
     autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <section className="menuContainer " id="menu">
      <div className="menuText max-w-max mx-auto text-center py-20">
        <h1 className="uppercase font-extrabold"> our menu</h1>
        <p className="text-xl">
          The <b>Everyday</b> menu has the treats for you. <br />
          Cookies for Tuesday, Frappes for Friday, your way, <b>Everyday </b>
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
        <div className="max-w-max mx-auto my-10">
        <OrderNow display={ 
          <div className="orderBtn text-white text-sm sm:text-xl p-2 md:p-4 uppercase font-extrabold bg-blue ">
          Order Now!
          </div>
        }/>
        </div>
      </div>
    </section>
  )
}

export default Menu
