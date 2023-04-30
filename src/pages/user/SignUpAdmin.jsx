import api from '../../axios/api';
import { useNavigate } from 'react-router-dom';
import {
  StBackground,
  StForm,
  StFormBox,
  StLoginForm,
  StLongButton,
  StOverall,
} from './UserStyled';
import { StFont, StSmallFont } from '../Welcome/WelcomeStyled';
import Certification from '../../features/user/Certification';
import useTrueHook from '../../hooks/user/useTrueHook';
import { AdminFormValidation } from '../../hooks/user/useSignUpAdminHook';
import { SignUpTextInput } from '../../components/form/SignUpTextInput';
import ValidationError from '../../components/form/ValidationError';

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
        <StLoginForm onSubmit={submitBtnHandler} height="650px">
          <StForm>
            <StFormBox>
              <StFont width="100%" align="start" fontSize="28px">
                관리자 회원가입
              </StFont>
              <SignUpTextInput
                innerText="사용자 이름"
                type="text"
                value={admin.username}
                placeholder="이름을 입력하세요."
                onChange={event =>
                  setAdmin({ ...admin, username: event.target.value })
                }
              />

              <SignUpTextInput
                innerText="회사"
                type="text"
                value={admin.companyName}
                placeholder="회사를 입력하세요."
                onChange={event =>
                  setAdmin({ ...admin, companyName: event.target.value })
                }
              />

              <Certification
                admin={admin}
                email={admin.email}
                onChange={handleEmailChange}
                errors={errors}
              />

              <SignUpTextInput
                innerText="인증번호"
                type="text"
                value={admin.certification}
                placeholder="인증번호를 입력하세요."
                onChange={event =>
                  setAdmin({ ...admin, certification: event.target.value })
                }
              />

              <SignUpTextInput
                innerText="비밀번호"
                height="65px"
                type="password"
                value={admin.password}
                placeholder="영문, 숫자, 특수문자를 조합하여 입력하세요.(8~16자)"
                onChange={handlePasswordChange}
                minlength="8"
                maxlength="16"
              />

              <ValidationError value={errors.password} />

              <SignUpTextInput
                height="35px"
                type="password"
                value={admin.passwordCheck}
                placeholder="비밀번호 확인을 위해 한번 더 입력하세요."
                onChange={handlepasswordCheckChange}
                minlength="8"
                maxlength="16"
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
export default SignUpAdmin;
