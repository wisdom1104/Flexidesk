import React from 'react';
import styled from 'styled-components';

function MainMintBtn({ children, ...rest }) {
  return <StMainMintBtn {...rest}>{children}</StMainMintBtn>;
}

export default MainMintBtn;

const StMainMintBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: ${props => props.pd || '0'};
  margin: ${props => props.mg || '0'};

  /* position: relative; */
  width: ${props => props.w || 'auto'};
  height: ${props => props.h || 'auto'};

  background: var(--mint_002);
  border: none;
  border-radius: 8px;

  color: var(--white);

  &:hover {
    background: var(--mint_002);
    color: var(--mint_004);
  }
  &:active {
    background: var(--mint_001);
    color: var(--white);
  }
`;
