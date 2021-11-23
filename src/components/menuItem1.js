import React from "react"
import { Modal } from "semantic-ui-react"

import Americano from "../images/menu/Hot Coffees/Americano.png"
import Flat_white from "../images/menu/Hot Coffees/Flat white.png"
import Latte from "../images/menu/Hot Coffees/Latte.png"
import Spanish_Latte from "../images/menu/Hot Coffees/Spanish Latte.png"

const MenuItem1 = props => {
  const pics = {
    Americano: Americano,
    "Flat White": Flat_white,
    Latte: Latte,
    "Spanish Latte": Spanish_Latte,
  }

  return (
    <Modal
      trigger={
        <div className="menuItem1Wrap">
          <div className=" imgContainer overflow-hidden transform hover:scale-75 	 duration-200 ">
            <div className=" imgWrap transform hover:scale-160 duration-200 hover:translate-y-1/4 ">
          <img  src={pics[props.name]} alt={props.name} />
            </div>
          </div>
          {props.name}
        </div>
      }
      fluid
      size="medium"
    >
      Hi
    </Modal>
  )
}

export default MenuItem1
