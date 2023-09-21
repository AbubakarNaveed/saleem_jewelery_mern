import React from 'react'
import { Card, Card_text, Card_description } from './Services_elemets'
const Services_card = ({ text, icon, descrp }) => {
  return (
    <Card className="">
      <i className={icon} />
      <Card_text>{text}</Card_text>
      <Card_description>{descrp}</Card_description>
    </Card>
  )
}
export default Services_card
