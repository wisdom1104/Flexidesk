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
      {/* <div>
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
      </div> */}

      <StBackground background="#fff">
        <StOverall>
          <StWrapDiv>
          <div 
          style={{
            marginTop:'90px',
          }}
          >
          <StFont>
            🤔 <br />
            이런 고민을 하고 있다면, Flexidesk를 시작하세요!
          </StFont>
          </div>

          <StSmallFont>
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
