import React from 'react'
import { StBackground, StFont, StOverall, StSmallFont, StSpaceDiv, StSpacePhoto } from './WelcomeStyled'

function Welcome5() {
  return (
    <>
      <StBackground background="#fff" height='3030px'>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
          >
        <StFont 
        color="#383838"
        padding='100px'
        >
        이제, 새로운 Flexidesk를 <br /> 시작할 시간입니다.
        </StFont>
        </div>

      <StOverall>
        <div>
          <StSpaceDiv>
          <StSmallFont
              color="#ACDAD8"
              weight="700"
              align="start"
              width="100%"
            >
              스케줄
            </StSmallFont>
            <StFont align="start">내 스케줄 관리도 한번에</StFont>
            <StSmallFont 
            align="start"
            width="100%"
            >
              근무 일정과 연동되는 스케줄
            </StSmallFont>
            <StSpacePhoto>사진</StSpacePhoto>
          </StSpaceDiv>

          <StSpaceDiv>
              <StSmallFont
                color="#ACDAD8"
                weight="700"
                align="end"
                width="100%"
              >
                스케줄
              </StSmallFont>
              <StFont 
              align="end"
              width="100%"
              >내 스케줄 관리도 한번에</StFont>
              <StSmallFont 
              align="end"
              width="100%"
              >
                근무 일정과 연동되는 스케줄
              </StSmallFont>
              <StSpacePhoto>사진</StSpacePhoto>
          </StSpaceDiv>

          <StSpaceDiv>
            <StSmallFont
              color="#ACDAD8"
              weight="700"
              align="start"
              width="100%"
            >
              스케줄
            </StSmallFont>
            <StFont 
            align="start"
            
            >내 스케줄 관리도 한번에</StFont>
            <StSmallFont 
            align="start"
            width="100%"
            >
              근무 일정과 연동되는 스케줄
            </StSmallFont>
            <StSpacePhoto>사진</StSpacePhoto>
        </StSpaceDiv>
        
      </div>
      </StOverall>
      </StBackground>
    </>
  )
};

export default Welcome5