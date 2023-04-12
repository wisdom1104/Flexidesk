import React from 'react'
import { StBackground, StColumnDiv, StFont, StSmallFont, StSpacePhoto } from './WelcomeStyled'

function Welcome4() {
  return (
    <>
    <StBackground background="#fff" height='300px'>
        <StFont>
          이제, 새로운 Flexidesk를 <br /> 시작할 시간입니다.
        </StFont>
      </StBackground>

      <StBackground background="#fff" height='1987px'>
        <StColumnDiv height>
          <div>
            <StSmallFont
              color="#ACDAD8"
              weight="700"
              align="start"
              width="1280px"
              height="36px"
            >
              스페이스
            </StSmallFont>
            <StFont align="start">업무 공간 이동</StFont>
            <StSmallFont align="start" height="36px">
              회사내에서도 나에게 맞는 공간을 찾아봐요
            </StSmallFont>
          </div>
          <StSpacePhoto>사진</StSpacePhoto>

          <div>
            <StSmallFont
              color="#ACDAD8"
              weight="700"
              align="end"
              width="1280px"
              height="36px"
            >
              회의실 예약
            </StSmallFont>
            <StFont align="end" width="1200px" height="144px">
              간편해진 회의실 예약
            </StFont>
            <StSmallFont align="end" width="1280px" height="36px">
              겹치는 시간은 피하고, 가능한 시간은 찾아줘요
            </StSmallFont>
          </div>
          <StSpacePhoto>사진</StSpacePhoto>

          <div>
            <StSmallFont
              color="#ACDAD8"
              weight="700"
              align="start"
              width="1280px"
              height="36px"
            >
              스케줄
            </StSmallFont>
            <StFont align="start">내 스케줄 관리도 한번에</StFont>
            <StSmallFont align="start" width="412px" height="36px">
              근무 일정과 연동되는 스케줄
            </StSmallFont>
          </div>        
          <StSpacePhoto>사진</StSpacePhoto>
        </StColumnDiv>
      </StBackground>
    </>
  )
};

export default Welcome4