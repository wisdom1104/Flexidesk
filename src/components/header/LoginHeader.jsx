import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HeaderContain,
  StHeaderContentBox,
  StHeaderLogo,
  StHaderFont,
  StHeaderContentButtonBox,
  StHeaderButton,
} from '../HeaderStyled';

export const LoginHeader = ({ onClickHomeHandler }) => {
  const navi = useNavigate();

  return (
    <HeaderContain>
      <StHeaderContentBox>
        <StHeaderLogo
          src={`${process.env.PUBLIC_URL}/img/logo2.png`}
          alt="logo"
          onClick={onClickHomeHandler}
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
  );
};
