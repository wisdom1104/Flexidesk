import { useEffect,useState, useMemo, useCallback } from 'react';


export const AdminFormValidation = () => {
    const [admin, setAdmin] = useState({email: '',
    password: '',
    passwordCheck: '',
    username: '',
    companyName: '',
    certification: '',})
    const [errors, setErrors] = useState({ email: '', password: '', passwordCheck: '' });
  
    const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, []);

    useEffect(() => {
      if (admin.password && admin.passwordCheck && admin.password !== admin.passwordCheck) {
        setErrors(prev => ({ ...prev, passwordCheck: '비밀번호가 일치하지 않습니다.' }));
      } else {
        setErrors(prev => ({ ...prev, passwordCheck: '' }));
      }
    }, [admin.password]);
  

    const handleEmailChange = useCallback(({ target: { value } }) => {
      setAdmin(pre => ({ ...pre, email: value }));
    
      if (!emailRegex.test(value)) {
        setErrors(pre => ({ ...pre, email: '올바른 이메일 형식이 아닙니다.' }));
      } else {
        setErrors(pre => ({ ...pre, email: '' }));
      }
    }, [emailRegex]);
    
    const handlePasswordChange = useCallback(({ target: { value } }) => {
      setAdmin(pre => ({ ...pre, password: value }));
    
      const hasNumber = /\d/.test(value);
      const hasLowercase = /[a-z]/.test(value);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
      const hasWhitespace = /\s/.test(value);
    
      if (value.length < 8) {
        setErrors(pre => ({ ...pre, password: '비밀번호는 최소 8자 이상이어야 합니다.' }));
      } else if (!hasNumber || !hasLowercase || !hasSpecialChar) {
        setErrors(pre => ({ ...pre, password: '비밀번호는 숫자, 소문자, 특수문자가 모두 포함되어야 합니다.' }));
      } else if (hasWhitespace) {
        setErrors(pre => ({ ...pre, password: '비밀번호에 공백이 포함될 수 없습니다.' }));
      } else {
        setErrors(pre => ({ ...pre, password: '' }));
      }
    }, [admin.passwordCheck]);
  
    const handlepasswordCheckChange = useCallback(({ target: { value } }) => {
      setAdmin(pre => ({ ...pre, passwordCheck: value }));
  
      if (value !== admin.password) {
        setErrors(pre => ({ ...pre, passwordCheck: '비밀번호와 일치하지 않습니다.' }));
      } else {
        setErrors(pre => ({ ...pre, passwordCheck: '' }));
      }
    }, [admin.password]);
  
    return { admin, setAdmin, errors, handleEmailChange, handlePasswordChange, handlepasswordCheckChange };
  };