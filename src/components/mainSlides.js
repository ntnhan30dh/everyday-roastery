import React from "react"
//import Img from "gatsby-image"

//import BackgroundImage from "gatsby-background-image"
import Slider from "react-slick"

import Slide from "./slide"

const MainSlides = props => {
 
      
  let nudge = props.menuState ? "nudge" : ""
  

  const settings = {
    dots: true,
    infinite: true,
    // fade: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 4000,
    
  }

  const textSize = "text-5xl sm:text-8xl"
  return (
    <section className={`mainSlidesContainer bg-black  ${nudge}`}>
      <Slider {...settings} className=" ">
        <Slide
          banner={1}
          text={
            <h1 className={`${textSize} uppercase text-white  font-extrabold  max-w-max `}>
              Good <br /> coffee <br /> good <br /> morning
            </h1>
          }
        />

        <Slide
          banner={2}
          text={
            <h1 className={`${textSize} uppercase text-white  font-extrabold`}>
              quality <br /> coffee, <br /> everyday
            </h1>
          }
        />

        <Slide
          banner={3}
          text={
            <h1 className={`${textSize} uppercase text-white  font-extrabold`}>
              everyday <br /> treats in <br /> a tap
            </h1>
          }
        />
      </Slider>
    </section>
  )
}

export default MainSlides
