import React, { useState, useEffect } from "react"
import Slider from "react-slick"

import IG1 from "../images/ig/ig1.png"
import IG2 from "../images/ig/ig2.png"
import IG3 from "../images/ig/ig3.png"
import IG4 from "../images/ig/ig4.png"
import IG5 from "../images/ig/ig5.png"
import IG6 from "../images/ig/ig6.png"
import IG7 from "../images/ig/ig7.png"
import IG8 from "../images/ig/ig8.png"
import IG9 from "../images/ig/ig9.png"
import IG10 from "../images/ig/ig10.png"

const IG = props => {
  const [insta, setInsta] = useState(undefined)

  const token = {
    "Saudi Arabia":
      "IGQVJWRml3WEo0YndiY0VRN0pJVV9LSGVLamI0ZA2tfODJKaU9sckRtTEExNEEwaEJ2VUhNd3FudWdNanhFdkpQYXRNQVBnYm1kTjNDcGhiN3lscE9qdnh1UmVWLXNkWHM2YlVQOGZAQNGZAOaDJ6SVBydQZDZD",
    "Bahrain":
      "IGQVJXd3lEMjU2ZATB5UU0yUVFrQXQyUTJCMW9ZAQTc0dy0tWUJ5Mk5hY2FLSXNtUmt5bkNMejdPMWs4WFk2cC1ONnhNQzdTYVBWcUxtMEVVWV9QdUxWVlpvUFdMMVVyZA0stVkN3TXpaMDZA3d19lalY0egZDZD",
    "Kuwait":
      "IGQVJYZAWNjWkY4TDVEdXczazAtczZAlckRCNTR3UzJqdFRLWGRLNzNxN0lQLWpJMEFBMHZAEWHp1MEVfYk9vRDlTZAWpVRU5qNW1kSU9FYXZAjUllIWDVhbFZAaenFfQUE1ZAVZACaDRSbUxUb3VxMkhoaTJFSgZDZD",
    "UAE":
      "IGQVJXOHRYZA0FiVm1YVnhGY19yam5wNG5XdUZAVd1RBeC1rY01mUzZAvQ1JPWDVvemsxZAFBRY1JlUTFUck5RbTdNQUZABTkZAKY3BWaVFVUEQyd19jNGd1TExYUy0zQklZASV9jMHVycHlvRnRDVzdyc29uaQZDZD",
    "Qatar":
      "IGQVJVQzV0OGQyTDhBZAFRiMml5cTN5UVJMdE5aOWNDZAzdsQ0MtaF9mOUJYVm5Idnl6LXExVUgxYWFrMFZA6bzR5UU1RX0p6RzNoUzQyZA0poQzRweVRNZAGc2OXEyTXJzSElRTlZAVSUdpQThyMVkyeVdaTgZDZD",
    "Turkey": "IGQVJVb1RXNHBOZAjNCVDZAiSWRnVVN3eTZAGRThMVDZAJcDkwc3VSUVVEdkw5VVlKOE9yN3BocW55VFNjYXJtY2t2d2w5Q2VpUmtUaEM1c0RlSGNTS3o0d2FiYXpxVWJJSC1wdkFqY0EwME9MMmlJeHRFRgZDZD",
    "Egypt":
      "IGQVJWLURqMVFOTURpNzBLMXZAFYjVoTGtnVW5RTzl5NjRyN28tN20tc0hjSGFVSjdJc3FuR1JUTjVuOC13aExPZAVJjNXY0dTZAIamlzNmoxT2xtVHZALSXFMTkdBeFliTW1FMkdpZAzVBdHZAWOFQzZA1VwcAZDZD",
  }

  const url = `https://graph.instagram.com/me/media?fields=id,media_url,media_type&access_token=${
    token[props.country]
  }`

  const pics = [IG1, IG2, IG3, IG4, IG5, IG6, IG7, IG8, IG9, IG10]

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
    "Saudi Arabia": "https://www.instagram.com/byeverydaysa/",
    "Bahrain": "https://www.instagram.com/everyday.roastery.bh/",
    "Kuwait": "https://www.instagram.com/everyday.roastery.kw/",
    "UAE": "https://www.instagram.com/everyday.roastery.uae/",
    "Qatar": "https://www.instagram.com/everyday.roastery.qa/",
    "Turkey": "https://www.instagram.com/everyday.roastery.tk/",
    "Egypt": "https://www.instagram.com/everyday.roastery.egypt/",
  }

  useEffect(() => {
    setInsta(undefined)
    fetch(url)
      .then(data => data.json())
      .then(data => {
        setInsta(data.data)
        // console.log("insta",insta)
        console.log("data", data)
      })
  }, [props.country])
  return (
    <section className="ig mt-10 md:mt-48" id="ig">
      <div className="py-10">
        <a
          href={IGlinks[props.country]}
          target="_blank"
          className="text-black "
        >
          <h1
            className={`${props.textStyle.h1} font-black text-center max-w-max mx-auto  hoverText bg4`}
          >
            Follow us on instagram
          </h1>
        </a>
      </div>
      <a
          href={IGlinks[props.country]}
          target="_blank"
        >
      <Slider {...settings} className="">
        {insta
          ? insta
              .filter(photo => photo.media_type === "IMAGE")
              .map(photo => (
                <img src={photo.media_url} alt="pic" className=" igFeeds " />
              ))
          : pics.map(i => {
              return <img src={i} alt="" />
            })}
      </Slider>
      </a>
    </section>
  )
}

export default IG
