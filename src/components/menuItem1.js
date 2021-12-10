import React from "react"
import { Modal } from "semantic-ui-react"

import OrderNow from "./ordernow"


import Americano from "../images/menu/Hot Coffees/Americano.png"
import Flat_white from "../images/menu/Hot Coffees/Flat white.png"
import Latte from "../images/menu/Hot Coffees/Latte.png"
import Spanish_Latte from "../images/menu/Hot Coffees/Spanish Latte.png"

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
    "Spanish Latte": Spanish_Latte,
  }

  const description = {
    "Americano": 'Espresso shot covered with a thin layer of fresh, steamed milk foam. Espresso shot covered with a thin layer of fresh, steamed milk foam.',
    "Flat White": 'Espresso shot covered with a thin layer of fresh, steamed milk foam. Espresso shot covered with a thin layer of fresh, steamed milk foam.',
    "Latte": 'Espresso shot covered with a thin layer of fresh, steamed milk foam. Espresso shot covered with a thin layer of fresh, steamed milk foam.',
    "Spanish Latte": 'Espresso shot covered with a thin layer of fresh, steamed milk foam. Espresso shot covered with a thin layer of fresh, steamed milk foam.',
  }
const bg = [bg1,bg2,bg3,bg4,bg5,bg6,bg7]
  return (
    <Modal
      trigger={
        <div className="menuItem1Wrap mx-2 md:mx-4">
          <div className="relative">
            <div className="absolute top-0 mx-2">
              <img src={bg[props.position]} alt={"background"} />
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
