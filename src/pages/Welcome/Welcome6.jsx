import React, { useState } from 'react';
import { StBackground, StFont, StGrid, StOverall, StWrapDiv } from './WelcomeStyled';
import { Card } from '../../features/CarouselTest'
import Carousel from '../../features/Carousel';

function Welcome6() {

  return (
    <>
      <StBackground>
        <StOverall>
        <StWrapDiv>
          <StFont 
          color="#383838"
          >
          Flexidesk는 회사생활을 <br/> 어떻게 쉽게 만들어주나요?
          </StFont>

          <Carousel/>

        </StWrapDiv>
        </StOverall>



      </StBackground>
    </>
  );
}

export default Welcome6;