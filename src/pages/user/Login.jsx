import React, { useEffect, useState } from 'react';
import { Input } from '../../components/Input';
import { cookies } from '../../shared/cookies';
import { useNavigate } from 'react-router-dom';
import api from '../../axios/api';
import { useDispatch } from 'react-redux';
import jwt_decode from 'jwt-decode';
import useTrueHook from '../../hooks/useTrueHook'
import { StBackground, StForm, StFormContainer, StLoginForm, StLongButton } from './UserStyled';
import { StFont, StSmallFont } from '../Welcome/WelcomeStyled';

function Login() {

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const loginChangeHandler = e => {
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

      cookies.set('token', newtoken, { path: '/' , maxAge:3540,});
      cookies.set('userId', payload.id, { path: '/' , maxAge:3540,});
      cookies.set('companyName', String(payload.companyName), { path: '/' , maxAge:3540, });
      cookies.set('role', payload.role, { path: '/' , maxAge:3540,});
      
      navi('/adminspace')

    } catch (e) {
      const errorMsg = e.response.data.message;
      alert(`${errorMsg}`);
    }
  };

  return (
    <StBackground>
      <StFont width='78px' height='34px' align='start' fontSize='28px' >
        로그인
      </StFont>
      <StSmallFont width='480px' height='19px' fontSize='16px'>
      이메일 주소와 비밀번호를 입력해주세요.
      </StSmallFont>
      <StLoginForm onSubmit={onsubmitHandler}>
        <StForm>
        <Input
          type="email"
          value={user.email|| ''}
          onChange={loginChangeHandler}
          name="email"
          placeholder="이메일"
          required
        />

        <Input
          type="password"
          value={user.password|| ''}
          onChange={loginChangeHandler}
          name="password"
          placeholder="비밀번호"
          required
        />
        <StLongButton> 로그인 </StLongButton>
        </StForm>
      </StLoginForm>
    </StBackground>
  );
}

export default Login;
