import React from 'react';
import styled from 'styled-components';

function MainBoard({ children }) {
  return (
    <StMainBoard>
      <StBoard>{children}</StBoard>
    </StMainBoard>
  );
}

export default MainBoard;

const StMainBoard = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: center;
  background-color: var(--white);
  box-shadow: 0px 5.02286px 37.6714px rgba(140, 159, 157, 0.25);
  border-radius: 8px;
  padding: 0px;
  margin-top: 20px;
  min-height: 10vw;
`;

const StBoard = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  margin: 5px;
  border-bottom: 1px solid var(--grey_003);
  padding-bottom: 5px;
`;
