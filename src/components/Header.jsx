import React from 'react';
import { useDispatch } from 'react-redux';
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
          <StHeaderContentBox onClick={onClcikHandelr}>로고다</StHeaderContentBox>
          <StHeaderButtonBox>
            <StHeaderContentBox onClick={() => navi(`/space`)}>
              스페이스
            </StHeaderContentBox>
            <StHeaderContentBox
              onClick={() => navi(`/schedulescalendar/${userId}`)}
            >
              스케줄 등록
            </StHeaderContentBox>
            <StHeaderContentBox
              onClick={() => navi(`/scheduledetail/${userId}`)}
            >
              스케줄 조회
            </StHeaderContentBox>
            <StHeaderContentBox onClick={() => navi(`/detail/${userId}`)}>
              회의실 예약현황
            </StHeaderContentBox>
            <StHeaderContentBox>{`${userName}님 환영합니다`}</StHeaderContentBox>
            <StHeaderContentButtonBox>
              <StHeaderButton type="button" onClick={logout}>
                Logout
              </StHeaderButton>
            </StHeaderContentButtonBox>
          </StHeaderButtonBox>
        </HeaderContain>
      ) : (
        <HeaderContain>
          <StHeaderContentBox onClick={onClcikHandelr}>로고여</StHeaderContentBox>
          <StHeaderContentBox>
            <StHeaderContentBox onClick={() => navi(`/`)}>
              서비스 소개
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
