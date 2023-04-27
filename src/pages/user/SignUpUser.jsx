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
import CertificationCkeck from '../../features/user/CertificationCkeck';
import api from '../../axios/api';
import { useFormValidation } from '../../hooks/useSignUpUserHook';

function SignUpUser() {

  const navi = useNavigate();

  // 가드
  useTrueHook();

  const { user, setUser, errors, handleEmailChange, handlePasswordChange, handlepasswordCheckChange } = useFormValidation();

  const submitBtnHandler = async e => {
    e.preventDefault();
    try {
      const response = await api.post('/users/signup/user', user);
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
                {errors.email && 
                <StSmallFont 
                      width="420px"
                      align="start"
                      fontSize="0.875rem"
                      weight="400"
                      color="red">{errors.email}</StSmallFont>}


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
                {errors.password && (
                  <StSmallFont
                    width="420px"
                      align="start"
                      fontSize="0.875rem"
                      weight="400"
                      color="red"
                  >
                    {errors.password}
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
                {errors.passwordCheck && (
                  <StSmallFont
                     width="420px"
                      align="start"
                      fontSize="0.875rem"
                      weight="400"
                      color="red"
                  >
                    {errors.passwordCheck}
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
