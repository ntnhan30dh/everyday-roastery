import React from "react"
import Slider from "react-slick"

import MenuItem1 from "./menuItem1"

const Carousel = props => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
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

  const menuType = type => {
    let res = []
    switch (type) {
      case "Hot Coffees":
        res = ["Spanish Latte", "Latte", "Americano", "Flat White"]
        break
      case "Cold Coffees":
        res = [
          "Iced Latte",
          "Iced Vegan Latte",
          "Iced Spanish Latte",
          "Iced Caramel Spanish Latte",
          "Iced Macchiato",
          "Iced Caramel Latte",
        ]
        break
      default:
        res = []
    }

    return res
  }
  const itemList = menuType(props.type)
  return (
    <div className="menuSlides ">
      <Slider {...settings} className="">
       {itemList.map(i=>{
           return (
            <MenuItem1 name={i}/>
           )
       })}
      </Slider>
    </div>
  )
}

export default Carousel
