import React from "react"
import Step1 from "../images/howToOrder/step1.png"
import Step2 from "../images/howToOrder/step2.png"
import Step3 from "../images/howToOrder/step3.png"

const HowToOrder = props => {
  const pics = {
    'step1': Step1,
    'step2': Step2,
    'step3': Step3,
  }

  const headers = {
    'step1': 'Place your order ',
    'step2': 'Search for your favourite',
    'step3': 'SIT BACK and RELAX',
  }

  const texts = {
    'step1': 'Place your order through our partner platforms',
    'step2': 'Search for Everyday Roastery and select your favourite drinks',
    'step3': 'Sit back and relax. Your order is on the way',
  }

  const card = step => {
    return (
      <div >
        <img src={pics[step]} alt="" />
        <h3 className='uppercase text-5xl font-black'>{headers[step]} </h3>
        <p className={`${props.textStyle.p} `}> {texts[step]}</p>
      </div>
    )
  }

  return (
    <section id="howToOrder" className="howToOrder">
      <h1 className={`${props.textStyle.h2} font-black  text-center`}>
        {" "}
        HOW TO ORDER{" "}
      </h1>
      <div className="cards">
        {card("step1")}
        {card("step2")}
        {card("step3")}
      </div>
    </section>
  )
}

export default HowToOrder
