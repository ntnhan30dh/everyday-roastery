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
      <div  className="my-14 lg:w-1/3 mx-12">
      <div className="lg:w-2/3">
        <img src={pics[step]} alt="" />
      </div>
        <h3 className={`uppercase ${props.textStyle.h3} font-black`}>{headers[step]} </h3>
        <p className={`${props.textStyle.p} `}> {texts[step]}</p>
      </div>
    )
  }

  return (
    <section  className="howToOrder  md:pt-40" id="howToOrder">
      {/* <span id="howToOrder" className="mt-10"> </span> */}
    <h1
        className={`${props.textStyle.h1} font-black text-center mx-auto pt-20 lg:pt-28 hoverText bg2`}
      >
      HOW TO ORDER
      </h1>
      <div className="cards mx-auto text-center lg:text-left w-2/3 sm:w-1/2 md:w-1/3 lg:w-full lg:flex justify-between">
        {card("step1")}
        {card("step2")}
        {card("step3")}
      </div>
    </section>
  )
}

export default HowToOrder
