import React from "react"
import Slider from "react-slick"
import NewsItem  from "./newsItem"




const News = props => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    //cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
        },
      },
    ],
  }

  
  return (
    <section className="news md:pt-48" id="news">
      <h1
        className={`${props.textStyle.h1} font-black text-center max-w-max mx-auto  md:pb-10 hoverText bg3`}
      >
        news
      </h1>  
      <Slider {...settings} className="cards  lg:hidden ">
        <NewsItem textStyle ={props.textStyle} name="news1"/>
        <NewsItem textStyle ={props.textStyle} name="news2"/>
        <NewsItem textStyle ={props.textStyle} name="news3"/>
        <NewsItem textStyle ={props.textStyle} name="news4"/>
       
      </Slider>

    </section>
  )
}

export default News
