import React from 'react'
import { StBackground, StBlueButton, StButtonGap, StColumnDiv, StFont, StGrid } from './WelcomeStyled';
import { useNavigate } from 'react-router-dom';

function Welcome7() {
    const navi = useNavigate();

  return (
    <>
    <StBackground>
      <StColumnDiv>
          <StFont>
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
        </StColumnDiv>
      </StBackground>
    </>
  )
}

export default Welcome7