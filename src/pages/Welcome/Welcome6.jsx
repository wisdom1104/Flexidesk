import React, { useState } from 'react';
import { StBackground, StFont, StGrid, StOverall } from './WelcomeStyled';
import { Card } from '../../features/CarouselTest'
import Carousel from '../../features/Carousel';

function Welcome6() {

  return (
    <>
      <StBackground>
        <StOverall>
        <div>
          <StFont 
          color="#383838"
          padding='200px'
          >
          Flexidesk는 회사생활을 <br/> 어떻게 쉽게 만들어주나요?
          </StFont> 
        </div>
        </StOverall>

        <StOverall>
          <Carousel/>
        </StOverall>

      </StBackground>
    </>
  );
}

export default Welcome6;