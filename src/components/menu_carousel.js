import React from "react"
import Slider from "react-slick"

import MenuItem1 from "./menuItem1"
import MenuItem2 from "./menuItem2"

const Carousel = props => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
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
          arrows: false,
        },
      },
    ],
  }

  const menuType = {
    "Hot Coffees": [
      "Americano",
      "Flat White",
      "Cappuccino",
      "Latte",
      "Vegan Latte",
      "Spanish Latte",
      "Caramel Spanish Latte",
      "Macchiato",
      "Caramel Latte",
      "Mocha",
      "Dark Chocolate Mocha",
      "White Chocolate Mocha",
      "Salted Caramel Mocha",
    ],
    "Cold Coffees": [
      "Iced Americano",
      "Iced Latte",
      "Iced Vegan Latte",
      "Iced Spanish Latte",
      "Iced Caramel Spanish Latte",
      "Iced Macchiato",
      "Iced Caramel Latte",
      "Iced Espresso Shaker",
      "Iced Mocha",
      "Iced Dark Chocolate Mocha",
      "Iced White Chocolate Mocha",
      "Iced Salted Caramel Mocha",
    ],
    // need to update
    Frappes: [
      "Dark Mocha Frappe",
      "White Mocha Frappe",
      "Chocolate Chip Cookie Frappe",
      "Chocolate Hazelnut Frappe",
      "Vanilla Frappe",
      "Salted Caramel Frappe",
      "Chocolate Frappe",
      "Strawberry Frappe",
      "Green Apple Mint Frappe",
      "Mango Frappe",
    ],
    "Cold Drinks": [
      "Red Berry Ice Tea",
      "Peach Ice Tea",
      "Lemon Ice Tea",
      "Pear & Peach Green Ice Tea",
    ],
    "Hot Drinks": ["Hot Chocolate", "Black Tea", "Green Tea","Hot Chocolate"],
    tarot: ["Sharing", "Treat", "Focus", "Habit", "Break", "Energy"],
  }
  const itemList = menuType[props.type]
  return (
    <div className="menuSlides my-10 px-2 md:mx-4 ">
      <Slider {...settings} className="">
        {itemList.map(i => {
          return props.type === "tarot" ? (
            <MenuItem2 name={i} country={props.country} />
          ) : (
            <MenuItem1
              name={i}
              position={itemList.indexOf(i)}
              menuType={props.type}
              textStyle={props.textStyle}
              country={props.country}
            />
          )
        })}
      </Slider>
    </div>
  )
}

export default Carousel
