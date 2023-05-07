import React from 'react';
import { useNavigate } from 'react-router-dom';
import Text from '../Text';
import { BlueBtn } from '../button/BlueBtn';
import {
  HeaderContain,
  StHeaderContentBox,
  StHeaderLogo,
  StHeaderContentButtonBox,
} from './HeaderStyled';

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
          <Text cursor="pointer" shape="T16_700_19">
            서비스 소개
          </Text>
        </StHeaderContentBox>
        <StHeaderContentButtonBox>
          <BlueBtn
            w="80px"
            h="40px"
            type="button"
            onClick={() => navi('/login')}
          >
            LogIn
          </BlueBtn>
        </StHeaderContentButtonBox>
      </StHeaderContentBox>
    </HeaderContain>
  );
};
