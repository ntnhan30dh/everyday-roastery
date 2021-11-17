import React, { useState, useEffect } from "react"
import { Dropdown } from "semantic-ui-react"
import CountryList2 from "../components/countrylist2"

import logo from "../images/logo2.png"
import OrderNow from "./ordernow"
import { Link } from "gatsby"

const Header2 = () => {
  const countryList = new CountryList2()
  let [country, setCountry] = useState("Singapore")

  const link =
    "text-sm md:text-base uppercase font-bold text-white  opacity-40 hover:opacity-100 hover:text-white   hover: border-b-2 border-black hover:border-white"
  return (
    <header className={`headerWrapper z-50 w-full  px-2 md:px-10 bg-black`}>
      <nav className="nav relative flex justify-end items-center w-full py-4">
        <div className="left absolute left-0 top-0 w-52  ">
          <Link to="/" className=" w-24 lg:w-48 mr-8">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="right flex w-full justify-end">
          <ul className="flex items-center w-2/3 justify-around">
            <li>
              <Link to="/menu" className={`${link} `}>
                <span className="my-auto">BEHIND THE BEANS</span>
              </Link>
            </li>
            <li>
              <Link to="/menu" className={`${link} `}>
                <span className="my-auto">Our menu</span>
              </Link>
            </li>
            <li>
              <Link to="/menu" className={`${link} `}>
                <span className="my-auto">HOW TO ORDER </span>
              </Link>
            </li>
            <li>
              <Link to="/menu" className={`${link} `}>
                <span className="my-auto">NEWS & Social Media</span>
              </Link>
            </li>

          </ul>
          <div className="countryDropdown text-sm md:text-base uppercase font-bold text-red bg-black ">
          <Dropdown
           fluid
            placeholder={country}
            search
            selection
            options={countryList.countries()}
            onChange={(e, { value }) => setCountry(value)}
            defaultValue={country}
            value={country}
          />
          </div>
          <OrderNow
            display={
              <div className="orderBtn ml-10 text-white text-sm md:text-base rounded-full py-3 px-6  uppercase font-bold bg-blue  ">
                Order Now
              </div>
            }
          />
        </div>
      </nav>
    </header>
  )
}

export default Header2
