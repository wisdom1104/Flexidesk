import React, { useEffect, useState } from 'react';
import { Input } from '../../components/Input';
import { cookies } from '../../shared/cookies';
import { useNavigate } from 'react-router-dom';
import api from '../../axios/api';
import { useDispatch } from 'react-redux';
import jwt_decode from 'jwt-decode';
import useTrueHook from '../../hooks/useTrueHook';
import {
  StBackground,
  StForm,
  StFormBox,
  StLoginForm,
  StLongButton,
  StOverall,
} from './UserStyled';
import { StFont, StSmallFont } from '../Welcome/WelcomeStyled';
import {
  useValidEmail,
  useValidPassword,
  usePasswordCheck,
  useSignUp,
} from '../../hooks/useSignUpHook';

function Login() {
  const [user, setUser, onSubmitHandler] = useSignUp('');

  const [emailMsg, validEmail] = useValidEmail();
  const [passwordMsg, validPassword] = useValidPassword();
  const [passwordCheckMsg, validPasswordCheck] = usePasswordCheck();

  const onChangeHandler = e => {
    const { value, name } = e.target;
    setUser(old => {
      return { ...old, [name]: value };
    });
  };

  const navi = useNavigate();

  const onsubmitHandler = async e => {
    e.preventDefault();
    try {
      const response = await api.post('/users/login', user);
      const token = response.headers.authorization;
      const newtoken = token.split(' ')[1];
      const payload = jwt_decode(newtoken);

      cookies.set('token', newtoken, { path: '/', maxAge: 3540 });
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

      navi('/adminspace');
    } catch (e) {
      const errorMsg = e.response.data.message;
      alert(`${errorMsg}`);
    }
  };

  return (
    <StBackground>
      <StOverall>
        <div
          style={{
            marginTop: '100px',
          }}
        >
          <StLoginForm onSubmit={onsubmitHandler}>
            <StForm>
              <StFormBox>
                <StFont align="start" fontSize="28px">
                  로그인
                </StFont>
                <StSmallFont align="start" fontSize="1rem">
                  이메일 주소와 비밀번호를 입력해주세요.
                </StSmallFont>
              </StFormBox>

              <Input
                type="email"
                value={user.email || ''}
                onChange={e => {
                  validEmail(e);
                  setUser({ ...user, email: e.target.value });
                }}
                name="email"
                placeholder="이메일"
                required
              />

              <Input
                type="password"
                value={user.password || ''}
                onChange={onChangeHandler}
                name="password"
                placeholder="비밀번호"
                required
              />
              <StLongButton> 로그인 </StLongButton>
            </StForm>
          </StLoginForm>
        </div>
      </StOverall>
    </StBackground>
  );
}

export default Login;
