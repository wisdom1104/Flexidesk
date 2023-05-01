import { useState } from 'react';

import { SignUpTextInput } from '../../components/form/SignUpTextInput';
import ValidationError from '../../components/form/ValidationError';

import CertificationCkeck from '../../features/user/CertificationCkeck';
import { AuthFormValidation } from '../../hooks/user/useAuthFormValidation';
import { useSignUpSubmitHandler } from 'hooks/user/useSignUpSubmitHandler';

import { StFont } from '../Welcome/WelcomeStyled';
import {
  StBackground,
  StForm,
  StFormBox,
  StLoginForm,
  StLongButton,
  StOverall,
  StTextInput,
} from './UserStyled';

function SignUpUser() {
  const [user, setUser] = useState({
    type: 'user',
    username: '',
    email: '',
    password: '',
    passwordCheck: '',
    certification: '',
  });

  const {
    auth,
    setAuth,
    errors,
    handleEmailChange,
    handlePasswordChange,
    handlepasswordCheckChange,
  } = AuthFormValidation(user, setUser);

  const { submitBtnHandler } = useSignUpSubmitHandler(user);

  return (
    <StBackground height="100vh">
      <StOverall>
        <StLoginForm onSubmit={submitBtnHandler} height="570px">
          <StForm>
            <StFormBox>
              <StFont width="100%" align="start" fontSize="28px">
                회원가입
              </StFont>

              <SignUpTextInput
                innerText="사용자 이름"
                type="text"
                value={auth.username}
                placeholder="이름을 입력하세요."
                onChange={event =>
                  setAuth({ ...auth, username: event.target.value })
                }
              />
              <SignUpTextInput
                innerText="사용자 이메일"
                type="email"
                value={auth.email}
                placeholder="이메일을 입력하세요."
                onChange={handleEmailChange}
              />
              <ValidationError value={errors.email} />

              <StTextInput height="80px">
                <CertificationCkeck
                  user={auth}
                  certification={auth.certification}
                  onChange={event =>
                    setAuth({ ...auth, certification: event.target.value })
                  }
                />
              </StTextInput>

              <SignUpTextInput
                innerText="비밀번호"
                type="password"
                value={auth.password}
                placeholder="영문, 숫자, 특수문자를 조합하여 입력하세요.(8~16자)"
                onChange={handlePasswordChange}
              />
              <ValidationError value={errors.password} />

              <SignUpTextInput
                height="45px"
                type="password"
                value={auth.passwordCheck}
                placeholder="비밀번호 확인을 위해 한번 더 입력하세요."
                onChange={handlepasswordCheckChange}
              />
              <ValidationError value={errors.passwordCheck} />

              <StLongButton type="submit">확인</StLongButton>
            </StFormBox>
          </StForm>
        </StLoginForm>
      </StOverall>
    </StBackground>
  );
}

export default SignUpUser;
