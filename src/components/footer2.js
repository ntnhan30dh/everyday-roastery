import React from "react"

import fb from "../images/soMe/fb.png"
import ig from "../images/soMe/ig.png"
// import twitter from "../images/soMe/twitter.png"
// import snapchat from "../images/soMe/snapchat.png"

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

  const IGlinks = {
    "Saudi Arabia": "https://www.instagram.com/byeverydaysa/",
    "Bahrain": "https://www.instagram.com/everyday.roastery.bh/",
    "Kuwait": "https://www.instagram.com/everyday.roastery.kw/",
    "UAE": "https://www.instagram.com/everyday.roastery.uae/",
    "Qatar": "https://www.instagram.com/everyday.roastery.qa/",
    "Turkey": "https://www.instagram.com/everyday.roastery.tk/",
    "Egypt": "https://www.instagram.com/everyday.roastery.egypt/",
  }

  const brands = [foodpanda, talabat, hungerstation, yemekspeti]

  const soMeIcons = [fb, ig, ]
  return (
    <section className="footer bg-black text-white py-20 xl:py-28 lg:px-1/20 xl:px-1/10" id="footer">
      <div className="top lg:flex flex-row-reverse">      
      <div className="countries text-center lg:w-1/2">
        <h3 className={`uppercase ${props.textStyle.h3} font-black text-3xl `}>
          Serve the world{" "}
        </h3>
        <div className="flex flex-wrap my-10">
          {countries.map(c => {
            return (
              <span className="text-sm md:text-xl font-black uppercase w-1/2 md:w-1/3 my-2">
                {c}
              </span>
            )
          })}
        </div>
      </div>

      <div className="soMe lg:w-1/2 lg:text-center">
        <h3
          className={`uppercase ${props.textStyle.h3} font-black hidden lg:block`}
        >
        FRESHLY BREWED FOR  <br /> you everyday{" "}
        </h3>
        <h4 className='uppercase font-black hidden lg:block'>FOLLOW US ON SOCIAL MEDIA</h4>
        <div className="soMeWrap flex justify-center /lg:justify-start">
          {soMeIcons.map(i => {
            return (
              <div className="w-10 mx-4">
              <a
          href={IGlinks[props.country]}
          target="_blank"
        >
                <img src={i} alt={i + " pic"} />
                </a>
              </div>
            )
          })}
        </div>
      </div>
      </div>
      <div>
      <h4 className="font-black text-center pt-10"> EXCLUSIVELY ON</h4>
      <div className="brands flex w-full flex-wrap justify-center items-center px-1/10">
        {brands.map(b => {
          return (
            <div className="w-32">
              <img src={b} alt={b + " pic"} />
            </div>
          )
        })}
      </div>
      </div>
      <p className="text-center mt-10"> © 2021 All Rights Reserved Mediakeys </p>
    </section>
  )
}

export default Footer2
