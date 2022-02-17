import React, { useState, useEffect } from "react"
import "../styles/index.scss"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "semantic-ui-css/semantic.min.css"

import Header2 from "../components/header2"
import Banner from "../components/banner"
import Menu2 from "../components/menu2"
import BehindTheBeans from "../components/behindTheBeans"
import HowToOrder from "../components/howToOrder"
import DownloadApp from "../components/downloadApp"
import CountryList2 from "../components/countrylist2"

// import News from "../components/news"
import IG from "../components/ig"
import Footer2 from "../components/footer2"
// import MainSlides from "../components/mainSlides"
// import Menu from "../components/menu"
// import Followus from "../components/followus"
// import Footer from "../components/footer"
// import OrderNow from "../components/ordernow"
// import Plx from "react-plx"

export default function Home() {
  //let [menuActive, setmenuActive] = useState(false);
  // let [vh, setVh] = useState(0);
  const countryList = new CountryList2()

  let [country, setCountry] = useState("")

  const handleCountryUpdate = c => setCountry(c)

  let [menuActive, setmenuActive] = useState(false)
  
  const toggleMenu = () => {
    setmenuActive(!menuActive)
  }

  // useEffect(() => {
  //   setVh( window.innerHeight -170)
  // }, [])

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then(res => res.json())
      .then(response => {
        if(countryList.countriesName().includes(response.country_name)){
          setCountry(response.country_name)
        } else  setCountry("Saudi Arabia")
        console.log("Country: ", countryList.countriesName().includes(response.country_name))
      })
      .catch((data, status) => {
        console.log("Request failed")
      })
  }, [])

  // const parallaxMoveDown = [
  //   {
  //     start:'self',
  //     duration: 3000,
  //     properties: [
  //       {
  //         startValue: 0,
  //         endValue: vh,
  //         endOffset: "100vh",
  //         property: "translateY"

  //       },
  //     ],
  //   },
  // ];

  const text = {
    h1: "text-5xl md:text-8xl uppercase leading-tight", 
    h1_1: "text-4xl xsm:text-5xl md:text-8xl uppercase leading-tight", 
    h2: "text-4xl xsm:text-5xl md:text-7xl uppercase leading-tight	",
    h2_1: "text-xl md:text-7xl uppercase leading-tight	md:py-10",
    h3: "text-xl md:text-5xl uppercase leading-tight",
    p: "text-base md:text-xl leading-tight",
  }

  return (
    <div className="pageWrapper relative ">
      <head>
        <title>Everyday Roastery</title>
      </head>
      {/* < SoMeBar/> */}
      <Header2
        country={country}
        handleCountryUpdate={(c) => handleCountryUpdate(c)}
        toggleMenu={toggleMenu} menuState={menuActive}
      />
      <div className="//2xl:px-1/20">
      <Banner textStyle={text} country={country} />
      <Menu2 textStyle={text} country={country}/>
      {/* <BehindTheBeans textStyle={text} /> */}
      {/* <HowToOrder textStyle={text} country={country} /> */}
      {/* <DownloadApp textStyle={text} country={country}/> */}
      {/* <News textStyle={text} /> */}
      {/* <IG textStyle={text} country={country} /> */}
      <Footer2 textStyle={text} country={country}/>
      </div>
      
      {/* <MainSlides toggleMenu={toggleMenu} menuState={menuActive}/> */}
      {/* <Menu/>
    <Followus/>
    <Footer/> */}
    </div>
  )
}
