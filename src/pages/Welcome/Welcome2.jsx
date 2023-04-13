import React from 'react';
import {
  StBackground,
  StColumnDiv,
  StFont,
  StSmallFont,
  StGrid,
} from './WelcomeStyled';

function Welcome2() {
  return (
    <>
      <StBackground background="#fff">
        <StGrid>
          <StColumnDiv>
            <StFont height='40%'>
              🤔 <br /> 이런 고민을 하고 있다면, Flexidesk를 시작하세요!
            </StFont>
            
            <StSmallFont width="805px">
              사장님이 어디갔는지 모르겠다면 내 선배가 어디갔는지 모르겠다면 내
              후배가 어디갔는지 모르겠다면 Flexidesk을 사용해보세요
            </StSmallFont>
          </StColumnDiv>
        </StGrid>
      </StBackground>
    </>
  );
}

export default Welcome2;
