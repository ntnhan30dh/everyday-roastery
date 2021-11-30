import React from "react"
import Slider from "react-slick"

import News1 from "../images/news/news1.png"
import News2 from "../images/news/news2.png"
import News3 from "../images/news/news3.png"
import News4 from "../images/news/news4.png"
import News1_bg from "../images/news/news1_bg.png"
import News2_bg from "../images/news/news2_bg.png"
import News3_bg from "../images/news/news3_bg.png"
import News4_bg from "../images/news/news4_bg.png"

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
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     initialSlide: 2,
      //   },
      // },
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

    const pics = {
        'news1': News1,
        'news2': News2,
        'news3': News3,
        'news4': News4,
      }
    
      const bg = {
        'news1': News1_bg,
        'news2': News2_bg,
        'news3': News3_bg,
        'news4': News4_bg,
      }
    
      const headers = {
        'news1': 'Everyday Summer, All you need for this summer',
        'news2': 'Discover more about where our coffee come from',
        'news3': 'Get your daily fix delivered fresh to your home',
        'news4': 'Coffee obsession: We are serving in Saudi Arabia!',
      }
    
      const texts = {
        'news1': 'From the usual flavours available at popular chains, to more specialty coffee (hot or cold),',
        'news2': 'Our love of coffee is universal. How many times a day do people all around the world utter the ever...',
        'news3': 'For most of us, our morning caffeine fix is an essential ritual that helps us kickstart our day– th...',
        'news4': 'Would you like to have fresh coffee to deliver right at your door? We have good news for you who...',
      }

      const card = news => {
        return (
          <div className=" px-2 md:px-4" >
          <div className="imgWrap relative group">
              <div className="absolute top-0 transform duration-200 group-hover:-translate-y-3 group-hover:-translate-x-3 z-20">
            <img src={pics[news]} alt="" />
              </div>
              <div className="transform duration-200 group-hover:translate-y-3 group-hover:translate-x-3 z-10">
            <img src={bg[news]} alt="" />
              </div>
          </div>
            <h4 className='uppercase md:text-3xl font-black leading-tight'>{headers[news]} </h4>
            <p className={`${props.textStyle.p} `}> {texts[news]}</p>
          </div>
        )
      }
    

  return (
    <section className="news" id="news">
      <h1
        className={`${props.textStyle.h1} font-black text-center max-w-max mx-auto md:pt-24 md:pb-10`}
      >
        news
      </h1>

      <Slider {...settings} className="cards  lg:hidden ">
        {card("news1")}
        {card("news2")}
        {card("news3")}
        {card("news4")}
      </Slider>
    </section>
  )
}

export default News
