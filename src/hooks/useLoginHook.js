import { useState, useMemo, useCallback } from 'react';

export const LoginFormValidation = () => {
    const [login, setLogin] = useState({
    email: '',
    password: '',
})
    const [errors, setErrors] = useState({ email: '', password: ''});
  
    const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, []);
  
    const handleEmailChange = useCallback(({ target: { value } }) => {
      setLogin(prevState => ({ ...prevState, email: value }));
    
      if (!emailRegex.test(value)) {
        setErrors(prevState => ({ ...prevState, email: '올바른 이메일 형식이 아닙니다.' }));
      } else {
        setErrors(prevState => ({ ...prevState, email: '' }));
      }
    }, [emailRegex]);
  
    const handlePasswordChange = useCallback(({ target: { value } }) => {
      setLogin(prevState => ({ ...prevState, password: value }));
  
      if (value.length < 8) {
        setErrors(prevState => ({ ...prevState, password: '비밀번호는 최소 8자 이상이어야 합니다.' }));
      } else {
        setErrors(prevState => ({ ...prevState, password: '' }));
      }
    }, []);
  
  
    return { login, setLogin, errors, handleEmailChange, handlePasswordChange };
  };