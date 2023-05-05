import React from 'react';
import styled from 'styled-components';
import { globalTypoes } from '../styles/typo';

function Text({ children, shape, color, ta }) {
  return (
    <StyledText shape={shape} color={color} ta={ta}>
      {children}
    </StyledText>
  );
}

export default Text;

const StyledText = styled.div`
  ${({ shape }) => {
    return globalTypoes[shape];
  }}
  color: ${({ color }) => color || 'var(—blue_001)'};
  text-align: ${({ ta }) => ta};
`;
