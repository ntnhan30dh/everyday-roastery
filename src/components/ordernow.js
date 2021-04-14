import React from "react"
import { Modal } from "semantic-ui-react"
import CountryList from "./countrylist"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

function OrderNow(props) {
  const [open, setOpen] = React.useState(false)

  const data = useStaticQuery(graphql`
    {
      orderNow: file(relativePath: { eq: "order-now.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 480) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <button className="w-full"> 
          {props.display} 
        </button>
      }
    >
      <Modal.Header>Please select the country</Modal.Header>
      <Modal.Content>
        <Modal.Description></Modal.Description>
        <CountryList />
      </Modal.Content>
    </Modal>
  )
}

export default OrderNow
