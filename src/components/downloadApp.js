import React from "react"
import Plx from "react-plx"

import BG from "../images/downloadApp/downLoadApp_bg.png"
import BG_mobile from "../images/downloadApp/downLoadApp_bg__mobile.png"
import QR from "../images/downloadApp/QRcode.png"
import iPhone_front from "../images/downloadApp/iPhone_front.png"
import iPhone_front_Yemeksepeti from "../images/downloadApp/iPhone_front_Yemeksepeti.png"
import iPhone_front_Talabat from "../images/downloadApp/iPhone_front_Talabat.png"
import iPhone_front_Hungerstation from "../images/downloadApp/iPhone_front_Hungerstation.png"
import iPhone_back from "../images/downloadApp/iPhone_back.png"
import Stamp from "../images/downloadApp/stamp.png"
import Stamp_logo from "../images/downloadApp/stamp_logo.png"
import OrderNow from "./ordernow"

const DownLoadApp = props => {

  const parallaxDown= [
    {
      start: "self",
      duration: 1000,
      properties: [
        {
          startValue: 0,
          endValue: 20,
          property: "translateY",
          unit: "%",
        },
      ],
    },
  ]

  const parallaxRotate = [
    {
      start:'self',
      duration: 1000,
      properties: [
        {
          startValue: 0,
          endValue: 180,
          property: "rotate"
        },
      ],
    },
  ];

  const iPhone = {
    "Saudi Arabia":iPhone_front_Hungerstation,
    "Singapore":iPhone_front,
    "Bahrain":iPhone_front_Talabat,
    "Kuwait":iPhone_front_Talabat,
    "Malaysia":iPhone_front,
    "Hungary":iPhone_front,
    "Germany":iPhone_front,
    "UAE":iPhone_front_Talabat,
    "Qatar":iPhone_front_Talabat,
    "Turkey":iPhone_front_Yemeksepeti,
    'Egypt':iPhone_front_Talabat
  }

  const iPhonePic = iPhone[props.country] || iPhone_front

  return (
    <section className="downloadApp relative overflow-x-hidden md:overflow-x-visible lg:mt-44">
      <div className="w-full">
        <img src={BG} alt="background" className="hidden md:block" />
        <img src={BG_mobile} alt="background" className=" md:hidden" />
      </div>

      <div className="absolute top-0  w-full md:flex justify-between md:px-1/10 lg:px-1/6">
        <div className="text text-center pt-1/5 md:pt-1/10  lg:pt-1/6 ">
          <h2 className={`${props.textStyle.h2} font-black  text-white `}>
            EVERYDAY, <br />
            YOUR WAY
          </h2>
          <div className="flex items-center  ">
            <div className="hidden md:block w-20 mr-6">
              <img src={QR} alt="" />
            </div>
            <p className=" text-lg text-white uppercase font-black mx-auto md:text-left  ">
              {" "}
              ORder now via FOODPANDA app <br />
              DOWNLOAD THE APP HERE!
            </p>
          </div>
          <OrderNow
        country={props.country}
          display={
            <div className=" hidden md:block orderBtn  text-white text-base md:text-base rounded-full py-6 px-8  uppercase font-bold bg-blue mt-16  max-w-max mx-auto ">
              Order Now
            </div>
          }
        />
          
        </div>
        <div className="pic relative md:-mt-1/20 md:w-1/2  ">
          <div className="iphone relative w-3/4 md:w-4/5 sm:w-1/2 mx-auto ">
            <Plx
              parallaxData={parallaxDown} className="iphone_front absolute top-0 z-10 mx-2">
              <img src={iPhonePic} alt="iPhone_front" />
            </Plx>
            <div className="iphone_back absolute w-full  mt-1/10 left-1/3">
              <img src={iPhone_back} alt="iPhone_back" />
            </div>

            <div className="iphone_back opacity-0 mt-1/10 ">
              <img src={iPhone_back} alt="iPhone_back" className="opacity-0" />
            </div>
            <div className="icon  hidden md:block w-1/2 absolute -top-4 -right-36 z-20"> 
            <div className="relative">
              <div className="absolute top-0 w-full h-full z-30 flex items-center justify-center">
                <div className="w-1/2 ">
              <img src={Stamp_logo} alt="" />
                </div>
              </div>
          <Plx
              parallaxData={parallaxRotate} className="stamp z-20">
            <img src={Stamp} alt="" />
          </Plx>
            </div>
            </div>
          </div>
        </div>

        <OrderNow
        country={props.country}
          display={
            <div className=" md:hidden orderBtn  text-center  text-white text-base md:text-base rounded-full py-3 px-6 uppercase font-bold bg-blue w-4/5 mx-auto my-20">
          Order Now
        </div>
          }
        />
        
      </div>
    </section>
  )
}

export default DownLoadApp
