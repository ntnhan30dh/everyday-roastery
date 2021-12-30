import React, { useState, useEffect } from "react"
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
  const [insta, setInsta] = useState(undefined)
  const token =
  "IGQVJXUnRBMmNhTHZA6dlRRME5rcEpOQ0s5TFM1eWRNeUhTZA183aTVXNnZAWWWN2WTZAHemg5VFRmVGUtRWFEWmpna1c1bjNlclJRYVk4QmNaN1lGaHR3ZAnZAXQlA1SWtLMmJXMkNxYTRaV1ZATNUdydGQxSwZDZD"
const url = `https://graph.instagram.com/me/media?fields=id,media_url,media_type,permalink&access_token=${token}`

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
              arrows: false,
            },
          },
        ],
      }
const IGlinks = {
  "Saudi Arabia":"https://www.instagram.com/byeverydaysa/",
  // "Singapore",
   "Bahrain":"https://www.instagram.com/everyday.roastery.bh/",
   "Kuwait":'https://www.instagram.com/everyday.roastery.kw/',
  // "Malaysia",
  // "Hungary",
  // "Germany",
  "UAE":"https://www.instagram.com/everyday.roastery.uae/",
  "Qatar" :"https://www.instagram.com/everyday.roastery.qa/",
  "Turkey" : "https://www.instagram.com/everyday.roastery.tk/",
  'Egypt':'https://www.instagram.com/everyday.roastery.egypt/',
}

useEffect(() => {
  fetch(url)
    .then(data => data.json())
    .then(data => {
      // const photosArray = data.data.user.edge_owner_to_timeline_media.edges
      setInsta(data.data)
       // console.log("insta",insta)
       console.log("data",data)
    })
}, [])
  return (
    <section className="ig mt-10 md:mt-48" id="ig">
    <a href={IGlinks[props.country]} target="_blank" className="text-black">
      <h1
        className={`${props.textStyle.h1} font-black text-center max-w-max mx-auto py-10 hoverText bg4` }
      >
        Follow us on instagram
      </h1>
</a>
      <Slider {...settings} className="">
      {/* {pics.map(i=>{
           return (
           <img src={i} alt="" />
           )
       })} */}

       {insta &&
          insta
            .filter(photo => photo.media_type==="IMAGE")
            .map(photo => (
           
                <img src={photo.media_url} alt="pic" className=" igFeeds " />
            
            ))}
      </Slider>
    </section>
  )
}

export default IG
