import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import OrderNow from "./ordernow"

const OurStory = props => {
  const data = useStaticQuery(graphql`
    {
      banner: file(relativePath: { eq: "storyBanner.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      steps: file(relativePath: { eq: "ourStory-steps.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      ourStoryLogo: file(relativePath: { eq: "ourStory-logo.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)


  return (
    <section className="mainSlidesContainer ">
     
      <div className="bannerContainer relative ">
        <div className="topText ml-4 sm:ml-20 lg:ml-0   -mb-32 md:-mb-44 mt-20 sm:mt-32 lg:mt-0 lg:absolute lg:top-32 2xl:top-60 left-0 lg:left-20 2xl:left-40">
          <span className="uppercase font-extrabold text-sm xxsm:text-lg xsm:text-2xl md:text-3xl">about everyday</span>
          <p className="uppercase font-extrabold lg:pt-20 py-4 lg:py-0">
            <span className="text-lg xxsm:text-2xl xxsm:text-3xl md:text-5xl xl:text-6xl">we brew for you,</span> <br />
            <span className="text-xl xxsm:text-4xl xxsm:text-5xl md:text-7xl xl:text-8xl">Everyday.</span>
          </p>
        </div>
        <Img fluid={data.banner.childImageSharp.fluid} className="menu-pic" />

        <div className="bottomText text-center lg:text-left lg:absolute right-10 xl:right-20 2xl:right-40  bottom-10  2xl:bottom-20  2xl:bottom-40 w-full lg:w-2/5 2xl:w-1/3 my-10 lg:my-0 px-4 sm:px-16 lg:px-0">
          <p className="text-base md:text-2xl">
            Great coffee that is our source of energy. However you coffee,{" "}
            <b>Everyday</b> baristas know how to brew; from iced vanilla
            frappuccino to double shot espresso. Delivered in no time,{" "}
            <b>Everyday coffee</b> arrives hot (or ice cold), brewed for you.
          </p>
        </div>
      </div>

      <div className="bottomContainer mt-20">
        <h1 className="uppercase font-extrabold max-w-max mx-auto text-xl xxsm:text-4xl xsm:text-6xl md:text-8xl">
          {" "}
          how it works{" "}
        </h1>
        <div className="main relative w-full pb-20 lg:pb-40">
        <div className="stepsContainer w-full xl:w-2/3 text-center mx-auto">
        <Img fluid={data.steps.childImageSharp.fluid} className="menu-pic " />
        <OrderNow display={ 
          <div className="orderBtn text-white p-4 uppercase font-extrabold bg-black text-blue">
          order now!
          </div>
        }/>
        </div>
        <div className="imgWrapper absolute top-40 md:top-52 xl:top-28 right-0">
        <Img fluid={data.ourStoryLogo.childImageSharp.fluid} className="w-20  md:w-32 xl:w-80 " />
        </div>
        </div>
      </div>
    </section>
  )
}

export default OurStory
