import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const MenuItem = props => {
  const [pic, setPic] = useState(0)

  const data = useStaticQuery(graphql`
    {
      burritoBeef: file(relativePath: { eq: "burrito_beef.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      burritoChicken: file(relativePath: { eq: "burrito_chicken.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      burritoPork: file(relativePath: { eq: "burrito_pork.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      burritoVeggie: file(relativePath: { eq: "burrito_veggie.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      quesadillaBeef: file(relativePath: { eq: "quesadilla_beef.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      quesadillaChicken: file(relativePath: { eq: "quesadilla_chicken.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      quesadillaVeggie: file(relativePath: { eq: "quesadilla_veggie.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      burritoBowlBeef: file(relativePath: { eq: "burrito_beef_bowl.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      burritoBowlChicken: file(
        relativePath: { eq: "burrito_chicken_bowl.png" }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      burritoBowlVeggie: file(relativePath: { eq: "burrito_veggie_bowl.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      dipQuacamole: file(relativePath: { eq: "dip_guacamole.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      dipRoja: file(relativePath: { eq: "dip_salsa_roja.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      dipVerde: file(relativePath: { eq: "dip_salsa_verde.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      dipPicante: file(relativePath: { eq: "dip_salsa_picante.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      brBeefBadge: file(relativePath: { eq: "badge__beef-burrito.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      brChickenBadge: file(relativePath: { eq: "badge__chicken-burrito.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      brVeggiBadge: file(relativePath: { eq: "badge__veggi-burrito.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      brPorkBadge: file(relativePath: { eq: "badge__pork-burrito.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      queChickenBadge: file(
        relativePath: { eq: "badge__chicken-quesadillas.png" }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      queVeggieBadge: file(relativePath: { eq: "badge__veggi-quesadillas.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      queBeefBadge: file(relativePath: { eq: "badge__beef-quesadillas.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      bowlChickenBadge: file(relativePath: { eq: "badge__chicken-bowl.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      bowlVeggiBadge: file(relativePath: { eq: "badge__veggi-bowl.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      bowlBeefBadge: file(relativePath: { eq: "badge__beef-bowl.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      salPicanteBadge: file(relativePath: { eq: "badge__sala-picante.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      salVerdeBadge: file(relativePath: { eq: "badge__salsa-verde.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      salGuacamoleBadge: file(relativePath: { eq: "badge__guacamole.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      salRojaBadge: file(relativePath: { eq: "badge__salsa-roja.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const picsSrc = {
    burritos: {
      pics: [
        data.burritoChicken.childImageSharp.fluid,
        data.burritoVeggie.childImageSharp.fluid,
        data.burritoBeef.childImageSharp.fluid,
        data.burritoPork.childImageSharp.fluid,
      ],
      badges: [
        data.brChickenBadge.childImageSharp.fluid,
        data.brVeggiBadge.childImageSharp.fluid,
        data.brBeefBadge.childImageSharp.fluid,
        data.brPorkBadge.childImageSharp.fluid,
      ],
    },
    quesadillas: {
      pics: [
        data.quesadillaChicken.childImageSharp.fluid,
        data.quesadillaVeggie.childImageSharp.fluid,
        data.quesadillaBeef.childImageSharp.fluid,
      ],
      badges: [
        data.queChickenBadge.childImageSharp.fluid,
        data.queVeggieBadge.childImageSharp.fluid,
        data.queBeefBadge.childImageSharp.fluid,
      ],
    },

    "burrito bowls": {
      pics: [
        data.burritoBowlChicken.childImageSharp.fluid,
        data.burritoBowlVeggie.childImageSharp.fluid,
        data.burritoBowlBeef.childImageSharp.fluid,
      ],

      badges: [
        data.bowlChickenBadge.childImageSharp.fluid,
        data.bowlVeggiBadge.childImageSharp.fluid,
        data.bowlBeefBadge.childImageSharp.fluid,
      ],
    },
    salsas: {
      pics: [
        data.dipPicante.childImageSharp.fluid,
        data.dipVerde.childImageSharp.fluid,
        data.dipQuacamole.childImageSharp.fluid,
        data.dipRoja.childImageSharp.fluid,
      ],
      badges: [
        data.salPicanteBadge.childImageSharp.fluid,
        data.salVerdeBadge.childImageSharp.fluid,
        data.salGuacamoleBadge.childImageSharp.fluid,
        data.salRojaBadge.childImageSharp.fluid,
      ],
    },
  }

  const picArr = picsSrc[`${props.setting.name}`]["pics"]
  const badgeArr = picsSrc[`${props.setting.name}`]["badges"]

  useEffect(() => {
    if (pic >= picArr.length) {
      setPic(0)
    }
    const interval = setInterval(() => {
      if (pic <= picArr.length) {
        setPic(pic => pic + 1)
      }
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [pic, picArr.length])

  return (
    <div
      className={`menu-item-container flex flex-col md:flex-row border-10 xsm:border-15 border-${props.setting.border} w-3/4 lg:w-2/3 xl:w-1/2 mx-auto my-12  transform  ${props.setting.reverse}`}
    >
      <div
        className={`absolute w-24 xsm:w-32 md:w-1/6 z-50 ${props.setting.badge}`}
      >
        <Img className={"badget w-full"} fluid={badgeArr[pic]} />
      </div>
      <div className="relative w-full md:w-2/3 overflow-hidden">
        <div className="absolute w-full bottom-0 top-0">
          <Img
            className={" menu-pic2 w-full"}
            fluid={pic > 0 ? picArr[pic - 1] : picArr[picArr.length - 1]}
          />
        </div>
        <Img className={" menu-pic w-full "} fluid={picArr[pic]} />
      </div>
      <div className="menu-list flex flex-col w-full md:w-1/3 py-10 md:py-0">
        <div className="m-auto w-3/4">
          <h1 className=" text-3xl lg:text-4xl text-red text-center uppercase">
            {props.setting.name}
          </h1>
          <ul className="text-2xl text-green  text-center leading-12">
            {props.setting.itemList.map(i => (
              <li>
                <button
                  className="text-2xl text-green"
                  onClick={() => setPic(props.setting.itemList.indexOf(i))}
                >
                  {i}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MenuItem
