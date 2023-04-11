import React from 'react'
import { StBackground, StColumnDiv, StFont, StSmallFont } from './WelcomeStyled'

function Welcome2() {
  return (
    <>
          <StBackground background="#fff">
        <StColumnDiv>
          <StFont>🤔</StFont>

          <StFont>이런 고민을 하고 있다면, Flexidesk를 시작하세요!</StFont>

          <StSmallFont>
            사장님이 어디갔는지 모르겠다면 내 선배가 어디갔는지 모르겠다면 내
            후배가 어디갔는지 모르곘다면 Flexidesk을 사용해보세요
          </StSmallFont>
        </StColumnDiv>
      </StBackground>
    </>
  )
}

export default Welcome2