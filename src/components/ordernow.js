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
              "Turkey":'https://www.yemeksepeti.com/darkstore/mcgw/yemeksepeti-market-19-mayis-istanbul/category/a4992ed8-3dc6-4be5-9e92-06b642c45787',
              'Egypt':'https://www.talabat.com/egypt/everyday-roastery-tagammoa-5--banks-center'
  }

  return (
    <div className={`${props.hover==="no"?"":"transform hover:scale-110"}`}>
    <a href={link[props.country]} target="_blank">
        <button className= {` ${props.buttonStyle}`} > 
          {props.display} 
        </button>
    </a>
    </div>
    
      
    
  )
}

export default OrderNow
