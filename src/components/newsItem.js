import React from "react"
import { Modal } from "semantic-ui-react"

import News1 from "../images/news/news1.png"
import News2 from "../images/news/news2.png"
import News3 from "../images/news/news3.png"
import News4 from "../images/news/news4.png"
import News1_bg from "../images/news/news1_bg.png"
import News2_bg from "../images/news/news2_bg.png"
import News3_bg from "../images/news/news3_bg.png"
import News4_bg from "../images/news/news4_bg.png"
import NewsHeader from "../images/news/news_headerPic.png"
import fb from "../images/soMe/fb.png"
import ig from "../images/soMe/ig.png"
import twitter from "../images/soMe/twitter.png"

const NewsItem = props => {
  const soMeIcons = [fb, ig, twitter]
  const newsArticle = {
    news1: {
      pic: News1,
      bg: News1_bg,
      header: "Everyday Summer, All you need for this summer",
      text:
        "From the usual flavours available at popular chains, to more specialty coffee (hot or cold),",
      date: " June 18, 2021",
      p1:
        "Did you know that Delivery Hero doesn’t only deliver meals, groceries and household products to customers’ homes quickly? We’ve also launched our own coffee brand to boost people’s lives around the globe: Everyday Roastery.",
    },

    news2: {
      pic: News2,
      bg: News2_bg,
      header: "Discover more about where our coffee come from",
      text:
        "Our love of coffee is universal. How many times a day do people all around the world utter the ever...",
      date: " June 18, 2021",
      p1:
        "Did you know that Delivery Hero doesn’t only deliver meals, groceries and household products to customers’ homes quickly? We’ve also launched our own coffee brand to boost people’s lives around the globe: Everyday Roastery.",
    },

    news3: {
      pic: News3,
      bg: News3_bg,
      header: "Get your daily fix delivered fresh to your home",
      text:
        "For most of us, our morning caffeine fix is an essential ritual that helps us kickstart our day– th...",
      date: " June 18, 2021",
      p1:
        "Did you know that Delivery Hero doesn’t only deliver meals, groceries and household products to customers’ homes quickly? We’ve also launched our own coffee brand to boost people’s lives around the globe: Everyday Roastery.",
    },

    news4: {
      pic: News4,
      bg: News4_bg,
      header: "Coffee obsession: We are serving in Saudi Arabia!",
      text:
        "Would you like to have fresh coffee to deliver right at your door? We have good news for you who...",
      date: " June 18, 2021",
      p1:
        "Did you know that Delivery Hero doesn’t only deliver meals, groceries and household products to customers’ homes quickly? We’ve also launched our own coffee brand to boost people’s lives around the globe: Everyday Roastery.",
    },
  }

  return (
    <Modal
      trigger={
        <div className=" px-2 md:px-4">
          <div className="imgWrap relative group">
            <div className="absolute top-0 transform duration-200 group-hover:-translate-y-3 group-hover:-translate-x-3 z-20">
              <img src={newsArticle[props.name]["pic"]} alt="" />
            </div>
            <div className="transform duration-200 group-hover:translate-y-3 group-hover:translate-x-3 z-10">
              <img src={newsArticle[props.name]["bg"]} alt="" />
            </div>
          </div>
          <h4 className="uppercase md:text-3xl font-black leading-tight">
            {newsArticle[props.name]["header"]}{" "}
          </h4>
          <p className={`${props.textStyle.p} `}>
            {" "}
            {newsArticle[props.name]["text"]}
          </p>
        </div>
      }
      fluid
      size="medium"
      closeIcon
    >
      <div className="detailsItem ">
        <div className="headerPicWrap relative">
        <div className="">
          <img src={NewsHeader} alt="" />
        </div>
        <div className=" absolute bottom-2 md:bottom-10 right-2 md:right-10 soMeWrap flex justify-center lg:justify-start">
          {soMeIcons.map(i => {
            return (
              <div className=" w-6 md:w-10 mx-2 md:mx-4">
                <img src={i} alt={i + " pic"} />
              </div>
            )
          })}
        </div>
        </div>
        <div className="main px-1/10">
          <div className="date text-right my-10">
            <p className="text-right">{newsArticle[props.name]["date"]} </p>
          </div>
          <h3 className={`uppercase ${props.textStyle.h3} font-black`}>
            {newsArticle[props.name]["header"]}{" "}
          </h3>
          <p className="text-xl pb-10  border-b-2 border-black border-opacity-10">
            {" "}
            {newsArticle[props.name]["p1"]}{" "}
          </p>
          <div className="main text-lg py-6">
            <p>
            Created in 2020, Everyday Roastery’s delicious tastes, sleek design
            and lifestyle vibe aims to deliver the convenience and quality of a
            local coffee shop directly to our customers’ doorsteps. Read on to
            find out more about how Delivery Hero brought its in-house coffee
            brand to life, and what makes it so special.
            </p>
            <p>
             An estimated 2.25
            billion cups of coffee are consumed worldwide every day – that’s
            over 26,000 per second! From Buenos Aires to Stockholm, from Seoul
            to Dubai, people need their caffeine kick, and platforms like
            Delivery Hero have seen a significant increase in coffee orders. In
            fact, nowadays coffee is one of the most ordered items in many of
            our countries, including Greece. With advancements in quick
            commerce, the convenience of consuming a fresh brew is on the rise
            and these numbers are only bound to increase. So, in order to have
            our customers’ favorite hot drinks available at any time and meet
            their ever-growing demand, we at Delivery Hero saw an opportunity to
            venture into building our coffee brand – but first we needed to
            survey the land.
            </p>
            
            <span className="font-bold">

             Bringing an idea to life 
            </span>
            <p>
            Our central brand team,operating as our creative agency, began by conducting comprehensive
            consumer research across 8 countries to understand what people
            appreciate about a coffee brand and what they are missing in their
            market right now. Based on the results, the brand team moved on to
            conceptualizing the visual identity and personality of our new
            global brand, Everyday Roastery.
            </p>
            
            <p>
             With a mission to cater to
            everyone’s tastes, moods, and preferences, our designers chose a
            sleek monochrome color palette to stand out from the competition.
            But black and white can still be fun! To reflect different moods and
            needs for coffee, 7 different patterns for each day of the week
            appear across cups, merchandise, and marketing designs to inject joy
            into customers’ ordering experience. Even the D in Everyday was
            designed to resemble a coffee cup, making its identity strong and
            distinctive – so distinctive, in fact, that the brand team has been
            named as a finalist in the Design category for The Drum Awards for
            Marketing 2021.
            </p>
            
            <p>
             Everyday Roastery’s unique personality and premium
            quality coffee have made it one of the first choices of coffee for
            many customers already.
            </p>
            
            <span className="font-bold">
             Establishing a brand: How to think and act
            like a barista
            </span>
            <p>
             Of course, strong branding alone is not enough to
            create a successful coffee brand overnight. Led by Dr. Mustafa
            Sayin, Senior Manager of Operations at Delivery Hero, our quick
            commerce team was up for the challenge of learning how to establish
            a coffee brand customers will love and took their time to study
            in-depth how to run operations from abroad. This required a rigorous
            learning process and thorough analysis of the business case.
            </p>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default NewsItem
