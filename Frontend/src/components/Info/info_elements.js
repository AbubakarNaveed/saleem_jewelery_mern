import React from 'react'
import styled from 'styled-components'
export const InfoContainer = styled.div`
  color: black;
  background-color: #f9f9f9;
`

export const InfoWrapper = styled.div`
  display: flex;
  z-index: 1;
  height: 850px;
  justify-content: space-between;
  align-items: center !important;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;

  @media screen and (max-width: 850px) {
    height: 600px;
  }
  @media screen and (max-width: 650px) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 850px !important;
  }
`

// export const InfoRow = styled.div`
//   display: grid;
//   grid-auto-columns: minmax(auto, 1fr);
//   align-items: center;
//   grid-template-areas: 'col2 col1';

//   @media screen and (max-width: 650px) {
//     grid-template-areas: 'col1 col2';
//   }
// `

// export const Column1 = styled.div`
//   margin-bottom: 15px;
//   padding: 0 15px;
//   grid-area: col1;
// `

// export const Column2 = styled.div`
//   margin-bottom: 15px;
//   padding: 0 15px;
//   grid-area: col2;
// `

export const TextWrapper = styled.div`
  max-width: 540px;
  /* margin-top: -150px; */
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 800;
  color: black;
  @media screen and (max-width: 850px) {
    font-size: 40px;
  }
`
export const Para = styled.p`
  max-width: 440px;
  font-size: 28px;
  line-height: 24px;
  text-align: left;
  @media screen and (max-width: 850px) {
    font-size: 20px;
  }
`

export const ImgWrap = styled.div`
  max-width: 500px;
  padding: 0 0 0 50px;
  @media screen and (max-width: 850px) {
    max-width: 400px;
  }
  @media screen and (max-width: 650px) {
    padding: 0 0 0 0;
    max-width: 350px;
    margin-top: -30px;
  }
`
export const Img = styled.img`
  width: 100%;
  padding: 0;
`
