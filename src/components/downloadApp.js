import React from "react"

import BG from "../images/downloadApp/downLoadApp_bg.png"
import QR from "../images/downloadApp/QRcode.png"
import iPhone from "../images/downloadApp/iPhone.png"
import icon from "../images/downloadApp/downloadApp_icon.png"

const DownLoadApp = props => {
  return (
    <section className="downloadApp relative">
      <div className="w-full">
        <img src={BG} alt="" />
      </div>

      <div className="absolute top-0">
        <div className="text">
          <h2 className={`${props.textStyle.h2} font-black  text-white`}>
            EVERYDAY, <br />
            YOUR WAY
          </h2>
          <div className="flex">
              <div className="w-32">
                  <img src={QR} alt="" />
              </div>
              <p className=" text-lg text-white uppercase font-black"> ORder now via FOODPANDA app <br />
DOWNLOAD THE APP HERE!</p>
          </div>
        </div>
        <div className="pic relative w-1/3 ">
            <div className=" /w-1/3">
                <img src={iPhone} alt="iPhone" />
            </div>
            <div className="icon w-32 absolute -top-10">
                <img src={icon} alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default DownLoadApp
