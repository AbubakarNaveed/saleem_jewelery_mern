import React from 'react'
import styled from 'styled-components'

export const Service = styled.div`
  background-color: black;
  height: 800px;
  @media screen and (max-width: 1080px) {
    height: 950px;
  }
`
export const ServicesContainer = styled.div`
  max-width: 1100px;
  height: 100%;
  display: flex;
  z-index: 1;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  @media screen and (max-width: 1080px) {
    padding-top: 100px;
  }
  @media screen and (max-width: 680px) {
    padding-top: 25px;
  }
`
export const Heading = styled.h1`
  font-size: 48px;
  margin: -75px 0 75px 0;
  line-height: 1.1;
  font-weight: 800;
  color: white;
  @media screen and (max-width: 850px) {
    font-size: 40px;
  }
  @media screen and (max-width: 680px) {
    margin: 0 0 75px 0;
  }
`
export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  width: 100%;

  @media screen and (max-width: 1150px) {
    padding: 0 50px 0 50px;
  }
  @media screen and (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
  }
  @media screen and (max-width: 750px) {
  }
`

export const Card = styled.div`
  display: flex;
  width: 300px !important;
  height: 150px !important;
  background-color: #f9f9f9;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 825px) {
    max-width: 300px;
    text-align: left;
  }

  @media screen and (max-width: 680px) {
  }
  @media screen and (max-width: 1030px) {
    margin-bottom: 50px;
  }

  @media screen and (max-width: 310px) {
    width: 250px !important;
  }
`
export const Icon = styled.div``

export const Card_text = styled.p`
  font-size: 24px;
  margin-bottom: -8px;
  margin-top: 5px;
  color: black;
  font-weight: bold;
  @media screen and (max-width: 825px) {
    font-size: 24px;
  }
`

export const Card_description = styled.p`
  font-size: 13px;
  line-height: 1.5;
  margin-top: 15px;
  text-align: center;
  color: black;
  @media screen and (max-width: 825px) {
    font-size: 13px;
  }
  @media screen and (max-width: 680px) {
    margin-top: 15px;
  }
`
export const Curve = styled.div``
