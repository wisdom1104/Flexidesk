import React from 'react';
import {
  StBlueButton,
  StButtonGap,
  StFont,
  StGradationBackground,
  StIntroDiv,
  StOverall,
  StSmallFont,
  StWrapDiv,
} from '../../pages/Welcome/WelcomeStyled';
import { useNavigate } from 'react-router-dom';
import Welcome2 from './Welcome2';
import { cookies } from '../../shared/cookies';

function Welcome1() {
  const navi = useNavigate();

  const token = cookies.get('token');

  return (
    <>
      <StGradationBackground id="signup">
        <StOverall>
          <StWrapDiv>
            <StIntroDiv>
              {token ? (
                <>
             <div
             style={{
               width: '35vw',
               height: '25vh',
               display: 'inline-block',
             }}
           >
             <StFont align="start">
               스마트해진 업무공간, <br /> 
               보다 생산적인 업무시간
             </StFont>
             <StSmallFont
               align="start"
               marginBottom="-185px"
               marginTop="65px"
             >
               Flexidesk는 효율적인 자율 좌석제 운영을 위한 업무 위치 선택 및 <br />
               회의실 예약 시스템을 제공합니다
             </StSmallFont>
           </div>

           {/* 이미지 자리 */}
           <div
             style={{
               width: '30vw',
               height: '40vh',
               display: 'inline-block',
             }}
           >
             <img src={`${process.env.PUBLIC_URL}/img/welcome1.png`} alt="welcome1" />

           </div>
           </>

              ):(
                
                <>
                <div
                style={{
                  width: '35vw',
                  height: '35vh',
                  display: 'inline-block',
                }}
              >
                <StFont align="start">
                  스마트해진 업무공간, <br /> 
                  보다 생산적인 업무시간
                </StFont>
                <StSmallFont
                  align="start"
                  marginBottom="-185px"
                  marginTop="85px"
                >
                  Flexidesk는 효율적인 자율 좌석제 운영을 위한 업무 위치 선택 및 <br />
                  회의실 예약 시스템을 제공합니다
                </StSmallFont>
                <br />
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
              </div>

              <div
                style={{
                  width: '30vw',
                  height: '10vh',
                  display: 'inline-block',
                }}
              >
             <img src={`${process.env.PUBLIC_URL}/img/welcome1.png`} alt="welcome1" />

              </div>
              </>
              )}
            </StIntroDiv>
          </StWrapDiv>
        </StOverall>
      <Welcome2 />
      </StGradationBackground>          

    </>
  );
}

export default Welcome1;
