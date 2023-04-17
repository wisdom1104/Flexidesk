import React from 'react';
import {
  StBackground,
  StFont,
  StSmallFont,
  StOverall,
  StWrapDiv,
} from './WelcomeStyled';

function Welcome2() {
  return (
    <>
      <StBackground background="#fff">
        <StOverall>
          <StWrapDiv>
          <div 
          style={{
            marginTop:'100px',
          }}
          >
            <StFont>🤔</StFont> <br />

          <StFont>
            이런 고민을 하고 있다면, Flexidesk를 시작하세요!
          </StFont>
          </div>

          <StSmallFont 
          marginBottom='150px'
          >
              사장님이 어디갔는지 모르겠다면 내 선배가 어디갔는지 모르겠다면 내
              후배가 어디갔는지 모르겠다면 Flexidesk을 사용해보세요
          </StSmallFont>
          </StWrapDiv>
        </StOverall>
      </StBackground>
    </>
  );
}

export default Welcome2;
