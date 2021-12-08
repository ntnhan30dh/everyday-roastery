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
import News from "../components/news"
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
        setCountry(response.country_name)
        //console.log("Country: ", response)
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
    <div className="pageWrapper relative">
      <head>
        <title>Everyday Roastery</title>
      </head>
      {/* < SoMeBar/> */}
      <Header2
        country={country}
        handleCountryUpdate={() => handleCountryUpdate()}
        toggleMenu={toggleMenu} menuState={menuActive}
      />
      <Banner textStyle={text} />
      <Menu2 textStyle={text} />
      <BehindTheBeans textStyle={text} />
      <HowToOrder textStyle={text} />
      <DownloadApp textStyle={text} />
      <News textStyle={text} />
      <IG textStyle={text} />
      <Footer2 textStyle={text}/>
      
      {/* <MainSlides toggleMenu={toggleMenu} menuState={menuActive}/> */}
      {/* <Menu/>
    <Followus/>
    <Footer/> */}
    </div>
  )
}
