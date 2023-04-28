import { useState, useMemo, useCallback } from 'react';

export const LoginFormValidation = () => {
    const [login, setLogin] = useState({
    email: '',
    password: '',
})
    const [errors, setErrors] = useState({ email: '', password: ''});
  
    const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, []);
  
    const handleEmailChange = useCallback(({ target: { value } }) => {
      setLogin(pre => ({ ...pre, email: value }));
    
      if (!emailRegex.test(value)) {
        setErrors(pre => ({ ...pre, email: '올바른 이메일 형식이 아닙니다.' }));
      } else {
        setErrors(pre => ({ ...pre, email: '' }));
      }
    }, [emailRegex]);
  
    const handlePasswordChange = useCallback(({ target: { value } }) => {
      setLogin(pre => ({ ...pre, password: value }));
  
      if (value.length < 8) {
        setErrors(pre => ({ ...pre, password: '비밀번호는 최소 8자 이상이어야 합니다.' }));
      } else {
        setErrors(pre => ({ ...pre, password: '' }));
      }
    }, []);
  
  
    return { login, setLogin, errors, handleEmailChange, handlePasswordChange };
  };