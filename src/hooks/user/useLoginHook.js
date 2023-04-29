import { useState, useMemo, useCallback } from 'react';

export const LoginFormValidation = () => {
    const [login, setLogin] = useState({
    email: '',
    password: '',
})
    const [errors, setErrors] = useState({ email: '', password: ''});
  
    const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, []);
    const passwordRegex = useMemo(() => /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, []);

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
  
      if (!passwordRegex.test(value)) {
        setErrors(pre => ({ ...pre, password: '비밀번호는 최소 8자 이상이며, 특수문자, 숫자, 소문자를 모두 포함해야 합니다.' }));
      } else {
        setErrors(pre => ({ ...pre, password: '' }));
      }
    }, [passwordRegex]);
  
  
    return { login, setLogin, errors, handleEmailChange, handlePasswordChange };
  };