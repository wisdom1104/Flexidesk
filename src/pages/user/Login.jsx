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
  useSignUp,
} from '../../hooks/useSignUpHook';

function Login() {
  const [user, setUser] = useSignUp({
    email: '',
    password: '',
  });

  const [emailMsg, validEmail] = useValidEmail();

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
      console.log(response.headers);

      const token = response.headers.authorization;
      const payload = jwt_decode(token); 
      console.log(payload);

      cookies.set('authorization', payload, { path: '/', maxAge: 3540 });
      cookies.set('refresh_token', response.headers.refresh_token, { path: '/', maxAge: 3540 });
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


      /////////////////////////////////////////////////////////////////////////////////////

      navi('/adminspace');
    } catch (e) {
      const errorMsg = e.response.data.message;
      alert(`${errorMsg}`);
    }
  };


  const onClickHandler = (e) => {
    e.preventDefault();
    navi('/signup')
  }

  return (
    <StBackground>
      <StOverall>
        <div style={{
        marginTop: '80px'
      }}>

        <StLoginForm 
        onSubmit={onsubmitHandler}
        width='420px'
        >
            <StForm>
              <StFormBox>
            <StFont
              align="start"
              fontSize="28px"
            >
              로그인
            </StFont>
            <StSmallFont 
            align="start" 
            fontSize="1rem"
            marginTop='10px'
            >
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
            <StLongButton onClick={onClickHandler}> 회원가입 </StLongButton>

          </StForm>
        </StLoginForm>      
        </div>
      </StOverall>
    </StBackground>
  );
}

export default Login;
