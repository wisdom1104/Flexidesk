import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../shared/cookies';

export const TokenControlHadler = isLoginActions => {
  const [isModal, setIsModal] = useState(false);

  const [loginTime, setLoginTime] = useState(Date.now());
  const [expirationTime, setExpirationTime] = useState(loginTime + 7200000);

  const navi = useNavigate();
  const dispatch = useDispatch();
  const token = getCookie('token');

  const logout = () => {
    setLoginTime(null);
    setExpirationTime(null);
    setIsModal(true);
  };

  const tokenLogout = () => {
    dispatch(isLoginActions.logout());
    setLoginTime(null);
    setExpirationTime(null);
    navi('/');
  };

  const handleLogout = () => {
    dispatch(isLoginActions.logout());
  };
  const onClickHomeHandler = () => {
    navi('/');
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      if (expirationTime && Date.now() > expirationTime) {
        tokenLogout();
      }
    }, 1000);
    return () => clearInterval(timerId);
  }, [expirationTime]);
  return {
    token,
    isModal,
    setIsModal,
    handleLogout,
    logout,
    onClickHomeHandler,
  };
};
