import React from "react"
import { Modal } from "semantic-ui-react"

import OrderNow from "./ordernow"


import Americano from "../images/menu/Hot Coffees/Americano.png"
import Flat_white from "../images/menu/Hot Coffees/Flat white.png"
import Latte from "../images/menu/Hot Coffees/Latte.png"
import Spanish_Latte from "../images/menu/Hot Coffees/Spanish Latte.png"
import Cappuccino from "../images/menu/Hot Coffees/Cappuccino.png"
import Macchiato from "../images/menu/Hot Coffees/Macchiato.png"
import Caramel_Latte from "../images/menu/Hot Coffees/Caramel Latte.png"
import Mocha from "../images/menu/Hot Coffees/Mocha.png"
import Mocha_Dark from "../images/menu/Hot Coffees/Dark Mocha.png"
import Mocha_White from "../images/menu/Hot Coffees/White Mocha.png"

import Iced_Americano from "../images/menu/Cold Coffees/Iced Americano.png"
import Iced_Latte from "../images/menu/Cold Coffees/Iced Latte.png"
import Iced_Spanish_Latte from "../images/menu/Cold Coffees/Iced Spanish Latte.png"
import Iced_Macchiato from "../images/menu/Cold Coffees/Iced Macchiato.png"
import Iced_Caramel_Latte from "../images/menu/Cold Coffees/Iced Caramel Latte.png"
import Iced_Mocha from "../images/menu/Cold Coffees/Iced Mocha.png"
import Iced_Dark_Mocha from "../images/menu/Cold Coffees/Iced Dark Mocha.png"
import Iced_White_Mocha from "../images/menu/Cold Coffees/Iced White Mocha.png"

import Dark_Mocha_Frappe from "../images/menu/Frappes/Dark Mocha Frappe.png"
import White_Mocha_Frappe from "../images/menu/Frappes/White Mocha Frappe.png"
import Chocolate_Chip_Cookie_Frappe from "../images/menu/Frappes/Chocolate Chip Cookie Frappe.png"
import Chocolate_Hazelnut_Frappe from "../images/menu/Frappes/Chocolate Frappe.png"
import Vanilla_Frappe from "../images/menu/Frappes/Vanilla Frappe.png"
import Salted_Caramel_Frappe from "../images/menu/Frappes/Salted Caramel Frappe.png"
import Chocolate_Frappe from "../images/menu/Frappes/Chocolate Frappe.png"
import Strawberry_Frappe from "../images/menu/Frappes/Strawberry Frappe.png"
import Green_Apple_Mint_Frappe from "../images/menu/Frappes/Green Apple Mint Frappe.png"
import Mango_Frappe from "../images/menu/Frappes/Mango Frappe.png"



import bg1 from "../images/menu/bg/menuBg1.png"
import bg2 from "../images/menu/bg/menuBg2.png"
import bg3 from "../images/menu/bg/menuBg3.png"
import bg4 from "../images/menu/bg/menuBg4.png"
import bg5 from "../images/menu/bg/menuBg5.png"
import bg6 from "../images/menu/bg/menuBg6.png"
import bg7 from "../images/menu/bg/menuBg7.png"

const MenuItem1 = props => {
  const pics = {
    "Americano": Americano,
    "Flat White": Flat_white,
    "Latte": Latte,
    "Vegan Latte": Latte,
    "Spanish Latte": Spanish_Latte,
    "Caramel Spanish Latte": Spanish_Latte,
    "Cappuccino": Cappuccino,
    "Macchiato": Macchiato,
    "Caramel Latte": Caramel_Latte,
    "Mocha": Mocha,
    "Salted Caramel Mocha": Mocha,
    "Dark Chocolate Mocha": Mocha_Dark,
    "White Chocolate Mocha": Mocha_White,

    //cold

     "Iced Americano":Iced_Americano,
      "Iced Latte": Iced_Latte,
      "Iced Vegan Latte":Iced_Latte,
      "Iced Spanish Latte":Iced_Spanish_Latte,
      "Iced Caramel Spanish Latte":Iced_Spanish_Latte,
      "Iced Macchiato":Iced_Macchiato,
      "Iced Caramel Latte":Iced_Caramel_Latte,
      "Iced Espresso Shaker":Iced_Americano,
      "Iced Mocha":Iced_Mocha,
      "Iced Dark Chocolate Mocha":Iced_Dark_Mocha,
      "Iced White Chocolate Mocha":Iced_White_Mocha,
      "Iced Salted Caramel Mocha":Iced_Mocha,

      // Frappes
      "Dark Mocha Frappe": Dark_Mocha_Frappe,
      "White Mocha Frappe":White_Mocha_Frappe,
      "Chocolate Chip Cookie Frappe":Chocolate_Chip_Cookie_Frappe,
      "Chocolate Hazelnut Frappe":Chocolate_Hazelnut_Frappe,
      "Vanilla Frappe":Vanilla_Frappe,
      "Salted Caramel Frappe":Salted_Caramel_Frappe,
      "Chocolate Frappe":Chocolate_Frappe,
      "Strawberry Frappe":Strawberry_Frappe,
      "Green Apple Mint Frappe":Green_Apple_Mint_Frappe,
      "Mango Frappe":Mango_Frappe, 
  }

  const description = {
 "Americano":	"Equal parts espresso and water creating a bold and dark flavor",
"Flat White":	"Perfect balance of espresso (extra shot) coated with a delicate layer of velvety milk foam",
"Cappuccino":	"Dark espresso enveloped with a thick layer of steamed, frothy milk foam",
"Latte":	"Espresso shot covered with a thin layer of fresh, steamed milk foam",
"Vegan Latte":	"Espresso shot covered with a thin layer of fresh, steamed oat milk foam",
"Spanish Latte":	"A sweet and flavorful blend of sweet condensed milk and our rich espresso",
"Caramel Spanish Latte"	:"A sweet and flavorful blend of caramelized condensed milk and our rich espresso",
"Macchiato": "Freshly steamed fluffy milk foam with espresso roast",
"Caramel Latte":	"A smooth blend of milk and caramel flavour, topped with espresso",
"Mocha":"Delicious combination of our rich espresso with premium chocolate and frothed milk",
"Dark Chocolate Mocha":	"Premium rich, dark chocolate melted in creamy milk and topped with espresso and whipped cream",
"White Chocolate Mocha": "Premium white chocolate melted in milk and topped with our rich espresso and whipped cream",
"Salted Caramel Mocha":	"A creamy blend of premium dark chocolate, milk and caramel-flavoured syrup, topped with espresso and whipped cream",

// cold 
"Iced Americano": "Equal parts espresso and water creating a bold and dark flavor, poured over ice",
"Iced Latte": "Espresso shot covered with a thin layer of fresh, steamed milk foam, poured over ice",
"Iced Vegan Latte": "Espresso shot covered with a thin layer of fresh, steamed oat milk foam, poured over ice",
"Iced Spanish Latte":	"A sweet and flavorful blend of sweet condensed milk and our rich espresso, poured over ice",
"Iced Caramel Spanish Latte": "A sweet and flavorful blend of caramelized condensed milk and our rich espresso, poured over ice",
"Iced Macchiato":	"Freshly steamed fluffy milk foam, poured over ice and topped with our rich espresso",
"Iced Caramel Latte":	"A smooth blend of milk and caramel flavour, topped with espresso, poured over ice",
"Iced Espresso Shaker":	"Our rich espresso shaken over ice for the ultimate refresher",
"Iced Mocha":	"Delicious combination of our rich espresso with premium chocolate and frothed milk, poured over ice",
"Iced Dark Chocolate Mocha":	"Premium rich, dark chocolate melted in creamy milk, poured over ice, and topped with espresso and whipped cream",
"Iced White Chocolate Mocha":	"Premium white chocolate melted in milk, poured over ice, and topped with our rich espresso and whipped cream",
"Iced Salted Caramel Mocha":	"A creamy blend of premium dark chocolate, milk and caramel flavour, poured over ice, and topped with espresso and whipped cream",

// FRAPPES

"Dark Mocha Frappe":	"Luxuriate in this indulgent mix of premium dark chocolate, topped with espresso, cold milk, ice and a dollop of freshly whipped cream.",
"White Mocha Frappe	": "Revel in cool frappé heaven with this delicate union of espresso, white chocolate, milk and ice, finished with a helping of velvety whipped cream.",
"Chocolate Chip Cookie Frappe": "Our signature frappé is given a serious makeover with the sweet flavour of a chocolate chip cookie, plus the usual mix of espresso, milk, ice and topping of whipped cream.", 
"Chocolate Hazelnut Frappe":"The rich flavour of roasted hazelnut has been combined with our premium blend of chocolate, along with dark espresso, milk and ice, decadently topped with a layer of whipped cream.",
"Vanilla Frappe":	"Vanilla beans are introduced to our classic frappé drink, to give added sweetness and aroma to our signature fusion of coffee, milk, ice and whipped cream topping.", 
"Salted Caramel Frappe": "This perfect combination of sweet and salty blends the indulgent flavours of salted caramel, with rich espresso, fresh milk, ice and a dollop of freshly whipped cream.", 
"Chocolate Frappe":	"Our premium dark chocolate takes centre stage in this refreshing frappé that mixes coffee, milk, ice and is delicately garnished with whipped cream.", 
"Strawberry Frappe":	"Our signature frappé is combined with the sweet juiciness of fresh strawberries in this invigorating summertime twist.", 
"Green Apple Mint Frappe":	"A refreshing blend of ice and a combination of tart green apple and mint flavours",
"Mango Frappe" :	"The exotic flavour of mango is introduced to our classic chilled frappé to give a fruity kick to your day."

}
const bg = [bg1,bg2,bg3,bg4,bg5,bg6,bg7,bg1,bg2,bg3,bg4,bg5,bg6,bg7]
  return (
    <Modal
      trigger={
        <div className="menuItem1Wrap mx-2 md:mx-4">
          <div className="relative">
            <div className="absolute top-0 mx-2 h-full">
              <img src={bg[props.position]} alt={"background"}  className="object-cover h-full"/>
            </div>
            <div className=" imgContainer  overflow-hidden transform hover:scale-75 	 duration-200 ">
              <div className=" imgWrap transform hover:scale-160 duration-200 hover:translate-y-1/4 ">
                <img src={pics[props.name]} alt={props.name} />
              </div>
            </div>
          </div>
          <div className="text-lg md:text-2xl font-black my-2">
            {props.name}  
          </div>
        </div>
      }
      fluid
      size="medium"
      closeIcon
    >
    <div className="detailsItem md:flex ">
      <div className="img md:w-1/2 bg-white_grey">
      <div className=" imgWrap px-1/5 ">
                <img src={pics[props.name]} alt={props.name} />
              </div>
      </div>
      <div className="text md:w-1/2 p-4 md:p-10">
      <span className="font-black uppercase text-sm md:text-lg">
      {props.menuType}
      </span>
      <div className={`uppercase ${props.textStyle.h3} font-black py-4 md:py-6  border-b-2 border-black border-opacity-10`}>{props.name} </div>
      <p className={`${props.textStyle.p} my-4 md:my-10 `}>
      {description[props.name]}
      </p>
      <OrderNow
           country={props.country}
            display={
              <div className="orderBtn  text-white text-sm md:text-base rounded-full py-3 px-6  uppercase font-bold bg-blue mb-1/2 ">
                Order Now
              </div>
            }
          />
      </div>
    </div>
    </Modal>
  )
}

export default MenuItem1
