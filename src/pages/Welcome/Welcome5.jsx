import React, { useState } from 'react';
import { StBackground, StFont, StGrid } from './WelcomeStyled';
import { Card } from '../../features/CarouselTest'
import Carousel from '../../features/Carousel';

function Welcome5() {

  return (
    <>
      <StBackground>
        <StGrid>
        <StFont>Flexidesk는 회사생활을 <br/> 어떻게 쉽게 만들어주나요?</StFont>
      </StGrid>
      </StBackground>

      <StBackground>
        <StGrid>
        <Carousel/>
        </StGrid>
      </StBackground>
    </>
  );
}

export default Welcome5;