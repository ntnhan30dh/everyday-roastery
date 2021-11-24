import React  from "react"
import { Dropdown } from "semantic-ui-react"
import CountryList2 from "../components/countrylist2"
import Scrollspy from 'react-scrollspy'

import logo from "../images/logo2.png"
import OrderNow from "./ordernow"
import { Link } from "gatsby"

const Header2 = (props) => {
  const countryList = new CountryList2()
 // let [country, setCountry] = useState("Singapore")

  const link =
    "text-sm md:text-base uppercase font-bold text-white  opacity-40 hover:opacity-100 hover:text-white   hover:border-b-2 border-black hover:border-white"
  return (
    <header className={`headerWrapper sticky top-0 z-50 w-full  px-2 md:px-10 bg-black`}>
      <nav className="nav relative flex justify-end items-center w-full py-4">
        <div className="left absolute left-0 top-0 w-52  ">
          <Link to="/" className=" w-24 lg:w-48 mr-8">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="right flex w-full justify-end">
          <Scrollspy className="flex items-center w-2/3 justify-around" items={ ['banner', 'menu', 'section-3'] } currentClassName="border-b-4 border-white">
            <li>
              <Link to="/menu" className={`${link} `}>
                <span className="my-auto">BEHIND THE BEANS</span>
              </Link>
            </li>
            <li>
              <Link to="/menu" href="menu" className={`${link} `}>
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

          </Scrollspy>
          <div className="countryDropdown relative text-sm md:text-base uppercase font-bold text-red bg-black /p-2 ">
          <Dropdown
          className="z-10  "
           fluid
            placeholder={props.country}
            search
            selection
            options={countryList.countries()}
            onChange={(e, { value }) => props.handleCountryUpdate(value)}
            defaultValue={props.country}
            value={props.country}
          />

          <div className="absolute bottom-2 left-0 w-full h-1/2 border-b-2 border-l-2 border-r-2 border-white z-0 "></div>
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
