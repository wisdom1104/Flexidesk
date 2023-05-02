import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getCookie } from '../shared/cookies';
import {
  HeaderContain,
  StHeaderButtonBox,
  StHeaderContentBox,
  StHeaderContentButtonBox,
  StHeaderButton,
  StHeaderLogo,
  StHaderFont,
} from './HeaderStyled';
import Modal from '../components/Modal';
import { useDispatch } from 'react-redux';
import { isLoginActions } from '../redux/modules/loginSlice';

function Header() {
  const [isModal, setIsModal] = useState(false);

  const [loginTime, setLoginTime] = useState(Date.now()); //현재시간을 나타냄
  const [expirationTime, setExpirationTime] = useState(loginTime + 7200000); // 토큰 만료 시간은 로그인 시간으로부터 2시간 후로 설정

  const navi = useNavigate();
  const dispatch = useDispatch();
//전역적으로 사용 , 훅일까?
  const token = getCookie('token');
  const userName = getCookie('username');
  const userId = getCookie('userId');
  //로그아웃 시 모달을 띄워주는 '상태'
  const logout = () => {
    setLoginTime(null);
    setExpirationTime(null);
    setIsModal(true);
  };
//시간이 지나면 토큰을 제거하고 페이지 이동(그려지는 행위)을 나타내는 '상태'
const tokenLogout = () => {
    dispatch(isLoginActions.logout());
    setLoginTime(null);
    setExpirationTime(null);
    navi('/');
  };
//삭제 버튼 -> 서버와 통신하여 로그아웃되는 '상태'
  const handleLogout = () => {
    dispatch(isLoginActions.logout());
  };
//
  const onClcikHandelr = () => {
    navi('/');
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      if (expirationTime && Date.now() > expirationTime) {
        tokenLogout();
      }
    }, 1000);
    return () => clearInterval(timerId);
  }, [expirationTime]);

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
      {token ? (
        <HeaderContain>
          <StHeaderContentBox>
            <StHeaderLogo
              src={`${process.env.PUBLIC_URL}/img/logo2.png`}
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
      ) : (
        <HeaderContain>
          <StHeaderContentBox>
            <StHeaderLogo
              src={`${process.env.PUBLIC_URL}/img/logo2.png`}
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
          modalTitle="로그아웃 하시겠습니까?"
          onButtonClick={handleLogout}
          redirectPath="/"
        ></Modal>
      )}
    </StHeader>
  );
}

const StHeader = styled.div`
  height: 6vh;
  max-width: 1200px;
  min-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
`;

export default Header;
