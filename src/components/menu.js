import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import MenuItem from "./menu-item"


const Menu = () => {
  const data = useStaticQuery(graphql`
    {
      bg: file(relativePath: { eq: "burrito-combo-x3_center.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      iconSet: file(relativePath: { eq: "menu-icon-set.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const imageData = data.bg.childImageSharp.fluid
  return (
    <section className="menuContainer " id="menu">
      {/* <span id="menu" name="menu"></span> */}
      <span className="wave-white_down "></span>
      <div className="pic-red-container  w-full  flex  flex-col md:flex-row relative	">
        <span className="wave-white_up"></span>
        <BackgroundImage
          Tag="section"
          fluid={imageData}
          background-size="cover"
          className="pic-container w-full md:w-1/2 h-96 md:h-auto "
        ></BackgroundImage>

        <div className="red-container  w-full md:w-1/2 bg-red px-4 xsm:px-20 py-20 md:py-40">
          <Img
            className={" w-11/12 xsm:w-2/3 md:w-11/12 lg:w-3/4 xl:w-2/3 mx-auto mb-10"}
            fluid={data.iconSet.childImageSharp.fluid}
          />
          <p className="text-3xl lg:text-4xl xl:text-5xl text-center md:text-left text-yellow font-semibold w-11/12 xsm:w-2/3 md:w-11/12 lg:w-3/4 xl:w-2/3 mx-auto pb-10 md:pb-0">
            Order for your movie night or as an exciting lunch time treat -
            because, let’s face it, life is always better with burritos.
          </p>
        </div>
      </div>
      <div className="top-text w-full text-center">
        <p className="text-black text-xl xxsm:text-2xl xxsm:pt-10 ">
          Brace yourself for a Mexican feast of flavours, <br /> from cool
          guacamole to tangy salsa.
        </p>
        <h1 className="text-green text-2xl xxsm:text-4xl sm:text-5xl font-semibold mt-10 xxsm:pb-10">
          EXPLORE OUR MENU TODAY!
        </h1>
      </div>
      <MenuItem
        setting={{
          border: "green",
          name: "burritos",
          itemList: [
            "Chicken Burrito",
            "Veggi Buritto",
            "Beef Burrito",
            "Pork Burrito",
          ],
          reverse: "md:translate-x-8",
          badge: "top-14 -left-14 xsm:-left-20",
        }}
      />
      <MenuItem
        setting={{
          border: "yellow",
          name: "quesadillas",
          itemList: [
            "Chicken Quesadilla ",
            "Veggi Quesadilla ",
            "Beef Quesadilla ",
          ],
          reverse: "md:flex-row-reverse md:-translate-x-8",
          badge: "top-20 -right-14 xsm:-right-20",
        }}
      />
      <MenuItem
        setting={{
          border: "green",
          name: "burrito bowls",
          itemList: [ "Chicken Bowl", "Veggie Bowl","Beef Bowl"],
          reverse: "md:translate-x-8",
          badge: "top-16 -left-14 xsm:-left-20",
        }}
      />
      <MenuItem
        setting={{
          border: "red",
          name: "salsas",
          itemList: [
            "Salsa Picante",
            "Salsa Verde",
            "Guacamole ",
            "Salsa Roja",
          ],
          reverse: "md:flex-row-reverse md:-translate-x-8",
          badge: "top-16 -right-14 xsm:-right-20",
        }}
      />
    </section>
  )
}

export default Menu
