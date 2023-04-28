import React from 'react';
import {
  StBackground,
  StFont,
  StIntroDiv,
  StOverall,
  StSmallFont,
  StWrapDiv,
} from '../../pages/Welcome/WelcomeStyled';

function Welcome3() {
  return (
    <>
      <StBackground>
        <StOverall height="1000px">
          <StWrapDiv>
            <StIntroDiv>
              <div
                style={{
                  width: '35vw',
                  display: 'inline-block',
                }}
              >
                <StSmallFont
                  fontSize="2rem"
                  color="#ACDAD8"
                  weight="700"
                  align="start"
                  width="100%"
                  marginBottom='5vw'
                >
                  업무 트렌드
                </StSmallFont>
                <StFont align="start" marginBottom='2vw' >
                  자율 좌석제
                </StFont>

                <StSmallFont weight="600" align="start">
                  팀이나 직급에 따라 자리를 배치해 독자적이고 수직적이었던{' '}
                  <br />
                  사무실 분위기가 자율좌석제 도입으로 <br />
                  상호보완적이고, 수평적인 분위기로 변화합니다.
                </StSmallFont>
              </div>
              {/* 이미지 자리 */}
              <div
                style={{
                  width: '577px',
                  height: '260px',
                  display: 'inline-block',
                }}
              >
                <img src={`${process.env.PUBLIC_URL}/img/welcome2.png`} alt="welcome2" />

              </div>
            </StIntroDiv>
          </StWrapDiv>
        </StOverall>
      </StBackground>
    </>
  );
}

export default Welcome3;
