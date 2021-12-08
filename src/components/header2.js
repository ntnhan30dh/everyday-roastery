import React  from "react"
import { Dropdown } from "semantic-ui-react"
import CountryList2 from "../components/countrylist2"
import Scrollspy from 'react-scrollspy'

import logo from "../images/logo2.png"
import OrderNow from "./ordernow"
import { Link } from "gatsby"

const Header2 = (props) => {
  const countryList = new CountryList2()

  let menuActive = props.menuState ? "is-inactive" : ""
  let change = props.menuState ? "change" : ""

  const handleChange =(value)=>{
    props.handleCountryUpdate(value);
    props.toggleMenu()
  }

  const link =
    "text-2xl my-10 md:text-sm xl:text-base uppercase font-bold text-white   opacity-40 hover:opacity-100 hover:text-white   hover:border-b-2 border-black hover:border-white "
  return (
    <header className={`headerWrapper top-0 z-50 w-full  px-2 lg:px-10 bg-black ${props.menuState ? "bg-opacity-60 absolute -top-20 backdrop-filter backdrop-blur-xl	" : "sticky"}`}>
        <div className="bg-black absolute md:hidden py-8 top-0 w-screen"></div>
      <nav className={`${props.menuState ? "h-screen" : ""} nav relative  flex justify-end items-center w-full py-8 md:py-4 h-full md:flex-row `}>
        <div className="left absolute left-0 top-0 w-40 lg:w-52  ">
          <Link to="/" className=" ">
            <img src={logo} alt="logo" className="w-full" />
          </Link>
        </div>
        <div className={`right h-1/2 md:h-auto flex flex-col items-center  md:flex-row  w-full justify-end hidden md:flex lg:pl-1/5 2xl:pl-0 ${menuActive}`} >
          <Scrollspy className="flex flex-col h-full md:flex-row md:h-auto items-center /w-1/2 xl: w-2/3 justify-around " items={ ['menu', 'behindTheBeans', 'howToOrder', 'news'] } currentClassName="border-b-4 border-white a_opacity-100">
            <li>
              <Link to="#menu" href="menu" className={`${link} `}  onClick={props.toggleMenu}>
                <span className="my-auto">Our menu</span>
              </Link>
            </li>
            <li>
              <Link to="#behindTheBeans" href="behindTheBeans" className={`${link} `}  onClick={props.toggleMenu}>
                <span className="my-auto">BEHIND THE BEANS</span>
              </Link>
            </li>
            <li>
              <Link to="#howToOrder" href="howToOrder" className={`${link} `}  onClick={props.toggleMenu}>
                <span className="my-auto">HOW TO ORDER </span>
              </Link>
            </li>
            <li>
              <Link to="#news" href="news" className={`${link} `}  onClick={props.toggleMenu}>
                <span className="my-auto">NEWS & Social Media</span>
              </Link>
            </li>

          </Scrollspy>
          <div className="countryDropdown relative text-sm md:text-base uppercase font-bold text-red md:bg-black max-w-52  ">
          <Dropdown
          className="z-10  "
            fluid
            placeholder={props.country}
            search
            selection
            options={countryList.countries()}
            onChange={(e, { value }) => handleChange(value)}
            defaultValue={props.country}
            value={props.country}
          />

          <div className="absolute bottom-2 left-0 w-full h-1/2 border-b-2 border-l-2 border-r-2 border-white z-0 "></div>
          </div>
          <OrderNow
            display={
              <div className="orderBtn ml-10 text-white text-sm md:text-base rounded-full py-3 px-6  uppercase font-bold bg-blue hidden xl:block ">
                Order Now
              </div>
            }
          />
        </div>
        <Link
            to="/"
            className={`burgerMenu  p-6  absolute top-0  ${change}`}
            onClick={props.toggleMenu}
            onKeyDown={props.toggleMenu}
            role="button"
            tabIndex={-1}
          >
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </Link>
      </nav>
    </header>
  )
}

export default Header2
