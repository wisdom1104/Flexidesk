import React, { useEffect, useState } from 'react';
import { Input } from '../../components/Input';
import { cookies } from '../../shared/cookies';
import { useNavigate } from 'react-router-dom';
import api from '../../axios/api';
import useTrueHook from '../../hooks/useTrueHook';
import CertificationCkeck from '../user/CertificationCkeck';
import {
  StBackground,
  StForm,
  StFormBox,
  StLoginForm,
  StLongButton,
  StOverall,
  StTextInput,
} from './UserStyled';
import { StFont, StSmallFont } from '../Welcome/WelcomeStyled';

function SignUpUser() {
  // maxlength 설정

  // 가드
  useTrueHook();

  const [user, setUser] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    userName: '',
    certification: '',
  });

  const onChangeHandler = e => {
    const { value, name } = e.target;
    setUser(old => {
      return { ...old, [name]: value };
    });
  };

  const navi = useNavigate();

  const submitBtnHandler = async e => {
    e.preventDefault();
    try {
      const response = await api.post('/users/signup/user', user);
      alert(`${user.userName}님 회원가입을 축하합니다.`);
      navi('/login');
      return response;
    } catch (error) {
      const errorMsg = error.response.data.message;
      alert(`${errorMsg}`);
      return error;
    }
  };

  return (
    <>
      <StBackground>
        <StOverall height="1000px">
          <div
            style={{
              marginTop: '100px',
            }}
          >
            <StLoginForm onSubmit={submitBtnHandler} height="750px">
              <StForm height="750px">
                <StFormBox>
                  <StFont align="start" fontSize="28px">
                    회원가입
                  </StFont>

                  <StTextInput>
                    <StSmallFont
                      width
                      align="start"
                      fontSize="0.875rem"
                      weight="700"
                    >
                      이메일
                    </StSmallFont>
                    <Input
                      type="email"
                      value={user.email || ''}
                      onChange={onChangeHandler}
                      name="email"
                      placeholder="이메일을 입력하세요."
                      required
                    />
                  </StTextInput>

                  <StTextInput>
                    <CertificationCkeck
                      certification={user.certification}
                      onChange={onChangeHandler}
                      user={user}
                      setUser={setUser}
                    />
                  </StTextInput>

                  <StTextInput>
                    <StSmallFont
                      width
                      align="start"
                      fontSize="0.875rem"
                      weight="700"
                    >
                      비밀번호
                    </StSmallFont>
                    <Input
                      type="password"
                      value={user.password || ''}
                      onChange={onChangeHandler}
                      name="password"
                      placeholder="비밀번호를 입력하세요."
                      required
                    />
                  </StTextInput>

                  <StTextInput>
                    <StSmallFont
                      width
                      align="start"
                      fontSize="0.875rem"
                      weight="700"
                    >
                      비밀번호 확인
                    </StSmallFont>
                    <Input
                      type="password"
                      value={user.passwordCheck || ''}
                      onChange={onChangeHandler}
                      name="passwordCheck"
                      placeholder="비밀번호를 한번 더 입력해주세요."
                      required
                    />
                  </StTextInput>

                  <StTextInput>
                    <StSmallFont
                      width
                      align="start"
                      fontSize="0.875rem"
                      weight="700"
                    >
                      이름
                    </StSmallFont>
                    <Input
                      type="text"
                      value={user.userName || ''}
                      onChange={onChangeHandler}
                      name="userName"
                      placeholder="사용하실 이름을 입력하세요."
                      required
                    />
                  </StTextInput>

                  <StLongButton type="submit">시작하기</StLongButton>
                </StFormBox>
              </StForm>
            </StLoginForm>
          </div>
        </StOverall>
      </StBackground>
    </>
  );
}

export default SignUpUser;
