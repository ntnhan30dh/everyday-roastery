import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const BehindTheBeans = props => {
  const data = useStaticQuery(graphql`
    {
      pic1_1: file(relativePath: { eq: "behind1_1.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      pic1_2: file(relativePath: { eq: "behind1_2.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      pic1_bg: file(relativePath: { eq: "behind1_bg.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      pic1_3: file(relativePath: { eq: "behind1_3.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      pic2_1: file(relativePath: { eq: "behind2_1.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      pic2_2: file(relativePath: { eq: "behind2_2.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      pic3_1: file(relativePath: { eq: "behind3_1.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      pic3_2: file(relativePath: { eq: "behind3_2.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      pic3_bg: file(relativePath: { eq: "behind3_bg.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <section id="behindTheBeans">
      <h1
        className={`${props.textStyle.h1} font-black text-center max-w-max mx-auto`}
      >
        Behind the beanS
      </h1>
      <div className="text1">
        <h2 className={`${props.textStyle.h2} font-black  `}>
          Delicious tastes, sleek design{" "}
        </h2>
        <p className={`${props.textStyle.p}`}>
          Everyday Roastery's delicious taste and sleek design aims to deliver
          the convenience and quality of your local neighbourhood coffee shop
          directly to your door.
        </p>
      </div>
      <div className="picContainer1 w-1/4 mt-1/10">
        <div className="top relative">
          <div className="absolute -top-1/10 right-1/10  w-full z-20">
            <Img className={" "} fluid={data.pic1_1.childImageSharp.fluid} />
          </div>
          <div className="relative">
            <Img className={" "} fluid={data.pic1_bg.childImageSharp.fluid} />
          </div>
          <div className=" relative -mt-1/4">
            <Img
              className="absolute  -right-1/3"
              fluid={data.pic1_2.childImageSharp.fluid}
            />
          </div>
        </div>
        <div className="bottom">
          <Img
            className="absolute  "
            fluid={data.pic1_3.childImageSharp.fluid}
          />
        </div>
      </div>

      <div className="text2">
        <h2 className={`${props.textStyle.h2} font-black  `}>
          100% Arabica, sourced locally{" "}
        </h2>
        <p className={`${props.textStyle.p}`}>
          Delivering the freshest coffee everyday, our beans are 100% Arabica
          and sourced locally from farmers in the country of origin.
        </p>
      </div>

      <div className="picContainer2 w-1/3">
      <div className="relative">
        <Img className=" absolute -right-1/3  " fluid={data.pic2_1.childImageSharp.fluid} />
      </div>
        <Img className=" -mt-1/10 " fluid={data.pic2_2.childImageSharp.fluid} />
      </div>

      <div className="text3">
        <h2 className={`${props.textStyle.h2} font-black  `}>
        YOUR everyday companion
        </h2>
        <p className={`${props.textStyle.p}`}>
        Perfect for any moment or mood, Everyday Roastery is your companion any time of the day. 
        </p>
      </div>


      <div className="picContainer3 w-1/4 mt-1/10">
        <div className="top relative">
          <div className="absolute top-1/10 -right-1/10  w-full z-20">
            <Img className={" "} fluid={data.pic3_1.childImageSharp.fluid} />
          </div>
          <div className="relative">
            <Img className={" "} fluid={data.pic3_bg.childImageSharp.fluid} />
          </div>
          <div className=" relative -mt-1/6 z-30">
            <Img
              className="absolute  -right-1/3"
              fluid={data.pic3_2.childImageSharp.fluid}
            />
          </div>
        </div>
        
      </div>


    </section>
  )
}

export default BehindTheBeans
