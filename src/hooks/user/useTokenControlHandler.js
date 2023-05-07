import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../shared/cookies';

export const TokenControlHadler = isLoginActions => {
  const [isModal, setIsModal] = useState(false);

  const [loginTime, setLoginTime] = useState(Date.now()); //현재시간을 나타냄
  const [expirationTime, setExpirationTime] = useState(loginTime + 7200000); // 토큰 만료 시간은 로그인 시간으로부터 2시간 후로 설정

  const navi = useNavigate();
  const dispatch = useDispatch();
  const token = getCookie('token');

  //로그아웃 시 모달을 띄워주는 '상태'
  const logout = () => {
    setLoginTime(null);
    setExpirationTime(null);
    setIsModal(true);
  };
  //시간이 지나면 토큰을 제거하고 페이지 이동(그려지는 행위)을 나타내는 '상태'
  const tokenLogout = () => {
    dispatch(isLoginActions.logout());
    setLoginTime(null);
    setExpirationTime(null);
    navi('/');
  };
  //삭제 버튼 -> 서버와 통신하여 로그아웃되는 '상태'
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
