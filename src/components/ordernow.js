import React from "react"


function OrderNow(props) {

  const link = {
             "Saudi Arabia":"https://hungerstation.com/sa-en/restaurant/Everyday-Coffee-Roastery/riyadh/munsiyah/38525",
              "Singapore":'https://www.foodpanda.sg/restaurant/k6sg/everyday-roastery-coffee',
              "Bahrain":'https://www.talabat.com/bahrain/everyday-coffee',
              "Kuwait":'https://www.talabat.com/kuwait/everyday-coffee',
              "Malaysia":'https://www.foodpanda.my/restaurant/dwof/everyday-roastery-cheras',
              "Hungary":'https://www.foodpanda.hu/darkstore/x6ve/panda-market-belvaros',
              "Germany":'https://www.foodpanda.de',
              "UAE":'https://www.talabat.com/uae/everyday-roastery-business-bay',
              "Qatar":'https://www.talabat.com/qatar/everyday-coffee-roastery',
              "Turkey":'https://www.yemeksepeti.com/en/everyday-roastery-fatih-aksaray-mah-istanbul?status=closed',
              'Egypt':'https://www.talabat.com/egypt/everyday-roastery-tagammoa-5--banks-center'
  }

  return (
    
    <a href={link[props.country]} target="_blank">
        <button className= {props.buttonStyle} > 
          {props.display} 
          {/* <h1 className="text-white">
            {props.country}
          </h1> */}
        </button>
    </a>
      
    
  )
}

export default OrderNow
