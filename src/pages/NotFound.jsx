import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function NotFound() {
  const navi = useNavigate();
  return (
    <StDiv>
      <StDiv2>해당 페이지를 찾지 못했습니다.</StDiv2>
      <StDiv3>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</StDiv3>
      <StButton onClick={() => navi('/welcome')}>메인 페이지로 이동</StButton>
    </StDiv>
  );
}

export default NotFound;

const StDiv = styled.div`
   max-width: 1400px;
    margin: 0 auto;
    padding: 32px 0;
`

const StDiv2 = styled.div`
  margin-top: 64px;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 32px;
`;

const StDiv3 = styled.div`
  font-size: 28px;
  line-height: 1.6;
`;

const StButton = styled.button`
  font-size: 25px;
  line-height: 1.6;
  color: #479d97;
  cursor: pointer;
`;
