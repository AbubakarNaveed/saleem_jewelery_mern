import React from 'react'
import Card from './Services_card'
import {
  ServicesContainer,
  Heading,
  CardWrapper,
  Service,
  Curve,
} from './Services_elemets'
const Services = () => {
  return (
    <>
      <Service id="services">
        <ServicesContainer>
          <Heading>Our Services</Heading>
          <CardWrapper>
            <Card
              text="Buy"
              icon="fas fa-money-bill-wave"
              descrp="We buy jewelry from you at market price"
              className="card"
            />
            <Card
              text="Elevate"
              icon="fas fa-search-dollar"
              descrp="Our elevation is best"
              className="card"
            />
            <Card
              text="Sell"
              icon="fas fa-hand-holding-usd"
              descrp="We sell you jewelry at the best price"
              className="card cardspace"
            />
          </CardWrapper>
        </ServicesContainer>
        <Curve className="curve" />
      </Service>
    </>
  )
}

export default Services
