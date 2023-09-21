import React from 'react'
import styled from 'styled-components'

export const HeroContainer = styled.div`
  height: 100vh;
  background-color: black;
  mix-blend-mode: overlay;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: auto;
  z-index: 1;
  @media screen and (max-width: 500px) {
    height: 100vh;
  }
`

export const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const HeroVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.35;

  /* background-color: #232a34; */
`
export const HeroContent = styled.div`
  z-index: 3;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const HeroHeader = styled.h1`
  color: #fff;
  margin-bottom: 15px;
  font-size: 65px;
  font-family: 'Playball', 'cursive';
  font-family: 'The Nautigal', 'cursive';

  @media screen and (max-width: 500px) {
    font-size: 55px;
  }
`
export const HeroParagraph = styled.p`
  color: #fff;
  font-size: 23px;
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`
