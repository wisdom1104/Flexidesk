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
import useTrueHook from '../../hooks/user/useTrueHook';
import CertificationCkeck from '../../features/user/CertificationCkeck';
import api from '../../axios/api';
import { AuthFormValidation } from '../../hooks/user/useAuthFormValidation';
import { SignUpTextInput } from '../../components/form/SignUpTextInput';
import ValidationError from '../../components/form/ValidationError';
import { useState } from 'react';
function SignUpUser() {
  const [user, setUser] = useState({
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
  const navi = useNavigate();

  // 가드
  useTrueHook();
  const submitBtnHandler = async e => {
    e.preventDefault();
    try {
      const response = await api.post('/users/signup/user', auth);
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
