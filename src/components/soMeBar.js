import React from "react"
import fb from "../images/fb.png"
import ig from "../images/ig.png"
const SoMeBar = () => {
const logoDiv= "mx-2"
  return (
      <div className="soMeBar bg-black flex justify-between py-2">
        <div className="icons flex md:pl-20">
        <div className={logoDiv}>
              <img src={ig} alt="logo" />
            </div>
            <div className={logoDiv}>
              <img src={fb} alt="logo" />
            </div>
        </div>
        <div>
        <h3 className="uppercase text-xs sm:text-lg" style={{color: "#D8248D"}}> your coffee break, everyday</h3>
        </div>
        <div></div>
      </div>
      
  )
}

export default SoMeBar
