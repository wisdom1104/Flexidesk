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
import { useFormValidation } from '../../hooks/user/useSignUpUserHook';
import { SignUpTextInput } from '../../components/form/SignUpTextInput';
function SignUpUser() {
  const navi = useNavigate();

  // 가드
  useTrueHook();

  const {
    user,
    setUser,
    errors,
    handleEmailChange,
    handlePasswordChange,
    handlepasswordCheckChange,
  } = useFormValidation();

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
    <StBackground height="100vh">
      <StOverall>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            padding: 'height="100%"',
          }}
        >
          <StLoginForm onSubmit={submitBtnHandler} height="570px">
            <StForm>
              <StFormBox>
                <StFont width="100%" align="start" fontSize="28px">
                  회원가입
                </StFont>

                <SignUpTextInput
                  type="text"
                  value={user.username}
                  placeholder="이름을 입력하세요."
                  onChange={event =>
                    setUser({ ...user, username: event.target.value })
                  }
                  innerText="사용자 이름"
                />
                <SignUpTextInput
                  type="email"
                  value={user.email}
                  placeholder="이메일을 입력하세요."
                  onChange={handleEmailChange}
                  innerText="사용자 이메일"
                />
                {errors.email && (
                  <StSmallFont
                    width="420px"
                    align="start"
                    fontSize="0.875rem"
                    weight="400"
                    color="red"
                  >
                    {errors.email}
                  </StSmallFont>
                )}

                <StTextInput height="80px">
                  <CertificationCkeck
                    user={user}
                    certification={user.certification}
                    onChange={event =>
                      setUser({ ...user, certification: event.target.value })
                    }
                  />
                </StTextInput>

                <SignUpTextInput
                  type="password"
                  value={user.password}
                  placeholder="영문, 숫자, 특수문자를 조합하여 입력하세요.(8~16자)"
                  onChange={handlePasswordChange}
                  innerText="비밀번호"
                />

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
                <SignUpTextInput
                  height="45px"
                  type="password"
                  value={user.passwordCheck}
                  placeholder="비밀번호 확인을 위해 한번 더 입력하세요."
                  onChange={handlepasswordCheckChange}
                />
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
