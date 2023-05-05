import React from 'react';
import styled from 'styled-components';

function SubMintBtn({ children, ...rest }) {
  return <StMainMintBtn {...rest}>{children}</StMainMintBtn>;
}

export default SubMintBtn;

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

  background: var(--mint_004);
  border: none;
  border-radius: 8px;
  color: var(--mint_002);

  &:hover {
    background: var(--white);
    color: var(--mint_002);
  }
  &:active {
    background: var(--white);
    color: var(--mint_001);
  }
`;
