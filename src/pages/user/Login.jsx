import React from 'react';
import { useState } from 'react';
import { Row } from '../../components/Flex';
import ValidationError from '../../components/form/ValidationError';
import { AuthFormValidation } from '../../hooks/user/useAuthFormValidation';
import { LoginSubmitHandler } from '../../utils/loginSubmitHandler';
import Page from '../../components/Page';
import Text from '../../components/Text';
import { SignUpTextInput } from '../../components/form/SignUpTextInput';
import { BlueBtn } from '../../components/button/BlueBtn';

import { StForm, StFormContain, StLink, StStartText } from './UserStyled';

function Login() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const { auth, onChangeEmailHandler, onChangePasswordHandler } =
    AuthFormValidation(login, setLogin);

  const { onsubmitHandler } = LoginSubmitHandler(login, setErrorMsg);

  return (
    <Page>
      <StFormContain h="400px">
        <StForm onSubmit={onsubmitHandler}>
          <StStartText>
            <Text shape="T28_700_30"> 로그인 </Text>
            <Text shape="T16_500" color="var(--blue_004)" mt="3%">
              이메일 주소와 비밀번호를 입력해주세요.
            </Text>
          </StStartText>

          <SignUpTextInput
            innerText="이메일"
            type="email"
            value={auth.email}
            onChange={onChangeEmailHandler}
            name="email"
            placeholder="✉️  이메일을 입력하세요."
            required
          />

          <SignUpTextInput
            innerText="비밀번호"
            type="password"
            value={auth.password}
            name="password"
            placeholder="🔑  비밀번호를 입력하세요."
            required
            onChange={onChangePasswordHandler}
          />

          <ValidationError value={errorMsg} />

          <BlueBtn type="submit" mgt="20px">
            <Text shape="T18_700_22" color="var(--white)">
              로그인
            </Text>
          </BlueBtn>
          <Row>
            <StLink to={'/signup'}>
              <Text shape="T14_400_14" color="var(--blue_004)" ta="end">
                관리자 회원가입
              </Text>
            </StLink>
            <StLink to={'/signupuser'}>
              <Text shape="T14_400_14" color="var(--blue_004)" ta="end">
                일반 회원가입
              </Text>
            </StLink>
          </Row>
        </StForm>
      </StFormContain>
    </Page>
  );
}

export default Login;
