import React from "react"
import { Dropdown } from 'semantic-ui-react'

const countryOptions = [
  { key: 'cl', value: 'cl', flag: 'cl', text: 'Chile ' , as: 'a',target:"_blank", href:'https://www.pedidosya.cl/cadenas/itacate'},
  { key: 'pa', value: 'pa', flag: 'pa', text: 'Panama', as: 'a',target:"_blank", href:'https://www.pedidosya.com.pa/cadenas/itacate' },
  { key: 'sg', value: 'sg', flag: 'sg', text: 'Singapore', as: 'a', target:"_blank", href:'https://www.foodpanda.sg/chain/ct5ym/itacate' },
]
const CountryList = () => {
  const action = (e, { value }) =>{
    console.log ("value", value)
  }
  return (
      <Dropdown
    placeholder='Select Country'
    fluid
    search
    selection
    options={countryOptions}
    onChange = {action}
  />
  )
}

export default CountryList
