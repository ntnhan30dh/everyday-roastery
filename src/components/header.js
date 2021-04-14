import React, { useState, useEffect } from "react"
import logo from "../images/logo.png"
import OrderNow from "./ordernow"
import { Link } from "gatsby"

const Header = () => {
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50)
    })
  }, [])
  let position = scroll ? "sticky top-0" : "absolute"
  return (
    <header className={`headerWrapper ${position} z-50 w-full p-10`}>
    
      <nav className='nav flex justify-between w-full' >
        <div className="left flex">
          <div className=" w-36 lg:w-48 mr-8">
            <img src={logo} alt="logo" />
          </div>
              <Link to="/story" className="text-black uppercase  font-extrabold">Our Story</Link>
        </div>
        <div className="right">
        <OrderNow display={ 
          <div className="orderBtn text-white p-4 uppercase font-extrabold bg-black">
          Order Now!
          </div>
        }/>
        </div>
      </nav>
    </header>
  )
}

export default Header
