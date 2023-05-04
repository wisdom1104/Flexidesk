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

export const Flex = ({ children, gap, dir, jc, ai }) => {
  return (
    <StyledFlex gap={gap} dir={dir} jc={jc} ai={ai}>
      {children}
    </StyledFlex>
  );
};

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${({ dir }) => dir};
  gap: ${({ gap }) => gap};
  ${({ jc }) => {
    if (jc === 'center') return 'justify-content: center;';
    if (jc === 'end') return 'justify-content: end;';
    if (jc === 'between') return 'justify-content: space-between;';
    if (jc === 'around') return 'justify-content: space-around;';
    if (jc === 'left') return 'justify-content: left;';
  }}
  ${({ ai }) => {
    if (ai === 'center') return 'aline-items: center';
    if (ai === 'start') return 'align-items: flex-start;';
    if (ai === 'end') return 'align-items: flex-end;';
  }}
`;
