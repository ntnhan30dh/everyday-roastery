import React from "react"
import Slider from "react-slick"

import MenuItem1 from "./menuItem1"
import MenuItem2 from "./menuItem2"

const Carousel = props => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    //cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     initialSlide: 2,
      //   },
      // },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  }

  const menuType =  {
    "Hot Coffees":["Spanish Latte", "Spanish Latte", "Latte", "Americano", "Flat White"],
    // need to update 
    "Cold Coffees":["Spanish Latte", "Latte", "Americano", "Flat White"],
    "Frappes":["Latte","Spanish Latte", "Latte", "Americano", "Flat White"],
    "Cold Drinks":["Spanish Latte", "Latte", "Americano", "Flat White"],
    "Hot Drinks":["Spanish Latte", "Latte", "Americano", "Flat White"],
    "tarot":["Sharing", "Treat", "Focus", "Habit", "Break", "Energy"],
  }
  const itemList = menuType[props.type]
  return (
    <div className="menuSlides my-10 px-2 md:mx-4 ">
      <Slider {...settings} className="">
       {itemList.map(i=>{
           return (
            props.type==="tarot" ?<MenuItem2 name={i}/>: <MenuItem1 name={i} position = {itemList.indexOf(i)} menuType={props.type} textStyle={props.textStyle }/>
           )
       })}
      </Slider>
    </div>
  )
}

export default Carousel
