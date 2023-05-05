import React from 'react';
import styled from 'styled-components';

export function BlueBtn({ children, ...rest }) {
  return <StBlueBtn {...rest}>{children}</StBlueBtn>;
}

const StBlueBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: ${props => props.pd || '0'};
  margin: ${props => props.mg || '0'};

  /* position: relative; */
  width: ${props => props.w || '420px'};
  height: ${props => props.h || '60px'};

  background: var(--mint_002);
  border: none;
  border-radius: 8px;

  color: var(--white);
  background: var(--blue_001);
  &:hover {
    background: var(--blue_002);
  }
  &:active {
    color: var(--blue_001);
    background: var(--white);
    border: 1px solid var(--blue_001);
  }
`;
