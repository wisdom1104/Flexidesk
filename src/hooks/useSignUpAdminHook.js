import { useState, useMemo, useCallback } from 'react';

export const AdminFormValidation = () => {
    const [admin, setAdmin] = useState({email: '',
    password: '',
    passwordCheck: '',
    username: '',
    companyName: '',
    certification: '',})
    const [errors, setErrors] = useState({ email: '', password: '', passwordCheck: '' });
  
    const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, []);
  
    const handleEmailChange = useCallback(({ target: { value } }) => {
      setAdmin(prevState => ({ ...prevState, email: value }));
    
      if (!emailRegex.test(value)) {
        setErrors(prevState => ({ ...prevState, email: '올바른 이메일 형식이 아닙니다.' }));
      } else {
        setErrors(prevState => ({ ...prevState, email: '' }));
      }
    }, [emailRegex]);
  
    const handlePasswordChange = useCallback(({ target: { value } }) => {
      setAdmin(prevState => ({ ...prevState, password: value }));
  
      if (value.length < 8) {
        setErrors(prevState => ({ ...prevState, password: '비밀번호는 최소 8자 이상이어야 합니다.' }));
      } else {
        setErrors(prevState => ({ ...prevState, password: '' }));
      }
    }, []);
  
    const handlepasswordCheckChange = useCallback(({ target: { value } }) => {
      setAdmin(prevState => ({ ...prevState, passwordCheck: value }));
  
      if (value !== admin.password) {
        setErrors(prevState => ({ ...prevState, passwordCheck: '비밀번호와 일치하지 않습니다.' }));
      } else {
        setErrors(prevState => ({ ...prevState, passwordCheck: '' }));
      }
    }, [admin.password]);
  
    return { admin, setAdmin, errors, handleEmailChange, handlePasswordChange, handlepasswordCheckChange };
  };