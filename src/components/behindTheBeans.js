import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Plx from "react-plx"

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

  const parallaxUp = [
    {
      start: "self",
      duration: 1000,
      properties: [
        {
          startValue: 50,
          endValue: 0,
          property: "translateY",
          unit: "%",
        },
      ],
    },
  ]

  const hoverImg = "transform hover:scale-110 duration-200"
  const textDiv = 'w-3/4 md:w-2/3 lg:w-1/2'
  const p = 'md:w-2/3'
  return (
    <section id="behindTheBeans" className="mx-4 md:mx-1/10 lg:mx-1/20">
      <h1
        className={`${props.textStyle.h1_1} font-black text-center max-w-max mx-auto mx-2 py-10 md:py-20 lg:py-24`}
      >
        Behind the beanS
      </h1>
      {/* <div className="wrapper1  "> */}
        <div className={`text1 ${textDiv}`}>
          <h2 className={`${props.textStyle.h2_1} font-black  `}>
            Delicious tastes,
            <br /> sleek design{" "}
          </h2>
          <p className={`${props.textStyle.p} ${p}`}>
            Everyday Roastery's delicious taste and sleek design aims to deliver
            the convenience and quality of your local neighbourhood coffee shop
            directly to your door.
          </p>
        </div>

        <div className="picContainer1   py-8 md:-mt-1/20">
          <div className="top relative md:w-1/2 md:ml-1/2  ">
            <Plx
              parallaxData={parallaxUp}
              className="absolute -top-6 left-0  w-3/4 z-20  overflow-hidden"
            >
              <Img
                className={hoverImg}
                fluid={data.pic1_1.childImageSharp.fluid}
              />
            </Plx>
            <div className="relative w-3/4 ml-6  ">
              <Img className="" fluid={data.pic1_bg.childImageSharp.fluid} />
            </div>
            <Plx parallaxData={parallaxUp} className=" relative -mt-1/5 overflow-hidden">
              <Img
                className={` ${hoverImg} ml-1/4 `}
                fluid={data.pic1_2.childImageSharp.fluid}
              />
            </Plx>
          </div>
          <Plx
            parallaxData={parallaxUp}
            className="bottom hidden md:block w-1/3 ml-20 overflow-hidden "
          >
            <Img
              className={`${hoverImg}`}
              fluid={data.pic1_3.childImageSharp.fluid}
            />
          </Plx>
        </div>
      {/* </div> */}

      <div className={`text2 ${textDiv} my-10 ml-auto mr-0`}>
        <h2 className={`${props.textStyle.h2_1} font-black  `}>
          100% Arabica, sourced locally{" "}
        </h2>
        <p className={`${props.textStyle.p} ${p}`}>
          Delivering the freshest coffee everyday, our beans are 100% Arabica
          and sourced locally from farmers in the country of origin.
        </p>
      </div>

      <div className="picContainer2 md:w-1/2">
        <Plx
            parallaxData={parallaxUp} className="relative w-3/4 overflow-hidden absolute -right-1/4">
          <Img
            className={`${hoverImg}  `}
            fluid={data.pic2_1.childImageSharp.fluid}
          />
        </Plx>
        <div className="overflow-hidden">

        <Img className={`${hoverImg}-mt-1/10 w-3/4`} fluid={data.pic2_2.childImageSharp.fluid} />
        </div>
      </div>

      <div className="wrap3 flex flex-col md:flex-row">
      <div className={`text3 ${textDiv} my-10 md:mt-20`}>
        <h2 className={`${props.textStyle.h2_1} font-black  `}>
          YOUR everyday companion
        </h2>
        <p className={`${props.textStyle.p} ${p}`}>
          Perfect for any moment or mood, Everyday Roastery is your companion
          any time of the day.
        </p>
      </div>

      <div className="picContainer3 md:w-1/2 mt-1/10">
        <div className="top relative w-3/4">
          <Plx
            parallaxData={parallaxUp} className="absolute top-1/10 -right-1/10  w-full z-20 overflow-hidden">
            <Img className={`${hoverImg}`} fluid={data.pic3_1.childImageSharp.fluid} />
          </Plx>
          <div className="relative">
            <Img className={" "} fluid={data.pic3_bg.childImageSharp.fluid} />
          </div>
          <div className=" relative -mt-1/6   z-30 overflow-hidden absolute -right-1/4 ">
            <Img
              className={`${hoverImg} `}
              fluid={data.pic3_2.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>

      </div>
    </section>
  )
}

export default BehindTheBeans
