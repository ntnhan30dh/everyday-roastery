import React from "react"

import fb from '../images/soMe/fb.png'
import ig from '../images/soMe/ig.png'
import twitter from '../images/soMe/twitter.png'
import snapchat from '../images/soMe/snapchat.png'

import foodpanda from "../images/logo-foodpanda.png"
import talabat from "../images/logo-talabat.png"
import hungerstation from "../images/logo-hungerstation.png"
import yemekspeti from "../images/logo-yemekspeti.png"


const Footer2 = props => {
  const countries = [
    "saudi arabia",
    "Kuwait",
    "UAE",
    "Singapore",
    "Malaysia",
    "Qatar",
    "Bahrain",
    "Hungary",
    "Turkey",
    "Egypt",
    "Germany",
  ]

  const brands =[foodpanda,talabat, hungerstation, yemekspeti   ]

  const soMeIcons = [fb, ig, twitter, snapchat]
  return (
    <section className="footer bg-black text-white" id="footer">
      <div className="countries w-1/3">
        <h3 className={`uppercase ${props.textStyle.h3} font-black`}>
          Serve the world{" "}
        </h3>
        <div className="flex flex-wrap">
          {countries.map(c => {
            return (
              <span className="text-xl font-black uppercase w-1/3">{c}</span>
            )
          })}
        </div>
      </div>

      <div className="soMe">
        <h3 className={`uppercase ${props.textStyle.h3} font-black`}>
          we brew for you everyday{" "}
        </h3>
        <div className="soMeWrap flex">
        {soMeIcons.map(i=>{
            return (
            <div className="w-10">
                <img src={i} alt={i+" pic"} />
            </div>
            )
        })}
        </div>
      </div>

      <div className="brands flex w-full">
          {brands.map(b=>{
              return (
                <div className="w-32">
                <img src={b} alt={b+" pic"} />
            </div> 
              )
          })}
      </div>
      <p> © 2021 All Rights Reserved Mediakeys </p>
    </section>
  )
}

export default Footer2
