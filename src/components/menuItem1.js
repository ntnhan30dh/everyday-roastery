import React from "react"

import Americano from "../images/menu/Hot Coffees/Americano.png"
import Flat_white from "../images/menu/Hot Coffees/Flat white.png"
import Latte from "../images/menu/Hot Coffees/Latte.png"
import Spanish_Latte from "../images/menu/Hot Coffees/Americano.png"



const MenuItem1 = props => {

    const pic = (name)=>{
       if (name === "Americano")
       return "Americano"
    }

  return <div>
      <img src={pic(props.name)} alt={props.name} />
      {props.name}
      </div>
}

export default MenuItem1
