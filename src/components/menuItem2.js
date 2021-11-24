import React, { useState } from "react"
import ReactCardFlip from "react-card-flip"

import Sharing from "../images/menu/tarot/cardSharing_back.png"
import Treat from "../images/menu/tarot/cardTreat_back.png"
import Focus from "../images/menu/tarot/cardFocus_back.png"
import Habit from "../images/menu/tarot/cardHabit_back.png"
import Break from "../images/menu/tarot/cardBreak_back.png"
import Energy from "../images/menu/tarot/cardHabit_back.png"

const MenuItem2 = props => {
  let [isFlipped, setIsFlipped] = useState(false)

  const pics = {
    Sharing: Sharing,
    Treat: Treat,
    Focus: Focus,
    Habit: Habit,
    Break: Break,
    Energy: Energy,
  }

  return (
    <div onMouseLeave={()=>setIsFlipped(false)}>
      <ReactCardFlip
        isFlipped={isFlipped}
        flipSpeedBackToFront={1.2}
        flipSpeedFrontToBack={1.2}
        
      >
        <div onClick={() => setIsFlipped(!isFlipped)}>
          <img src={pics[props.name]} alt={props.name} />
          This is the front of the card.
        </div>

        <div onClick={() => setIsFlipped(!isFlipped)} >
          This is the back of the card.
        </div>
      </ReactCardFlip>
    </div>
  )
}

export default MenuItem2
