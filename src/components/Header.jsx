import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { isLoginActions } from '../redux/modules/loginSlice';
import { cookies } from '../shared/cookies';
import {
  HeaderContain,
  StHeaderButtonBox,
  StHeaderContentBox,
  StHeaderContentButtonBox,
  StHeaderButton,
  StHeaderLogo,
  StHaderFont,
} from './HeaderStyled';

function Header() {
  const dispatch = useDispatch();
  const navi = useNavigate();

  const userName = cookies.get('username');
  const userId = cookies.get('userId');

  const logout = () => {
    dispatch(isLoginActions.logout());
    alert('로그아웃 되었습니다.');
    navi('/login');
  };

  const onClcikHandelr = () => {
    navi('/')
  };


  return (
    <StHeader>
      {cookies.get('token') ? (
        <HeaderContain>
          <StHeaderContentBox>
            <StHeaderLogo src="img/Logo.png" alt="logo" onClick={onClcikHandelr} />
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
            <StHeaderContentBox
              onClick={() => navi(`/scheduledetail/${userId}`)}
            >
              <StHaderFont>스케줄 조회</StHaderFont>
            </StHeaderContentBox>
            <StHeaderContentBox onClick={() => navi(`/detail/${userId}`)}>
            <StHaderFont>회의실 예약현황</StHaderFont>
            </StHeaderContentBox>
            <StHeaderContentBox>
            <StHaderFont>{`${userName}님 환영합니다`}</StHaderFont>
            </StHeaderContentBox>
            <StHeaderContentButtonBox>
              <StHeaderButton type="button" onClick={logout}>
              Logout
              </StHeaderButton>
            </StHeaderContentButtonBox>
          </StHeaderButtonBox>
        </HeaderContain>
      ) : (
        <HeaderContain>
          <StHeaderContentBox>
          <StHeaderLogo src="img/Logo.png" alt="logo" onClick={onClcikHandelr} />
          </StHeaderContentBox>
          <StHeaderContentBox>
            <StHeaderContentBox onClick={() => navi(`/`)}>
            <StHaderFont>서비스 소개</StHaderFont>
            </StHeaderContentBox>
            <StHeaderContentButtonBox>
              <StHeaderButton type="button" onClick={() => navi('/login')}>
                LogIn
              </StHeaderButton>
            </StHeaderContentButtonBox>
          </StHeaderContentBox>
        </HeaderContain>
      )}
    </StHeader>
  );
}

const StHeader = styled.div`
  height: 6vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export default Header;
