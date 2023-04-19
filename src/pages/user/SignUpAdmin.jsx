import React, { useState } from 'react';
import api from '../../axios/api';
import { useNavigate } from 'react-router-dom';
import {
  StBackground,
  StForm,
  StFormBox,
  StLoginForm,
  StLongButton,
  StOverall,
  StTextInput,
  SterrorFont,
} from './UserStyled';
import { StFont, StSmallFont } from '../Welcome/WelcomeStyled';
import { Input } from '../../components/Input';
import Certification from './Certification';
import useTrueHook from '../../hooks/useTrueHook';

function SignUpAdmin() {
  const [admin, setAdmin] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    username: '',
    companyName: '',
    certification: '',
  });

  const [passwordError, setPasswordError] = useState('');
  const [passwordCheckError, setPasswordCheckError] = useState('');

    // 가드
    useTrueHook();

  const navi = useNavigate();

  const handlePasswordChange = event => {
    const value = event.target.value;
    setAdmin(prevState => ({ ...prevState, password: value }));


    if (value.length < 8) {
      setPasswordError('비밀번호는 최소 8자 이상이어야 합니다.');
    } else {
      setPasswordError('');
    }
  };

  const handlepasswordCheckChange = event => {
    const value = event.target.value;
    setAdmin(prevState => ({ ...prevState, passwordCheck: value }));

    if (value !== admin.password) {
      setPasswordCheckError('비밀번호와 일치하지 않습니다.');
    } else {
      setPasswordCheckError('');
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await api.post('/users/signup/admin', admin);
      alert(`${admin.username}님 회원가입을 축하합니다.`);
      console.log(`${admin.username}`);
      navi('/login');
      return response;
    } catch (error) {
      console.log(error);
      const errorMsg = error.response.data.message;
      alert(`${errorMsg}`);
      return error;
    }
  };

  return (
    <StBackground height='910px'>
      <StOverall>
        <div
          style={{
            marginTop: '80px',
            display: 'flex',
            alignItems: 'center',
            height: '100%'
          }}
        >
          <StLoginForm onSubmit={handleSubmit}
          height='650px'>
            <StForm>
              <StFormBox>
                <StFont width='100%' align="start" fontSize="28px">
                  관리자 회원가입
                </StFont>

                <StTextInput>
                  <StSmallFont
                    width
                    align="start"
                    fontSize="0.875rem"
                    weight="700"
                  >
                    사용자 이름
                  </StSmallFont>
                  <Input
                    type="text"
                    value={admin.username}
                    onChange={event => setAdmin({...admin, username: event.target.value})}
                    placeholder="이름을 입력하세요."
                    required
                  />
                </StTextInput>
                <StTextInput height='100%'>
                  <Certification 
                  admin={admin}
                  setAdmin={setAdmin}
                  email={admin.email}
                  onChange={event => setAdmin({...admin, email: event.target.value})}
                  />
                </StTextInput>

                <StTextInput  height='65px'>
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
                    value={admin.password}
                    onChange={handlePasswordChange}
                    placeholder="영문, 숫자, 특수문자를 조합하여 입력하세요.(8~16자)"
                    required
                    minlength="8"
                    maxlength="16"
                  />
                </StTextInput>
                <SterrorFont>
                  {passwordError && (
                  <StSmallFont
                    width='420px'
                    align="start"
                    fontSize="0.875rem"
                    weight="400"
                    color="red"
                  >
                    {passwordError}
                  </StSmallFont>
                )}
                </SterrorFont>

                <StTextInput height='35px' >
                  <Input
                    type="password"
                    value={admin.passwordCheck}
                    onChange={handlepasswordCheckChange}
                    placeholder="비밀번호 확인을 위해 한번 더 입력하세요."
                    required
                    minlength="8"
                    maxlength="16"
                  />
                </StTextInput>
                <SterrorFont>
                {passwordCheckError && (
                  <StSmallFont
                  width='420px'
                  align="start"
                    fontSize="0.875rem"
                    weight="400"
                    color="red"
                  >
                    {passwordCheckError}
                  </StSmallFont>
                )}
                </SterrorFont>

                <StTextInput>
                  <StSmallFont
                    width
                    align="start"
                    fontSize="0.875rem"
                    weight="700"
                  >
                    회사
                  </StSmallFont>
                  <Input
                    type="text"
                    id="companyName"
                    value={admin.companyName}
                    onChange={event => setAdmin({...admin, companyName: event.target.value})}
                    placeholder="회사를 입력하세요."
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
                    인증번호
                  </StSmallFont>
                  <Input
                    type="text"
                    id="certification"
                    value={admin.certification}
                    onChange={event => setAdmin({...admin, certification: event.target.value})}
                    placeholder="인증번호를 입력하세요."
                    required
                  />
                </StTextInput>
                <div style={{
                  marginTop:'20px'
                }}>
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
export default SignUpAdmin;
