import { useState, useMemo, useCallback } from 'react';

export const useFormValidation = () => {
  const [user, setUser] = useState({ email: '', password: '', passwordCheck: '' });
  const [errors, setErrors] = useState({ email: '', password: '', passwordCheck: '' });

  const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, []);

  const handleEmailChange = useCallback(({ target: { value } }) => {
    setUser(prevState => ({ ...prevState, email: value }));
  
    if (!emailRegex.test(value)) {
      setErrors(prevState => ({ ...prevState, email: '올바른 이메일 형식이 아닙니다.' }));
    } else {
      setErrors(prevState => ({ ...prevState, email: '' }));
    }
  }, [emailRegex]);

  const handlePasswordChange = useCallback(({ target: { value } }) => {
    setUser(prevState => ({ ...prevState, password: value }));

    if (value.length < 8) {
      setErrors(prevState => ({ ...prevState, password: '비밀번호는 최소 8자 이상이어야 합니다.' }));
    } else {
      setErrors(prevState => ({ ...prevState, password: '' }));
    }
  }, []);

  const handlepasswordCheckChange = useCallback(({ target: { value } }) => {
    setUser(prevState => ({ ...prevState, passwordCheck: value }));

    if (value !== user.password) {
      setErrors(prevState => ({ ...prevState, passwordCheck: '비밀번호와 일치하지 않습니다.' }));
    } else {
      setErrors(prevState => ({ ...prevState, passwordCheck: '' }));
    }
  }, [user.password]);

  return { user, setUser, errors, handleEmailChange, handlePasswordChange, handlepasswordCheckChange };
};