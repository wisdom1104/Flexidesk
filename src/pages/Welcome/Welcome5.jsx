import React, { useState } from 'react';
import { StBackground, StFont } from './WelcomeStyled';
import { Card } from '../../features/CarouselTest'
import CarouselTest from '../../features/CarouselTest';

function Welcome5() {
  const CARDS = 3;

  const [contents, setContents] = useState([
    { id: 1, content: '회의실 예약' },
    { id: 2, content: '스페이스' },
    { id: 3, content: '스케줄 관리' },
  ]);

  return (
    <>
      <StBackground height='300px'>
        <StFont>Flexidesk는 회사생활을 <br/> 어떻게 쉽게 만들어주나요?</StFont>
        </StBackground>

        <StBackground>
        <CarouselTest>
        {[...new Array(CARDS)].map((_, i) => (
          <div key={contents[i].id}>
            <Card title={'Card ' + (i + 1)} content={contents[i]} />
          </div>
        ))}
      </CarouselTest>
      </StBackground>
    </>
  );
}

export default Welcome5;