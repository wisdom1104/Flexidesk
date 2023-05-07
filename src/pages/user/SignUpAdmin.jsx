import { useState } from 'react';
import { SignUpTextInput } from '../../components/form/SignUpTextInput';
import ValidationError from '../../components/form/ValidationError';
import Certification from '../../features/user/Certification';
import { AuthFormValidation } from '../../hooks/user/useAuthFormValidation';
import { useSignUpSubmitHandler } from '../../hooks/user/useSignUpSubmitHandler';
import Page from '../../components/Page';
import Text from '../../components/Text';
import { BlueBtn } from '../../components/button/BlueBtn';
import { StFormContain, StForm, StStartText } from './UserStyled';

function SignUpAdmin() {
  const [admin, setAdmin] = useState({
    type: 'admin',
    email: '',
    password: '',
    passwordCheck: '',
    username: '',
    companyName: '',
    certification: '',
  });

  const {
    auth,
    setAuth,
    errors,
    onChangeEmailHandler,
    onChangePasswordHandler,
    onChangePasswordCheckHandler,
  } = AuthFormValidation(admin, setAdmin);

  const { onSubmitHandler } = useSignUpSubmitHandler(admin);

  return (
    <Page h="">
      <StFormContain h="680px">
        <StForm onSubmit={onSubmitHandler}>
          <StStartText>
            <Text shape="T28_700_30">관리자 회원가입</Text>
          </StStartText>
          <SignUpTextInput
            innerText="사용자 이름"
            type="text"
            value={auth.username}
            placeholder="이름을 입력하세요."
            required
            onChange={event =>
              setAuth({ ...auth, username: event.target.value })
            }
          />

          <SignUpTextInput
            innerText="회사"
            type="text"
            value={auth.companyName}
            placeholder="회사를 입력하세요."
            required
            onChange={event =>
              setAuth({ ...auth, companyName: event.target.value })
            }
          />

          <Certification
            admin={auth}
            email={auth.email}
            onChange={onChangeEmailHandler}
            errors={errors}
          />
          <SignUpTextInput
            innerText="인증번호"
            type="text"
            value={auth.certification}
            placeholder="인증번호를 입력하세요."
            required
            onChange={event =>
              setAuth({ ...auth, certification: event.target.value })
            }
          />

          <SignUpTextInput
            innerText="비밀번호"
            height="65px"
            type="password"
            value={auth.password}
            placeholder="영문, 숫자, 특수문자를 조합하여 입력하세요.(8~16자)"
            required
            onChange={onChangePasswordHandler}
            minlength="8"
            maxlength="16"
          />
          <br />

          <ValidationError value={errors.password} />

          <SignUpTextInput
            height="35px"
            type="password"
            value={auth.passwordCheck}
            placeholder="비밀번호 확인을 위해 한번 더 입력하세요."
            required
            onChange={onChangePasswordCheckHandler}
            minlength="8"
            maxlength="16"
          />
          <br />

          <ValidationError value={errors.passwordCheck} />
          <BlueBtn type="submit" mgt="20px">
            <Text shape="T18_700_22" color="var(--white)">
              확인
            </Text>
          </BlueBtn>
        </StForm>
      </StFormContain>
    </Page>
  );
}
export default SignUpAdmin;
