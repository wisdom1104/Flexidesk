import React, { forwardRef } from 'react';
import styled from 'styled-components';

const SpaceMainBoard = forwardRef(({ children, onDrop, onDragOver }, ref) => {
  return (
    <StSpaceMainBoard ref={ref} onDrop={onDrop} onDragOver={onDragOver}>
      {children}
    </StSpaceMainBoard>
  );
});

export default SpaceMainBoard;

const StSpaceMainBoard = styled.div`
  position: relative;
  height: 593px;
  width: 97%;
  min-width: 989.93px;
  background: var(--white);
  box-shadow: 0px 5px 40px rgba(140, 159, 157, 0.25);
  border-radius: 8px;
  margin: auto;
`;
