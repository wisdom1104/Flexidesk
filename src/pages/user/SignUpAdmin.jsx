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
import Certification from '../../features/user/Certification';
import useTrueHook from '../../hooks/user/useTrueHook';
import { AdminFormValidation } from '../../hooks/user/useSignUpAdminHook';

function SignUpAdmin() {
  const {
    admin,
    setAdmin,
    errors,
    handleEmailChange,
    handlePasswordChange,
    handlepasswordCheckChange,
  } = AdminFormValidation();

  // 가드
  useTrueHook();

  const navi = useNavigate();

  const submitBtnHandler = async event => {
    event.preventDefault();
    try {
      const response = await api.post('/users/signup/admin', admin);
      console.log('Admin response', response);
      if (!response) {
        alert('다시 회원가입해주세요😓');
        return;
      }
      alert(`${admin.username}님 회원가입을 축하합니다.`);
      navi('/login');
      return response;
    } catch (error) {
      const errorMsg = error.response.data.message;
      alert(`${errorMsg}`);
      return error;
    }
  };

  return (
    <StBackground height="100vh">
      <StOverall>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            padding:'26px'
          }}
        >
          <StLoginForm onSubmit={submitBtnHandler} height="650px">
            <StForm>
              <StFormBox>
                <StFont width="100%" align="start" fontSize="28px">
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
                    onChange={event =>
                      setAdmin({ ...admin, username: event.target.value })
                    }
                    placeholder="이름을 입력하세요."
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
                    회사
                  </StSmallFont>
                  <Input
                    type="text"
                    id="companyName"
                    value={admin.companyName}
                    onChange={event =>
                      setAdmin({ ...admin, companyName: event.target.value })
                    }
                    placeholder="회사를 입력하세요."
                    required
                  />
                </StTextInput>

                <StTextInput height="100%">
                  <Certification
                    admin={admin}
                    email={admin.email}
                    onChange={handleEmailChange}
                    errors={errors}
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
                    onChange={event =>
                      setAdmin({ ...admin, certification: event.target.value })
                    }
                    placeholder="인증번호를 입력하세요."
                    required
                  />
                </StTextInput>
                <StTextInput height="65px">
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
                </SterrorFont>

                <StTextInput height="35px">
                  <Input
                    type="password"
                    name="passwordCheck"
                    value={admin.passwordCheck}
                    onChange={handlepasswordCheckChange}
                    placeholder="비밀번호 확인을 위해 한번 더 입력하세요."
                    required
                    minlength="8"
                    maxlength="16"
                  />
                </StTextInput>

                <SterrorFont>
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
                </SterrorFont>

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
export default SignUpAdmin;
