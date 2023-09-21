import React from 'react'
import {
  InfoContainer,
  InfoWrapper,
  TextWrapper,
  Heading,
  Para,
  ImgWrap,
  Img,
} from './info_elements'

import img from '../../Img/Img_info.svg'

const InfoSection = () => {
  return (
    <>
      <InfoContainer id="about">
        <InfoWrapper>
          <TextWrapper>
            <Heading>About Us </Heading>
            <Para>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              rem optio. Distinctio qui hic et mollitia quidem possimus.
              Praesentium quibusdam ad laudantium labore necessitatibus vero
              distinctio rem repellat similique numquam?
            </Para>
          </TextWrapper>
          <ImgWrap>
            <Img src={img} />
          </ImgWrap>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
