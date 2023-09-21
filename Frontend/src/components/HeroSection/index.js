import React from 'react'
import {
  HeroContainer,
  HeroBackground,
  HeroVideo,
  HeroContent,
  HeroHeader,
  HeroParagraph,
} from './HeroSection'
import Video from '../../Video/video1.mp4'
const HeroSections = () => {
  return (
    <HeroContainer id="header">
      <HeroBackground>
        <HeroVideo autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBackground>
      <HeroContent>
        <HeroHeader> Saleem Jewelers</HeroHeader>
        <HeroParagraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aliquid
        </HeroParagraph>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSections
