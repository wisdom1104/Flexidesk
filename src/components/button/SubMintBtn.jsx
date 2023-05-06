import React from 'react';
import styled from 'styled-components';

function SubMintBtn({ children, onClick, ...rest }) {
  return (
    <StMainMintBtn onClick={onClick} {...rest}>
      {children}
    </StMainMintBtn>
  );
}

export default SubMintBtn;

const StMainMintBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: ${props => props.pd || '0'};
  margin: ${props => props.mg || '0'};

  position: ${props => props.position || 'static'};
  width: ${props => props.w || 'auto'};
  height: ${props => props.h || 'auto'};
  top: ${props => props.top || '0px'};
  left: ${props => props.left || '0px'};

  background: var(--mint_004);
  border: 1px solid var(--mint_002);
  border-radius: ${props => props.br || '8px'};
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
