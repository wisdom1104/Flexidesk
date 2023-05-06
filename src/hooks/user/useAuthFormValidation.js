import { useEffect, useState } from 'react';

export const AuthFormValidation = (auth, setAuth) => {
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    passwordCheck: '',
  });

  useEffect(() => {
    if (
      auth.password &&
      auth.passwordCheck &&
      auth.password !== auth.passwordCheck
    ) {
      setErrors(prev => ({
        ...prev,
        passwordCheck: '비밀번호가 일치하지 않습니다.',
      }));
    } else {
      setErrors(prev => ({ ...prev, passwordCheck: '' }));
    }
  }, [auth.password]);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const onChangeEmailHandler = ({ target: { value } }) => {
    setAuth(pre => ({ ...pre, email: value }));

    if (!emailRegex.test(value)) {
      setErrors(pre => ({ ...pre, email: '올바른 이메일 형식이 아닙니다.' }));
    } else {
      setErrors(pre => ({ ...pre, email: '' }));
    }
  };

  const onChangePasswordHandler = ({ target: { value } }) => {
    setAuth(pre => ({ ...pre, password: value }));

    const hasNumber = /\d/.test(value);
    const hasLowercase = /[a-z]/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const hasWhitespace = /\s/.test(value);

    if (value.length < 8) {
      setErrors(pre => ({
        ...pre,
        password: '비밀번호는 최소 8자 이상이어야 합니다.',
      }));
    } else if (!hasNumber || !hasLowercase || !hasSpecialChar) {
      setErrors(pre => ({
        ...pre,
        password: '비밀번호는 숫자, 소문자, 특수문자가 모두 포함되어야 합니다.',
      }));
    } else if (hasWhitespace) {
      setErrors(pre => ({
        ...pre,
        password: '비밀번호에 공백이 포함될 수 없습니다.',
      }));
    } else {
      setErrors(pre => ({ ...pre, password: '' }));
    }
  };

  const onChangePasswordCheckHandler = ({ target: { value } }) => {
    setAuth(pre => ({ ...pre, passwordCheck: value }));

    if (value !== auth.password) {
      setErrors(pre => ({
        ...pre,
        passwordCheck: '비밀번호와 일치하지 않습니다.',
      }));
    } else {
      setErrors(pre => ({ ...pre, passwordCheck: '' }));
    }
  };

  return {
    auth,
    setAuth,
    errors,
    onChangeEmailHandler,
    onChangePasswordHandler,
    onChangePasswordCheckHandler,
  };
};
