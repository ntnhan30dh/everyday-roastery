import React from "react"
import Slider from "react-slick"

import IG1 from '../images/ig/ig1.png'
import IG2 from '../images/ig/ig2.png'
import IG3 from '../images/ig/ig3.png'
import IG4 from '../images/ig/ig4.png'
import IG5 from '../images/ig/ig5.png'
import IG6 from '../images/ig/ig6.png'
import IG7 from '../images/ig/ig7.png'
import IG8 from '../images/ig/ig8.png'
import IG9 from '../images/ig/ig9.png'
import IG10 from '../images/ig/ig10.png'



const IG = props => {

  const pics = [IG1,IG2,IG3,IG4,IG5,IG6,IG7,IG8,IG9,IG10]
  
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
             
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              arrows: false,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1.3,
              slidesToScroll: 1,
              infinite: false,
              arrows: false,
            },
          },
        ],
      }

  return (
    <section className="ig mt-10 md:mt-28" id="ig">
      <h1
        className={`${props.textStyle.h1} font-black text-center max-w-max mx-auto py-10 ` }
      >
        Follow us on instagram
      </h1>

      <Slider {...settings} className="">
      {pics.map(i=>{
           return (
           <img src={i} alt="" />
           )
       })}
      </Slider>
    </section>
  )
}

export default IG
