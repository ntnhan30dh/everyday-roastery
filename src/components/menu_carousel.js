import React from "react"
import Slider from "react-slick"

import MenuItem1 from "./menuItem1"
import MenuItem2 from "./menuItem2"

const Carousel = props => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const menuType =  {
    "Hot Coffees":["Spanish Latte", "Latte", "Americano", "Flat White"],
    "tarot":["Sharing", "Treat", "Focus", "Habit", "Break", "Energy"],
  }
  const itemList = menuType[props.type]
  return (
    <div className="menuSlides ">
      <Slider {...settings} className="">
       {itemList.map(i=>{
           return (
            props.type==="tarot" ?<MenuItem2 name={i}/>: <MenuItem1 name={i}/>
           )
       })}
      </Slider>
    </div>
  )
}

export default Carousel
