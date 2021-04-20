import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import OrderNow from "./ordernow"

const Followus = () => {
  const data = useStaticQuery(graphql`
    {
      whereToFindUs: file(relativePath: { eq: "whereToFindUs.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <section className="followUs w-full  mt-20›">
      {/* <h1 className="uppercase font-extrabold max-w-max mx-auto text-center pt-20">where to find us</h1> */}
      <OrderNow
        display={
          <Img
            fluid={data.whereToFindUs.childImageSharp.fluid}
            className="menu-pic w-full"
          />
        }
        buttonStyle="w-full"
      />
    </section>
  )
}

export default Followus
