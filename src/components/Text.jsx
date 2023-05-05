import React from 'react';
import styled from 'styled-components';
import { globalTypoes } from '../styles/typo';
import { colors } from '../styles/theme';

function Text({ children, shape, color }) {
  return (
    <StyledText shape={shape} color={color}>
      {children}
    </StyledText>
  );
}

export default Text;

const StyledText = styled.span`
  ${({ shape }) => {
    return globalTypoes[shape];
  }}
  ${({ color }) => {
    return colors[color];
  }}
`;
