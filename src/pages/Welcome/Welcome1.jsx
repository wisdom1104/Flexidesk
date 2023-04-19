import React from 'react'
import { StBackground, StBlueButton, StButtonGap, StGradationBackground, StOverall, StSmallFont, StWrapDiv } from './WelcomeStyled';
import { useNavigate } from 'react-router-dom';
import Welcome2 from './Welcome2';

function Welcome1() {
    const navi = useNavigate();

  return (
    <>
      <StGradationBackground id='signup'>
    <StOverall height='44vw'>
      <StWrapDiv>
    <StSmallFont>
            취업을 넘어, 10년 뒤에도 살아남는 개발자로 턱걸이로 취업하는 것은
            우리의 목표가 아닙니다. 자유롭게 커리어를 이어나갈 수 있도록 최고의
            교육을 제공합니다. 항해99는 다릅니다.
          </StSmallFont> <br/>

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
    <Welcome2 />
    </StGradationBackground>

    </>
  )
}

export default Welcome1

