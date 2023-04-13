import React from 'react'
import { StBackground, StFont, StOverall, StSmallFont, StWrapDiv } from './WelcomeStyled'

function Welcome3() {
  return (
    <>
    {/* <StBackground>
        <StColumnDiv>
          <StFont fontSize="38px">업무 트렌드</StFont>
          <StFont>좌율 좌석제</StFont>
          <StFont>👨‍💻</StFont>
          <StSmallFont width="805px" height="148px" left="316px">
            자율좌석제는 기본적으로 퇴근 시 자신이 사용한 자리를 ‘클린데스크’로
            유지해야 하기 때문에 업무상 보안 문제까지 자연스레 해결 과거 팀이나
            직급에 따라 자리를 배치해 독자적이고 수직적이었던 사무실 분위기가
            자율좌석제 도입으로 상호보완적이고, 수평적인 분위기로 변화
          </StSmallFont>
        </StColumnDiv>
      </StBackground> */}

<StBackground>
      <StOverall>
        <StWrapDiv>
      <StFont fontSize="38px">업무 트렌드</StFont>
      <StFont>좌율 좌석제 <br /> 👨‍💻</StFont>

      <StSmallFont>
            자율좌석제는 기본적으로 퇴근 시 자신이 사용한 자리를 ‘클린데스크’로
            유지해야 하기 때문에 업무상 보안 문제까지 자연스레 해결 과거 팀이나
            직급에 따라 자리를 배치해 독자적이고 수직적이었던 사무실 분위기가
            자율좌석제 도입으로 상호보완적이고, 수평적인 분위기로 변화
      </StSmallFont>
  </StWrapDiv>
      </StOverall>
      </StBackground>
</>
  )
}

export default Welcome3