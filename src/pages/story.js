import React from "react"
import Header from "../components/header"
import SoMeBar from "../components/soMeBar"
import Footer from "../components/footer"
import OurStory from "../components/ourStory"
// import OrderNow from "../components/ordernow"
import "../styles/index.scss"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'semantic-ui-css/semantic.min.css';
// import Plx from "react-plx"

export default function Home() {
  // let [menuActive, setmenuActive] = useState(false);
 
   
   
    
  return (
    <div className="pageWrapper ">
      <head>
      <title>Everyday Roastery</title>
      </head>
     < SoMeBar/>
    <Header />
   <OurStory/>
    <Footer/>
    </div>
  )
}
