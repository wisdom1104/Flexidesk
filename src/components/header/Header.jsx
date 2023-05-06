import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Modal from '../Modal';
import { isLoginActions } from '../../redux/modules/loginSlice';
import { LoginHeader } from './LoginHeader';
import { LogoutHeader } from './LogoutHeader';
import { TokenControlHadler } from '../../hooks/user/useTokenControlHandler';

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

const StHeader = styled.div`
  height: 6vh;
  max-width: 1200px;
  min-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
`;

export default Header;
