import React from 'react';
import { Input } from '../../components/Input';
import { cookies } from '../../shared/cookies';
import { useNavigate } from 'react-router-dom';
import api from '../../axios/api';
import jwt_decode from 'jwt-decode';
import useTrueHook from '../../hooks/user/useTrueHook';
import {
  StBackground,
  StForm,
  StFormBox,
  StLink,
  StLoginInputIconBox,
  StLoginForm,
  StLoginIcon,
  StLoginIconDiv,
  StLongButton,
  StOverall,
  StLoginContain,
} from './UserStyled';
import { Row } from '../../components/Flex';
import { StFont, StSmallFont } from '../Welcome/WelcomeStyled';
import { useState } from 'react';
import ValidationError from '../../components/form/ValidationError';
import { AuthFormValidation } from '../../hooks/user/useAuthFormValidation';

function Login() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const { auth, handleEmailChange, handlePasswordChange } = AuthFormValidation(
    login,
    setLogin,
  );

  const [isError, setIsError] = useState(false);

  useTrueHook();

  const navi = useNavigate();

  const onsubmitHandler = async e => {
    e.preventDefault();
    try {
      const response = await api.post('/users/login', login);
      const token = response.headers.authorization;
      const refreshToken = response.headers.refresh_token;
      const payload = jwt_decode(token);

      // cookies에 저장////////////////////////////////////////////////////////////////////////////////////////////////////////////
      cookies.set('token', token.split(' ')[1], { path: '/', maxAge: 3540 });
      cookies.set('refresh_token', refreshToken.split(' ')[1], {
        path: '/',
        // maxAge: 3540,
      });
      cookies.set('userId', payload.userId, { path: '/', maxAge: 3540 });
      cookies.set('companyName', String(payload.companyName), {
        path: '/',
        maxAge: 3540,
      });
      cookies.set('username', String(payload.username), {
        path: '/',
        maxAge: 3540,
      });
      cookies.set('role', payload.role, { path: '/', maxAge: 3540 });
      // cookies에 저장////////////////////////////////////////////////////////////////////////////////////////////////////////////
      navi('/adminspace');
    } catch (error) {
      setIsError(true);
      return error;
    }
  };

  return (
    <StBackground height="100vh">
      <StOverall>
        <StLoginContain>
          <StLoginForm onSubmit={onsubmitHandler} width="420px">
            <StForm>
              <StFormBox>
                <StFont width="100%" align="start" fontSize="28px">
                  로그인
                </StFont>

                <StSmallFont
                  width="100%"
                  align="start"
                  fontSize="1rem"
                  marginTop="10px"
                >
                  이메일 주소와 비밀번호를 입력해주세요.
                </StSmallFont>
              </StFormBox>

              <StLoginInputIconBox>
                <StLoginIconDiv>
                  <StLoginIcon
                    src={`${process.env.PUBLIC_URL}/img/loginIcon3.png`}
                    alt="loginIcon3"
                  />
                </StLoginIconDiv>

                <Input
                  type="email"
                  value={auth.email}
                  onChange={handleEmailChange}
                  name="email"
                  placeholder="이메일"
                  required
                  border="none"
                />
              </StLoginInputIconBox>

              <StLoginInputIconBox>
                <StLoginIconDiv>
                  <StLoginIcon
                    src={`${process.env.PUBLIC_URL}/img/loginIcon4.png`}
                    alt="loginIcon4"
                  />
                </StLoginIconDiv>
                <Input
                  type="password"
                  value={auth.password}
                  onChange={handlePasswordChange}
                  name="password"
                  placeholder="비밀번호"
                  required
                  border="none"
                />
              </StLoginInputIconBox>

              <ValidationError value={isError} />

              <StLongButton> 로그인 </StLongButton>
              <Row>
                <StLink to={'/signup'}> 관리자 회원가입 </StLink>
                <StLink to={'/signupuser'}> 일반 회원가입 </StLink>
              </Row>
            </StForm>
          </StLoginForm>
        </StLoginContain>
      </StOverall>
    </StBackground>
  );
}

export default Login;
