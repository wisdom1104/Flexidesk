import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { isLoginActions } from '../redux/modules/loginSlice';
import { cookies } from '../shared/cookies';

function Header() {
  const dispatch = useDispatch();
  const navi = useNavigate();

  const logout = () => {
    dispatch(isLoginActions.logout());
    alert('로그아웃 되었습니다.');
    navi('/login');
  };
  return (
    <StHeader>
      <h2>Header</h2>
      {cookies.get("token") ? (
              <p type="button" onClick={logout}>
                Logout
              </p>
            ) : (
              <p
                type="button"
                onClick={() => navi("/login")}
              >
                LogIn
              </p>
            )}
    </StHeader>
  );
}

const StHeader = styled.div`
  height: 80px;
  width: 98%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin: 10px;
`;

export default Header;
