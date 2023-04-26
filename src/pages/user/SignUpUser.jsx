import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { Input } from '../../components/Input';
import useTrueHook from '../../hooks/useTrueHook';
import CertificationCkeck from './CertificationCkeck';
import api from '../../axios/api';

function SignUpUser() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    username: '',
    certification: '',
  });

  const [passwordError, setPasswordError] = useState('');
  const [passwordCheckError, setPasswordCheckError] = useState('');
  const [emailError, setEmailError] = useState('');

  const navi = useNavigate();

  // 가드
  useTrueHook();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailChange = event => {
    const value = event.target.value;
    setUser(prevState => ({ ...prevState, email: value }));

    if (!emailRegex.test(value)) {
      setEmailError('올바른 이메일 형식이 아닙니다.');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = event => {
    const value = event.target.value;
    setUser(prevState => ({ ...prevState, password: value }));

    if (value.length < 8) {
      setPasswordError('비밀번호는 최소 8자 이상이어야 합니다.');
    } else {
      setPasswordError('');
    }
  };

  const handlepasswordCheckChange = event => {
    const value = event.target.value;
    setUser(prevState => ({ ...prevState, passwordCheck: value }));

    if (value !== user.password) {
      setPasswordCheckError('비밀번호와 일치하지 않습니다.');
    } else {
      setPasswordCheckError('');
    }
  };

  const submitBtnHandler = async e => {
    e.preventDefault();
    try {
      const response = await api.post('/users/signup/user', user);
      console.log('response',response)

      alert(`${user.username}님 회원가입을 축하합니다.`);
      navi('/login');
      return response;
    } catch (error) {
      const errorMsg = error.response.data.message;
      alert(`${errorMsg}`);
      return error;
    }
  };

  return (
    <StBackground height='100vh'>
      <StOverall>
        <div
          style={{
            marginTop: '200px',
            display: 'flex',
            alignItems: 'center',
            height: '100%'
          }}
        >
          <StLoginForm onSubmit={submitBtnHandler} height="570px">
            <StForm>
              <StFormBox>
                <StFont width='100%' align="start" fontSize="28px">
                  회원가입
                </StFont>

                <StTextInput>
                  <StSmallFont
                    width
                    align="start"
                    fontSize="0.875rem"
                    weight="700"
                    marginTop="10px"
                  >
                    사용자 이름
                  </StSmallFont>
                  <Input
                    type="text"
                    value={user.username}
                    onChange={event =>
                      setUser({ ...user, username: event.target.value })
                    }
                    placeholder="이름을 입력하세요."
                    required
                  />
                </StTextInput>
                <StTextInput marginTop='20px'>
                  <StSmallFont
                    width
                    align="start"
                    fontSize="0.875rem"
                    weight="700"
                  >
                    사용자 이메일
                  </StSmallFont>

                  <Input
                    type="email"
                    value={user.email}
                    onChange={handleEmailChange}
                    name="email"
                    placeholder="이메일을 입력하세요."
                    required
                  />
                </StTextInput>

                <StTextInput height="80px">
                  <CertificationCkeck
                    user={user}
                    certification={user.certification}
                    onChange={event =>
                      setUser({ ...user, certification: event.target.value })
                    }
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
                    value={user.password}
                    onChange={handlePasswordChange}
                    placeholder="영문, 숫자, 특수문자를 조합하여 입력하세요.(8~16자)"
                    required
                    minlength="8"
                    maxlength="16"
                  />
                </StTextInput>
                {passwordError && (
                  <StSmallFont
                    width="420px"
                      align="start"
                      fontSize="0.875rem"
                      weight="400"
                      color="red"
                  >
                    {passwordError}
                  </StSmallFont>
                )}

                <StTextInput height="45px">
                  <Input
                    type="password"
                    value={user.passwordCheck}
                    onChange={handlepasswordCheckChange}
                    placeholder="비밀번호 확인을 위해 한번 더 입력하세요."
                    required
                    minlength="8"
                    maxlength="16"
                  />
                </StTextInput>
                {passwordCheckError && (
                  <StSmallFont
                     width="420px"
                      align="start"
                      fontSize="0.875rem"
                      weight="400"
                      color="red"
                  >
                    {passwordCheckError}
                  </StSmallFont>
                )}

                <div
                  style={{
                    marginTop: '20px',
                  }}
                >
                  <StLongButton type="submit">확인</StLongButton>
                </div>
              </StFormBox>
            </StForm>
          </StLoginForm>
        </div>
      </StOverall>
    </StBackground>
  );
}

export default SignUpUser;
