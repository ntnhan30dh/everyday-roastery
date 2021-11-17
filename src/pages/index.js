import React, { useState} from "react"
import Header2 from "../components/header2"
// import MainSlides from "../components/mainSlides"
// import Menu from "../components/menu"
// import Followus from "../components/followus"
// import Footer from "../components/footer"
// import OrderNow from "../components/ordernow"
import "../styles/index.scss"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'semantic-ui-css/semantic.min.css';
// import Plx from "react-plx"

export default function Home() {
  let [menuActive, setmenuActive] = useState(false);
  // let [vh, setVh] = useState(0);

  const toggleMenu = () => {
		setmenuActive(!menuActive)
    }
   
    // useEffect(() => {
    //   setVh( window.innerHeight -170)
    // }, [])

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
    
  return (
    <div className="pageWrapper ">
      <head>
      <title>Everyday Roastery</title>
      </head>
     {/* < SoMeBar/> */}
    <Header2 />
    {/* <MainSlides toggleMenu={toggleMenu} menuState={menuActive}/> */}
    {/* <Menu/>
    <Followus/>
    <Footer/> */}
    </div>
  )
}
