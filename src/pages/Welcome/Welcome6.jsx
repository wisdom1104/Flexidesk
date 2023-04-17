import React, { useState } from 'react';
import {
  StBackground,
  StFont,
  StGrid,
  StOverall,
  StSliderContain,
  StWrapDiv,
} from './WelcomeStyled';
import Carousel from '../../features/Carousel';

function Welcome6() {
  return (
    <>
      <StBackground>
        <StOverall height="200px">
          <StWrapDiv>

          <StFont color="#383838" marginBottom="100px">
            Flexidesk는 회사생활을 <br /> 어떻게 쉽게 만들어주나요?
          </StFont>
          </StWrapDiv>          
        </StOverall>
        
        <StSliderContain>
          <Carousel />
        </StSliderContain>
      </StBackground>
    </>
  );
}

export default Welcome6;
