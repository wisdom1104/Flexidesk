import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  StBackground,
  StBlueButton,
  StButtonGap,
  StColumnDiv,
  StFont,
  StIntroDiv,
  StIntroPhoto,
  StIntroWrite,
  StSmallFont,
  StSpacePhoto,
} from './WelcomeStyled';

function Welcome() {
  const navi = useNavigate();

  return (
    <>
      {/* 1page */}
      <StBackground>
        <StColumnDiv>
          <StSmallFont>
            취업을 넘어, 10년 뒤에도 살아남는 개발자로 턱걸이로 취업하는 것은
            우리의 목표가 아닙니다. 자유롭게 커리어를 이어나갈 수 있도록 최고의
            교육을 제공합니다. 항해99는 다릅니다.
          </StSmallFont>
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
{/* ////////////////////////////////////////////////////////////////////////////////////// */}
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

{/* ////////////////////////////////////////////////////////////////////////////////////// */}
    <StBackground>
        <StColumnDiv>
          <StFont fontSize="38px">업무 트렌드</StFont>
          <StFont>좌율 좌석제</StFont>
          <StFont>👨‍💻</StFont>
          <StSmallFont width="805px" height="148px" left="316px" top="1862px">
            자율좌석제는 기본적으로 퇴근 시 자신이 사용한 자리를 ‘클린데스크’로
            유지해야 하기 때문에 업무상 보안 문제까지 자연스레 해결 과거 팀이나
            직급에 따라 자리를 배치해 독자적이고 수직적이었던 사무실 분위기가
            자율좌석제 도입으로 상호보완적이고, 수평적인 분위기로 변화
          </StSmallFont>
        </StColumnDiv>
      </StBackground>

{/* ////////////////////////////////////////////////////////////////////////////////////// */}

      <StBackground background="#07133B">
        <StFont color="#fff">Why flexidesk?</StFont>
        <StIntroDiv>
          <StIntroPhoto>사진</StIntroPhoto>
          <StIntroWrite>글</StIntroWrite>
        </StIntroDiv>
        {/* 
        <StIntroDiv>
            <StIntroPhoto>사진</StIntroPhoto>
            <StIntroWrite>글</StIntroWrite>
        </StIntroDiv>

        <StIntroDiv>
            <StIntroPhoto>사진</StIntroPhoto>
            <StIntroWrite>글</StIntroWrite>
        </StIntroDiv> */}
      </StBackground>

{/* ////////////////////////////////////////////////////////////////////////////////////// */}

      <StBackground background="#fff">
        <StFont>
          이제, 새로운 Flexidesk를 <br /> 시작할 시간입니다.
        </StFont>
      </StBackground>

      <StBackground background="#fff">
        <StColumnDiv>
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
            <StSmallFont align="start" width="412px" height="36px">
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
            <StFont align="end" width="1280px" height="144px">
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

{/* ////////////////////////////////////////////////////////////////////////////////////// */}

      <StBackground>
        <StFont>Flexidesk는 회사생활을 어떻게 쉽게 만들어주나요?</StFont>
        {/* 캐러셀 구현 */}
      </StBackground>

      <StBackground background="#fff">
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

      {/* 푸터 */}
    </>
  );
}

export default Welcome;
