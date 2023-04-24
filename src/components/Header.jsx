import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
import Modal from '../features/Modal';


function Header() {

  const [isModal, setIsModal] = useState(false);

  const [loginTime, setLoginTime] = useState(Date.now());
  const [expirationTime, setExpirationTime] = useState(loginTime + 3600000); // 토큰 만료 시간은 로그인 시간으로부터 1시간 후로 설정

  const navi = useNavigate();

  const userName = cookies.get('username');
  const userId = cookies.get('userId');

  const logout = () => {
    // dispatch(isLoginActions.logout());
    setLoginTime(null);
    setExpirationTime(null);
    setIsModal(true);
  };

  const onClcikHandelr = () => {
    navi('/');
  };

  useEffect(
    () => {
      const timerId = setInterval(() => {
        if (expirationTime && Date.now() > expirationTime) {
          logout();
        }
      }, 1000);
      return () => clearInterval(timerId);
    },
    [expirationTime]
  );

  const location = useLocation();

  if (
    location.pathname === '/login' ||
    location.pathname === '/signup' ||
    location.pathname === '/signupuser'
  ) {
    return null;
  }

  return (
    <StHeader>
      {cookies.get('token') ? (
        <HeaderContain>
          <StHeaderContentBox>
            <StHeaderLogo
              src="img/Logo.png"
              alt="logo"
              onClick={onClcikHandelr}
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
            <StHeaderLogo
              src="img/Logo.png"
              alt="logo"
              onClick={onClcikHandelr}
            />
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
      {isModal && (
        <Modal
          setIsModal={setIsModal}
        ></Modal>
      )}
    </StHeader>
  );
}


const StHeader = styled.div`
  height: 6vh;
  width: 99%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export default Header;
