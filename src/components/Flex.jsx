import React from 'react';
import styled from 'styled-components';

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Flex = ({ children, gap, dir, jc, ai, po }) => {
  return (
    <StyledFlex gap={gap} dir={dir} jc={jc} ai={ai} po={po}>
      {children}
    </StyledFlex>
  );
};

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${({ dir }) => dir};
  gap: ${({ gap }) => gap}px;
  justify-content: ${({ jc }) => jc};
  align-items: ${({ ai }) => ai};
  position: ${({ po }) => po};
`;
