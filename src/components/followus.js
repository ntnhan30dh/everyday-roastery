import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Followus = () => {
  const data = useStaticQuery(graphql`
    {
      iconSet: file(relativePath: { eq: "icon-set-green.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 900) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      video: file(relativePath: { eq: "video-placeholder.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      pic1: file(relativePath: { eq: "pic_02.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }


      pic2: file(relativePath: { eq: "pic_03.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }


      pic3: file(relativePath: { eq: "pic_01.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <section className="videoContainer relative bg-yellow xsm:mt-20">
      <span className="wave-white-top"></span>
      <p className=" w-2/3  xl:w-2/5   mx-auto text-red text-2xl  md:text-3xl text-center pt-32  pb-10">
        Our dishes cover all food groups, full of fresh ingredients and
        conveniently packed for you to enjoy wherever you are.{" "}
      </p>
      <Img
        className={" iconSet w-2/3 xl:w-1/3 mx-auto"}
        fluid={data.iconSet.childImageSharp.fluid}
      />
      {/* <Img
          className={" iconSet w-3/4 lg:w-2/5 mx-auto my-20"}
          fluid={data.video.childImageSharp.fluid}
        /> */}
      <div className="pics w-11/12 lg:w-2/3 mx-auto mt-12 sm:mt-20 flex ">
        <Img className={" w-1/3"} fluid={data.pic1.childImageSharp.fluid} />
        <Img className={" w-1/3 mx-4 lg:mx-8" } fluid={data.pic2.childImageSharp.fluid} />
        <Img className={" w-1/3"} fluid={data.pic3.childImageSharp.fluid} />
      </div>
      <div className="icon-div h-24 md:h-28 lg:h-32 xl:h-40 my-12 sm:my-20"></div>
      <div>hi</div>
      <span className="wave-green-bottom"></span>
    </section>
  )
}

export default Followus
