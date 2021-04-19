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

  const banner = data.banner.childImageSharp.fluid

  return (
    <section className="mainSlidesContainer ">
      {/* <BackgroundImage
        fluid={banner}
        background-size="contain"
        className="StoryBgContainer h-screen mt-40 "
      ></BackgroundImage> */}
      <div className="bannerContainer relative ">
        <div className="topText ml-4 sm:ml-20 lg:ml-0   -mb-32 mt-20 sm:mt-32 lg:mt-0 lg:absolute top-20 lg:top-60 left-0 lg:left-40">
          <h1 className="uppercase font-extrabold text-3xl">about everyday</h1>
          <h1 className="uppercase font-extrabold lg:pt-20">
            <span className="text-lg lg:text-6xl">we brew for you,</span> <br />
            <span className="text-xl lg:text-8xl">Everyday.</span>
          </h1>
        </div>
        <Img fluid={data.banner.childImageSharp.fluid} className="menu-pic" />

        <div className="bottomText lg:absolute right-0 lg:right-40 bottom-0 lg:bottom-40 w-full lg:w-2/6 my-10 lg:my-0 px-4 sm: px-16 lg:px-0">
          <p className="text-md md:text-2xl">
            Great coffee that is our source of energy. However you coffee,{" "}
            <b>Everyday</b> baristas know how to brew; from iced vanilla
            frappuccino to double shot espresso. Delivered in no time,{" "}
            <b>Everyday coffee</b> arrives hot (or ice cold), brewed for you.
          </p>
        </div>
      </div>

      <div className="bottomContainer">
        <h1 className="uppercase font-extrabold max-w-max mx-auto">
          {" "}
          how it works{" "}
        </h1>
        <div className="main relative w-full pb-40">
        <div className="stepsContainer w-2/3 text-center mx-auto">
        <Img fluid={data.steps.childImageSharp.fluid} className="menu-pic " />
        <OrderNow display={ 
          <div className="orderBtn text-white p-4 uppercase font-extrabold bg-black">
          order now!
          </div>
        }/>
        </div>
        <div className="imgWrapper absolute top-28 right-0">
        <Img fluid={data.ourStoryLogo.childImageSharp.fluid} className="w-80 " />
        </div>
        </div>
      </div>
    </section>
  )
}

export default OurStory
