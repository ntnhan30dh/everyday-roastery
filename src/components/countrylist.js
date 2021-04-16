import React from "react"
import { Dropdown } from 'semantic-ui-react'

const countryOptions = [
  { key: 'sa', value: 'sa', flag: 'sa', text: 'Saudi Arabia' , as: 'a',target:"_blank", href:'https://hungerstation.com/sa-en'},
  { key: 'kuwait', value: 'kuwait', flag: 'kuwait', text: 'Kuwait', as: 'a',target:"_blank", href:'https://www.talabat.com/kuwait' },
  { key: 'uae', value: 'uae', flag: 'uae', text: 'UAE', as: 'a', target:"_blank", href:'https://www.talabat.com/uae' },
  { key: 'bahrain', value: 'bahrain', flag: 'bahrain', text: 'Bahrain', as: 'a', target:"_blank", href:'https://www.talabat.com/bahrain' },
  { key: 'uae', value: 'uae', flag: 'uae', text: 'UAE', as: 'a', target:"_blank", href:'https://www.talabat.com/qatar' },
  { key: 'sg', value: 'sg', flag: 'sg', text: 'Singapore', as: 'a', target:"_blank", href:'https://www.foodpanda.sg' },
  { key: 'my', value: 'my', flag: 'my', text: 'Malaysia', as: 'a', target:"_blank", href:'https://www.foodpanda.my' },
  { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina', as: 'a', target:"_blank", href:'https://www.pedidosya.com.ar' },
  { key: 'uy', value: 'uy', flag: 'uy', text: 'Uruguay', as: 'a', target:"_blank", href:'https://www.pedidosya.com.uy' },
  { key: 'cl', value: 'cl', flag: 'cl', text: 'Chile', as: 'a', target:"_blank", href:'https://www.pedidosya.cl' },
  { key: 'tr', value: 'tr', flag: 'tr', text: 'Turkey', as: 'a', target:"_blank", href:'https://www.yemeksepeti.com/istanbul' },
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
