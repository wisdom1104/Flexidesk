import React from 'react';
import styled from 'styled-components';

export const Dimension = ({ children, w, h, minw, minh, maxw, maxh, bg }) => {
  return (
    <StyledDimension
      bg={bg}
      w={w}
      h={h}
      minw={minw}
      minh={minh}
      maxw={maxw}
      maxh={maxh}
    >
      {children}
    </StyledDimension>
  );
};

const StyledDimension = styled.div`
  background-color: ${({ bg }) => bg};
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  min-width: ${({ minw }) => minw};
  max-width: ${({ maxw }) => maxw};
  min-height: ${({ minh }) => minh};
  max-height: ${({ maxw }) => maxw};
`;
