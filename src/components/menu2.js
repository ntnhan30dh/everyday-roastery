import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Carousel from "../components/menu_carousel"

import bgText from '../images/menu/bg/menuBg7.png'

const Menu2 = props => {
  let [menuType, setMenuType] = useState("Hot Coffees")

  const menuTypeItem = type => {
    return (
      <button
        className={`max-w-max text-base md:text-4xl font-black uppercase mx-4 my-2 hover:opacity-100 ${
          type === menuType
            ? "opacity-100 border-b-4 border-black"
            : "opacity-15"
        }`}
        onClick={() => {
          setMenuType(type)
          console.log({ type })
        }}
      >
        {type}
      </button>
    )
  }
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section className="menuContainer pt:20 md:pt-64 "  id="menu">
      <span id="menu" className="-mt:80"> </span>
      <h1
        className={`${props.textStyle.h1} font-black text-center max-w-max mx-auto hoverText bg7` }
        style={{
   
    
  }}
      >
        OUR MENU
      </h1>
      <ul className="flex justify-center  md:justify-around flex-wrap md:my-10">
        {menuTypeItem("Hot Coffees")}
        {menuTypeItem("Cold Coffees")}
        {menuTypeItem("Frappes")}
        {menuTypeItem("Cold Drinks")}
        {menuTypeItem("Hot Drinks")}
      </ul>
      <Carousel type={menuType} textStyle={props.textStyle } country={props.country}/>
      <div className="text  mx-auto text-center pt-10 md:pt-0  md:my-20 ">
        <h2 className={`${props.textStyle.h2} text-center font-black`}>
          {" "}
          Don’t know what <br /> to choose?
        </h2>
        <p className={`${props.textStyle.p} text-center  mx-auto md:my-10 `}>
          Select one of the cards below and let us find <br /> the coffee that will
          best suit your mood!
        </p>
      </div>
      <Carousel type="tarot" country={props.country}/>
    </section>
  )
}

export default Menu2
