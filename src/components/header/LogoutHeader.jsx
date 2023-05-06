import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../shared/cookies';
import {
  HeaderContain,
  StHeaderContentBox,
  StHeaderLogo,
  StHeaderContentButtonBox,
  StHeaderButtonBox,
} from './HeaderStyled';
import { BlueBtn } from '../button/BlueBtn';
import Text from '../Text';

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
          <Text shape="T16_700_19">스페이스</Text>
        </StHeaderContentBox>
        <StHeaderContentBox
          onClick={() => navi(`/schedulescalendar/${userId}`)}
        >
          <Text shape="T16_700_19">스케줄 등록</Text>
        </StHeaderContentBox>
        <StHeaderContentBox onClick={() => navi(`/scheduledetail/${userId}`)}>
          <Text shape="T16_700_19">스케줄 조회</Text>
        </StHeaderContentBox>
        <StHeaderContentBox onClick={() => navi(`/detail/${userId}`)}>
          <Text shape="T16_700_19">회의실 예약현황</Text>
        </StHeaderContentBox>
        <StHeaderContentBox onClick={() => navi('/management')}>
          <Text shape="T16_700_19">{`${userName}님 환영합니다`}</Text>
        </StHeaderContentBox>
        <StHeaderContentButtonBox>
          <BlueBtn w="80px" h="40px" type="button" onClick={logout}>
            Logout
          </BlueBtn>
        </StHeaderContentButtonBox>
      </StHeaderButtonBox>
    </HeaderContain>
  );
};
