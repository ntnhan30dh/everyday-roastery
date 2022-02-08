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
import Caramel_Spanish_Latte from "../images/menu/Hot Coffees/Caramel Spanish Latte.png"
import Mocha from "../images/menu/Hot Coffees/Mocha.png"
import Salted_Caramel_Mocha from "../images/menu/Hot Coffees/Salted Caramel Mocha.png"
import Mocha_Dark from "../images/menu/Hot Coffees/Dark Mocha.png"
import Mocha_White from "../images/menu/Hot Coffees/White Mocha.png"

import Iced_Americano from "../images/menu/Cold Coffees/Iced Americano.png"
import Iced_Latte from "../images/menu/Cold Coffees/Iced Latte.png"
import Iced_Spanish_Latte from "../images/menu/Cold Coffees/Iced Spanish Latte.png"
import Iced_Macchiato from "../images/menu/Cold Coffees/Iced Macchiato.png"
import Iced_Caramel_Latte from "../images/menu/Cold Coffees/Iced Caramel Latte.png"
import Iced_Caramel_Spanish_Latte from "../images/menu/Cold Coffees/Iced Caramel Spanish Latte.png"
import Iced_Mocha from "../images/menu/Cold Coffees/Iced Mocha.png"
import Iced_Dark_Mocha from "../images/menu/Cold Coffees/Iced Dark Mocha.png"
import Iced_White_Mocha from "../images/menu/Cold Coffees/Iced White Mocha.png"
import Iced_Salted_Caramel_Mocha from "../images/menu/Cold Coffees/Iced Salted Caramel Mocha.png"
import Iced_Espresso_Shaker from "../images/menu/Cold Coffees/Iced Espresso Shaker.png"



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

import Red_Berry_Ice_Tea from "../images/menu/Cold Drinks/Red Berry Ice Tea.png"
import Peach_Ice_Tea from "../images/menu/Cold Drinks/Peach Ice Tea.png"
import Lemon_Ice_Tea from "../images/menu/Cold Drinks/Lemon Ice Tea.png"
import Pear_Peach_Green_Ice_Tea from "../images/menu/Cold Drinks/Peach Ice Tea.png"

import Hot_Chocolate from "../images/menu/Hot Drinks/Hot Chocolate.png"
import Black_Tea from "../images/menu/Hot Drinks/Black Tea.png"
import Green_Tea from "../images/menu/Hot Drinks/Green Tea.png"

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
    "Caramel Spanish Latte": Caramel_Spanish_Latte,
    "Cappuccino": Cappuccino,
    "Macchiato": Macchiato,
    "Caramel Latte": Caramel_Latte,
    "Mocha": Mocha,
    "Salted Caramel Mocha": Salted_Caramel_Mocha,
    "Dark Chocolate Mocha": Mocha_Dark,
    "White Chocolate Mocha": Mocha_White,

    //cold

    "Iced Americano": Iced_Americano,
    "Iced Latte": Iced_Latte,
    "Iced Vegan Latte": Iced_Latte,
    "Iced Spanish Latte": Iced_Spanish_Latte,
    "Iced Caramel Spanish Latte": Iced_Caramel_Spanish_Latte,
    "Iced Macchiato": Iced_Macchiato,
    "Iced Caramel Latte": Iced_Caramel_Latte,
    "Iced Espresso Shaker": Iced_Espresso_Shaker,
    "Iced Mocha": Iced_Mocha,
    "Iced Dark Chocolate Mocha": Iced_Dark_Mocha,
    "Iced White Chocolate Mocha": Iced_White_Mocha,
    "Iced Salted Caramel Mocha": Iced_Salted_Caramel_Mocha,

    // Frappes
    "Dark Mocha Frappé": Dark_Mocha_Frappe,
    "White Mocha Frappé": White_Mocha_Frappe,
    "Chocolate Chip Cookie Frappé": Chocolate_Chip_Cookie_Frappe,
    "Chocolate Hazelnut Frappé": Chocolate_Hazelnut_Frappe,
    "Vanilla Frappé": Vanilla_Frappe,
    "Salted Caramel Frappé": Salted_Caramel_Frappe,
    "Chocolate Frappé": Chocolate_Frappe,
    "Strawberry Frappé": Strawberry_Frappe,
    "Green Apple Mint Frappé": Green_Apple_Mint_Frappe,
    "Mango Frappé": Mango_Frappe,

    // cold Drink
    "Red Berry Ice Tea": Red_Berry_Ice_Tea,
    "Peach Ice Tea": Peach_Ice_Tea,
    "Lemon Ice Tea": Lemon_Ice_Tea,
    "Pear & Peach Green Ice Tea": Pear_Peach_Green_Ice_Tea,

    // Hot Drinks 

  "Hot Chocolate": Hot_Chocolate,
  "Green Tea":Green_Tea,
  "Black Tea":Black_Tea, 
  
  }

  const description = {
    "Americano": "Let the coffee bean take centre stage with this effortless blend of rich espresso and hot water.",
    "Flat White":
      "A perfectly balanced coffee made from a double shot of our signature espresso, simply topped with steamed whole milk.",
    "Cappuccino":
      "A coffee shop classic made of rich espresso, steamed milk and topped off with a creamy layer of rich foam.",
    "Latte":
      "A warming balance of espresso and steamed milk is finished with a feathery light layer of foam.",
    "Vegan Latte":
      "This plant-based version of a classic latte combines creamy oat milk poured over rich espresso.",
    "Spanish Latte":
    "This Spanish twist combines espresso with condensed milk for a sweeter, creamier taste. Also known as Café con Leche, the Spaniards typically enjoy a cup of the sweet stuff with their breakfast.",
    "Caramel Spanish Latte":
    "Take the sweetness up a level with this Spanish themed blend of rich caramel, condensed milk and espresso coffee." ,
    "Macchiato": "A firm favourite from the streets of Italy- a classic shot of dark espresso is lightly garnished with a fluffy milk foam.",
    "Caramel Latte":
      "Our signature latte is complemented by an infusion of caramel to give an indulgent twist to a coffee shop classic.",
    "Mocha":
      "A perfect duet of espresso and rich chocolate, blended with steamed velvety milk.",
    "Dark Chocolate Mocha":
      "Awaken your senses with this blend of dark chocolate, signature espresso and steamed milk, topped off with a delicious layer of indulgent whipped cream.",
    "White Chocolate Mocha":
      "Light and creamy, this delicate mix of white chocolate and espresso goes one step further with a velvety whipped cream topping.",
    "Salted Caramel Mocha":
      "The perfect combination of salty and sweet. Dark chocolate and espresso are combined with salted caramel, steamed milk, and if that's not enough- we have added a layer of whipped cream for good measure!",

    // cold
    "Iced Americano":
      "Awaken your senses with a simple shot of espresso topped with cold water and ice.",
    "Iced Latte":
      "A refreshing balance of espresso and milk, poured over ice.",
    "Iced Vegan Latte":
      " This plant-based version of a classic iced latte combines creamy oat milk poured over rich espresso.",
    "Iced Spanish Latte":
      "Kick start your day like a Spaniard with this refreshingly cold coffee that combines espresso with condensed milk for a sweeter, creamier taste.",
    "Iced Caramel Spanish Latte":
      "Take the sweetness up a level with this ice cold blend of rich caramel, condensed milk and espresso coffee.",
    "Iced Macchiato":
      "This refreshingly crisp take on an Italian classic combines dark espresso with cold milk.",
    "Iced Caramel Latte":
      "This iced version of our latte is complemented by an infusion of caramel to give an indulgent twist to a coffee shop classic.",
    "Iced Espresso Shaker":
      "Keep it simple and kick start your day with this revitalising mix of ice, full bodied espresso and fresh milk.",
    "Iced Mocha":
      "Coffee and chocolate go hand-in-hand for this iced version of a classic mocha.",
    "Iced Dark Chocolate Mocha":
      "An icy blend of cold milk, dark chocolate and signature espresso, topped with a delicious layer of indulgent whipped cream.",
    "Iced White Chocolate Mocha":
      "Light, creamy and refreshing, this chilled mix of white chocolate and espresso goes one step further with a velvety whipped cream topping.",
    "Iced Salted Caramel Mocha":
      "The perfect combination of salty and sweet. Dark chocolate and espresso are combined with salted caramel, iced milk, and if that's not enough- we have added a cool layer of whipped cream for good measure!",

    // FRAPPES

    "Dark Mocha Frappé":
      "Luxuriate in this indulgent mix of premium dark chocolate, topped with espresso, cold milk, ice and a dollop of freshly whipped cream.",
    "White Mocha Frappé	":
      "Revel in cool frappé heaven with this delicate union of espresso, white chocolate, milk and ice, finished with a helping of velvety whipped cream.",
    "Chocolate Chip Cookie Frappé":
      "Our signature frappé is given a serious makeover with the sweet flavour of a chocolate chip cookie, plus the usual mix of espresso, milk, ice and topping of whipped cream.",
    "Chocolate Hazelnut Frappé":
      "The rich flavour of roasted hazelnut has been combined with our premium blend of chocolate, along with dark espresso, milk and ice, decadently topped with a layer of whipped cream.",
    "Vanilla Frappé":
      "Vanilla beans are introduced to our classic frappé drink, to give added sweetness and aroma to our signature fusion of coffee, milk, ice and whipped cream topping.",
    "Salted Caramel Frappé":
      "This perfect combination of sweet and salty blends the indulgent flavours of salted caramel, with rich espresso, fresh milk, ice and a dollop of freshly whipped cream.",
    "Chocolate Frappé":
      "Our premium dark chocolate takes centre stage in this refreshing frappé that mixes coffee, milk, ice and is delicately garnished with whipped cream.",
    "Strawberry Frappé":
      "Our signature frappé is combined with the sweet juiciness of fresh strawberries in this invigorating summertime twist.",
    "Green Apple Mint Frappé":
      "A refreshing blend of ice and a combination of tart green apple and mint flavours",
    "Mango Frappé":
      "The exotic flavour of mango is introduced to our classic chilled frappé to give a fruity kick to your day.",

    // cold drink
    "Red Berry Ice Tea":
      "A refreshing blend of red summer berries combined with tea and served with ice.",
    "Peach Ice Tea":
      "Nothing says ‘summertime’ like this refreshing mix of ice tea infused with the sweet flavour of peach, serviced over ice.",
    "Lemon Ice Tea":
      "Clean, crisp and refreshing- this thirst quenching ice tea combines fresh lemon and ice to provide the perfect summertime cooler.",
    "Pear & Peach Green Ice Tea":
      "Awaken your senses with this invigorating mix of green tea that combines the sweetness of peach and pear.",

    // Hot Drinks

    "Hot Chocolate":
      "A true crowd pleaser enjoyed at any time of the day. Our signature hot chocolate is a warming blend of premium cacao and steamed milk, topped with plenty of creamy froth. ",
    "Black Tea":
      "Each sip of this beloved black tea unfolds to reveal the complexity of this aromatical blend. An elegant classic, ideal to enjoy at any time of the day.",
    "Green Tea":
      "Fresh, clean, and packed with positivity, our green tea can help you make the most of everyday. This softly sweet tea will transport your senses to pure green delight.",
  }
  const bg = [
    bg1,
    bg2,
    bg3,
    bg4,
    bg5,
    bg6,
    bg7,
    bg1,
    bg2,
    bg3,
    bg4,
    bg5,
    bg6,
    bg7,
  ]
  return (
    <Modal
      trigger={
        <div className="menuItem1Wrap mx-2 md:mx-4">
          <div className="relative">
            <div className="absolute top-0 mx-2 h-full">
              <img
                src={bg[props.position]}
                alt={"background"}
                className="object-cover h-full"
              />
            </div>
            <div className=" imgContainer  overflow-hidden transform hover:scale-80 	 duration-200 ">
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
      className="modal"
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
          <div
            className={`uppercase ${props.textStyle.h3} font-black py-4 md:py-6  border-b-2 border-black border-opacity-10`}
          >
            {props.name}{" "}
          </div>
          <p className={`${props.textStyle.p} my-4 md:my-10 `}>
            {description[props.name]}
          </p>
          <OrderNow
            country={props.country}
            display={
              <div className="orderBtn  text-white text-sm md:text-base rounded-full py-3 px-6  uppercase font-bold bg-blue mb-1/2 tracking-wider ">
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
