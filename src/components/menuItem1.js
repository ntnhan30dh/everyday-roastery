import React from "react"
import { Modal } from "semantic-ui-react"

import OrderNow from "./ordernow"


import Americano from "../images/menu/Hot Coffees/Americano.png"
import Flat_white from "../images/menu/Hot Coffees/Flat white.png"
import Latte from "../images/menu/Hot Coffees/Latte.png"
import Spanish_Latte from "../images/menu/Hot Coffees/Spanish Latte.png"
import Cappuccino from "../images/menu/Hot Coffees/Cappuccino.png"
import Macchiato from "../images/menu/Hot Coffees/Macchiato.png"
import Caramel_Latte from "../images/menu/Hot Coffees/Caramel Latte.png"
import Mocha from "../images/menu/Hot Coffees/Mocha.png"
import Mocha_Dark from "../images/menu/Hot Coffees/Dark Mocha.png"
import Mocha_White from "../images/menu/Hot Coffees/White Mocha.png"

import bg1 from "../images/menu/bg/menuBg1.png"
import bg2 from "../images/menu/bg/menuBg2.png"
import bg3 from "../images/menu/bg/menuBg3.png"
import bg4 from "../images/menu/bg/menuBg4.png"
import bg5 from "../images/menu/bg/menuBg5.png"
import bg6 from "../images/menu/bg/menuBg6.png"
import bg7 from "../images/menu/bg/menuBg7.png"

const MenuItem1 = props => {
  const pics = {
    "Americano": Americano,
    "Flat White": Flat_white,
    "Latte": Latte,
    "Vegan Latte": Latte,
    "Spanish Latte": Spanish_Latte,
    "Caramel Spanish Latte": Spanish_Latte,
    "Cappuccino": Cappuccino,
    "Macchiato": Macchiato,
    "Caramel Latte": Caramel_Latte,
    "Mocha": Mocha,
    "Salted Caramel Mocha": Mocha,
    "Dark Chocolate Mocha": Mocha_Dark,
    "White Chocolate Mocha": Mocha_White
  }

  const description = {
 "Americano":	"Equal parts espresso and water creating a bold and dark flavor",
"Flat White":	"Perfect balance of espresso (extra shot) coated with a delicate layer of velvety milk foam",
"Cappuccino":	"Dark espresso enveloped with a thick layer of steamed, frothy milk foam",
"Latte":	"Espresso shot covered with a thin layer of fresh, steamed milk foam",
"Vegan Latte":	"Espresso shot covered with a thin layer of fresh, steamed oat milk foam",
"Spanish Latte":	"A sweet and flavorful blend of sweet condensed milk and our rich espresso",
"Caramel Spanish Latte"	:"A sweet and flavorful blend of caramelized condensed milk and our rich espresso",
"Macchiato": "Freshly steamed fluffy milk foam with espresso roast",
"Caramel Latte":	"A smooth blend of milk and caramel flavour, topped with espresso",
"Mocha":"Delicious combination of our rich espresso with premium chocolate and frothed milk",
"Dark Chocolate Mocha":	"Premium rich, dark chocolate melted in creamy milk and topped with espresso and whipped cream",
"White Chocolate Mocha": "Premium white chocolate melted in milk and topped with our rich espresso and whipped cream",
"Salted Caramel Mocha":	"A creamy blend of premium dark chocolate, milk and caramel-flavoured syrup, topped with espresso and whipped cream"
  }
const bg = [bg1,bg2,bg3,bg4,bg5,bg6,bg7,bg1,bg2,bg3,bg4,bg5,bg6,bg7]
  return (
    <Modal
      trigger={
        <div className="menuItem1Wrap mx-2 md:mx-4">
          <div className="relative">
            <div className="absolute top-0 mx-2 h-full">
              <img src={bg[props.position]} alt={"background"}  className="object-cover h-full"/>
            </div>
            <div className=" imgContainer  overflow-hidden transform hover:scale-75 	 duration-200 ">
              <div className=" imgWrap transform hover:scale-160 duration-200 hover:translate-y-1/4 ">
                <img src={pics[props.name]} alt={props.name} />
              </div>
            </div>
          </div>
          <div className="text-lg md:text-2xl font-black my-2">
            {props.name}  
          </div>
        </div>
      }
      fluid
      size="medium"
      closeIcon
    >
    <div className="detailsItem md:flex ">
      <div className="img md:w-1/2 bg-white_grey">
      <div className=" imgWrap px-1/5 ">
                <img src={pics[props.name]} alt={props.name} />
              </div>
      </div>
      <div className="text md:w-1/2 p-4 md:p-10">
      <span className="font-black uppercase text-sm md:text-lg">
      {props.menuType}
      </span>
      <div className={`uppercase ${props.textStyle.h3} font-black py-4 md:py-6  border-b-2 border-black border-opacity-10`}>{props.name} </div>
      <p className={`${props.textStyle.p} my-4 md:my-10 `}>
      {description[props.name]}
      </p>
      <OrderNow
           country={props.country}
            display={
              <div className="orderBtn  text-white text-sm md:text-base rounded-full py-3 px-6  uppercase font-bold bg-blue mb-1/2 ">
                Order Now
              </div>
            }
          />
      </div>
    </div>
    </Modal>
  )
}

export default MenuItem1
