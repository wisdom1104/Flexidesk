import React from 'react';
import { StBackground, StFont, StOverall, StfontA } from './WelcomeStyled';
import { useNavigate } from 'react-router-dom';
import { StWrapDiv } from './WelcomeStyled';

function Welcome7() {
  const navi = useNavigate();

  return (
    <>
      {/* 방법1 */}
      {/* 
      <StBackground background="#fff">
        <StOverall>
          <StWrapDiv>
            <StFont 
            marginBottom='100px'
            >
              간단한 회원가입으로 Flexidesk의 솔루션 만나보세요.
            </StFont>
            
            <StButtonGap>
              <StBlueButton
                onClick={() => {
                  navi('/signupuser');
                }}
              >
                일반 회원가입
              </StBlueButton>

              <StBlueButton
                onClick={() => {
                  navi('/signup');
                }}
              >
                관리자 회원가입
              </StBlueButton>
            </StButtonGap>
          </StWrapDiv>
        </StOverall>
      </StBackground> */}

      {/* 방법2 */}
      <StBackground background="#fff">
        <StOverall height='40vw'>
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
