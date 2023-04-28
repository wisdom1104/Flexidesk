import React, { useState } from 'react';
import {
  StBackground,
  StFont,
  StOverall,
  StSliderContain,
  StWrapDiv,
} from '../../pages/Welcome/WelcomeStyled';
import Carousel from '../welcome/Carousel';

function Welcome6() {
  return (
    <>
      <StBackground>
        <StOverall height="200px">
          <StWrapDiv>
            <StFont fontSize='3rem' marginBottom="100px">
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
