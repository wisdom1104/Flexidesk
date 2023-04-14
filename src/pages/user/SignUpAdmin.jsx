import React, { useEffect, useState } from 'react';
import { Input } from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import { cookies } from '../../shared/cookies';
import api from '../../axios/api';
import useTrueHook from '../../hooks/useTrueHook';
import Certification from './Certification';
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

function SignUpAdmin() {
  // 가드
  useTrueHook();

  const [admin, setAdmin] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    userName: '',
    companyName: '',
    certification: '',
  });

  const onChangeHandler = e => {
    const { value, name } = e.target;
    setAdmin(old => {
      return { ...old, [name]: value };
    });
  };

  const navi = useNavigate();

  // form태그 핸들러
  const submitBtnHandler = async e => {
    e.preventDefault();
    try {
      const response = await api.post('/users/signup/admin', admin);
      alert(`${admin.userName}님 회원가입을 축하합니다.`);
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
    <>
      <StBackground>
        <StOverall height="1100px">
          <div
            style={{
              marginTop: '100px',
            }}
          >
            <StLoginForm onSubmit={submitBtnHandler} height="850px">
              <StForm
              height='850px'
              >
                <StFormBox>
                  <StFont align="start" fontSize="28px">
                    관리자 회원가입
                  </StFont>

                  <StTextInput>
                    <Certification
                      email={admin.email}
                      onChange={onChangeHandler}
                      admin={admin}
                      setAdmin={setAdmin}
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
                      value={admin.certification || ''}
                      onChange={onChangeHandler}
                      name="certification"
                      placeholder="인증번호를 입력하세요."
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
                      비밀번호
                    </StSmallFont>
                    <Input
                      type="password"
                      value={admin.password || ''}
                      onChange={onChangeHandler}
                      name="password"
                      placeholder="영문, 숫자, 특수문자를 조합하여 입력하세요.(8~16자)"
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
                      value={admin.passwordCheck || ''}
                      onChange={onChangeHandler}
                      name="passwordCheck"
                      placeholder="영문, 숫자, 특수문자를 조합하여 입력하세요.(8~16자)"
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
                      value={admin.userName || ''}
                      onChange={onChangeHandler}
                      name="userName"
                      placeholder="사용하실 이름을 입력하세요."
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
                      value={admin.companyName || ''}
                      onChange={onChangeHandler}
                      name="companyName"
                      placeholder="회사를 입력하세요."
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

export default SignUpAdmin;
