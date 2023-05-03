import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../shared/cookies';
import {
  HeaderContain,
  StHeaderContentBox,
  StHeaderLogo,
  StHaderFont,
  StHeaderContentButtonBox,
  StHeaderButton,
  StHeaderButtonBox,
} from '../HeaderStyled';

export const LogoutHeader = ({ onClickHomeHandler, logout }) => {
  const navi = useNavigate();
  const userId = getCookie('userId');
  const userName = getCookie('username');

  return (
    <HeaderContain>
      <StHeaderContentBox>
        <StHeaderLogo
          src={`${process.env.PUBLIC_URL}/img/logo2.png`}
          alt="logo"
          onClick={onClickHomeHandler}
        />
      </StHeaderContentBox>
      <StHeaderButtonBox>
        <StHeaderContentBox onClick={() => navi(`/space`)}>
          <StHaderFont>스페이스</StHaderFont>
        </StHeaderContentBox>
        <StHeaderContentBox
          onClick={() => navi(`/schedulescalendar/${userId}`)}
        >
          <StHaderFont>스케줄 등록</StHaderFont>
        </StHeaderContentBox>
        <StHeaderContentBox onClick={() => navi(`/scheduledetail/${userId}`)}>
          <StHaderFont>스케줄 조회</StHaderFont>
        </StHeaderContentBox>
        <StHeaderContentBox onClick={() => navi(`/detail/${userId}`)}>
          <StHaderFont>회의실 예약현황</StHaderFont>
        </StHeaderContentBox>
        <StHeaderContentBox onClick={() => navi('/management')}>
          <StHaderFont>{`${userName}님 환영합니다`}</StHaderFont>
        </StHeaderContentBox>
        <StHeaderContentButtonBox>
          <StHeaderButton type="button" onClick={logout}>
            Logout
          </StHeaderButton>
        </StHeaderContentButtonBox>
      </StHeaderButtonBox>
    </HeaderContain>
  );
};
