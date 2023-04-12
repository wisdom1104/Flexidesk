import React, { useState } from 'react';
import { StBackground, StFont } from './WelcomeStyled';
import { Card } from '../../features/CarouselTest'
import CarouselTest from '../../features/CarouselTest';

function Welcome5() {

  return (
    <>
      <StBackground height='300px'>
        <StFont>Flexidesk는 회사생활을 <br/> 어떻게 쉽게 만들어주나요?</StFont>
      </StBackground>

      <StBackground>
        <CarouselTest/>
      </StBackground>
    </>
  );
}

export default Welcome5;