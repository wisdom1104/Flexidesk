import React from 'react';
import { useLocation } from 'react-router-dom';
import Modal from '../Modal';
import { isLoginActions } from '../../redux/modules/loginSlice';
import { TokenControlHadler } from '../../hooks/user/useTokenControlHandler';
import { StHeader } from './HeaderStyled';
import { LoginHeader } from './LoginHeader';
import { LogoutHeader } from './LogoutHeader';

function Header() {
  const {
    token,
    isModal,
    setIsModal,
    handleLogout,
    logout,
    onClickHomeHandler,
  } = TokenControlHadler(isLoginActions);

  const location = useLocation();
  if (
    location.pathname === '/login' ||
    location.pathname === '/signup' ||
    location.pathname === '/signupuser'
  ) {
    return null;
  }

  return (
    <StHeader>
      {token ? (
        <LogoutHeader onClickHomeHandler={onClickHomeHandler} logout={logout} />
      ) : (
        <LoginHeader onClickHomeHandler={onClickHomeHandler} />
      )}
      {isModal && (
        <Modal
          setIsModal={setIsModal}
          modalTitle="로그아웃 하시겠습니까?"
          onButtonClick={handleLogout}
          redirectPath="/"
        ></Modal>
      )}
    </StHeader>
  );
}

export default Header;
