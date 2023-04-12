import React from 'react';
import {
  StBackground,
  StCard,
  StCard2,
  StCard3,
  StColumnDiv,
  StFont,
} from './WelcomeStyled';
import { Card, Carousel } from '../../features/Carousel';
import Slider from '../../features/Slider'
import CarouselTest from '../../features/CarouselTest';

function Welcome5() {
  const CARDS = 3;

  return (
    <>
      <StBackground>
        <StFont>Flexidesk는 회사생활을 어떻게 쉽게 만들어주나요?</StFont>
        </StBackground>

        {/* <CarouselTest>
        {[...new Array(CARDS)].map((_, i) => (
                <Card title={'Card ' + (i + 1)} content="안녕하세요" />
              ))}
        </CarouselTest> */}


        <StColumnDiv direction="row">
        <StCard2/>

          <StCard>
            <Carousel>
              {[...new Array(CARDS)].map((_, i) => (
                <Card title={'Card ' + (i + 1)} content="안녕하세요" />
              ))}
            </Carousel>
          </StCard>

          <StCard3/> 

          {/* <StCard2>
            <Carousel>
              {[...new Array(CARDS)].map((_, i) => (
                <Card title={'Card ' + (i + 1)} content="안녕하세요" />
              ))}
            </Carousel>
          </StCard2> 

           <StCard3>
            <Carousel>
              {[...new Array(CARDS)].map((_, i) => (
                <Card title={'Card ' + (i + 1)} content="안녕하세요" />
              ))}
            </Carousel>
          </StCard3> */}
        </StColumnDiv>
    </>
  );
}

export default Welcome5;
