import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

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
          fluid(quality: 90, maxWidth: 2000) {
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
      <div className="bannerContainer relative">
        <div className="topText absolute top-60 left-40">
          <h1 className="uppercase font-extrabold">about everyday</h1>
          <h1 className="uppercase font-extrabold pt-20">
            <span className="text-6xl">we brew for you,</span> <br />
            <span className="text-8xl">Everyday.</span>
          </h1>
        </div>
        <Img fluid={data.banner.childImageSharp.fluid} className="menu-pic" />

        <div className="bottomText absolute right-40 bottom-40 w-2/5">
          <p className="text-2xl">
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
        <div className="main relative w-full">

        <div className="stepsContainer w-2/3">
        <Img fluid={data.steps.childImageSharp.fluid} className="menu-pic " />
        <button>down load</button>
        </div>
        <div className="imgWrapper absolute top-0 right-0">
        <Img fluid={data.ourStoryLogo.childImageSharp.fluid} className="w-40 " />
        </div>
        </div>
      </div>
    </section>
  )
}

export default OurStory
