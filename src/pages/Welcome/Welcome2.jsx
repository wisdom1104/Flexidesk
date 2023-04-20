import React from 'react';
import { StFont, StSmallFont, StOverall, StWrapDiv } from './WelcomeStyled';

function Welcome2() {
  return (
    <>
      <StOverall>
        <StWrapDiv>
          <div>
            <StFont>🤔</StFont> <br />
            <StFont>
              이런 고민을 하고 있다면, <br /> Flexidesk를 시작하세요!
            </StFont>
            <StSmallFont marginTop="15px" color="--darkblue" weight="700">
              내가 일할 자리 내가 자유롭게 정하고 싶다.
            </StSmallFont>
            <StSmallFont
              marginTop="15px"
              color="rgba(49, 69, 99, 0.8)"
              weight="700"
            >
              회의실 사용 겹치지 않도록 미리 예약하고 싶다.
            </StSmallFont>
            <StSmallFont
              marginTop="15px"
              color="rgba(49, 69, 99, 0.6);"
              weight="700"
            >
              내 스케줄을 다른 사람들과 쉽게 공유하고 싶다.
            </StSmallFont>
          </div>
        </StWrapDiv>
      </StOverall>
    </>
  );
}

export default Welcome2;
