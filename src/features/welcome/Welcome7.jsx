import React from 'react';
import { StBackground, StFont, StOverall, StfontA, StWrapDiv } from '../../pages/Welcome/WelcomeStyled';

function Welcome7() {

  return (
    <>
      <StBackground background="#fff">
        <StOverall>
          <StWrapDiv>
            <StfontA href="#signup">
              <StFont>
                간단한 회원가입으로 <br /> Flexidesk의 솔루션 만나보세요.
              </StFont>
            </StfontA>
          </StWrapDiv>
        </StOverall>
      </StBackground>
    </>
  );
}

export default Welcome7;
