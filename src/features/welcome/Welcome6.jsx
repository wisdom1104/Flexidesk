import React from 'react';
import { StBackground, StFont, StOverall, StfontA, StWrapDiv, StSpacePagePhoto } from '../../pages/Welcome/WelcomeStyled';

function Welcome6() {

  return (
    <>
      <StBackground background="#fff">
        <StOverall>
          <StWrapDiv>
            <StfontA href="#signup">
              <StFont>
                간단한 회원가입으로 <br /> Flexidesk의 솔루션 만나보세요.
              </StFont>
              <StSpacePagePhoto 
              height='30vh'
              width='1000px'
              
              src={`${process.env.PUBLIC_URL}/img/welcome3.png`} alt="welcome3" />
            </StfontA>
          </StWrapDiv>
        </StOverall>
      </StBackground>
    </>
  );
}

export default Welcome6;
