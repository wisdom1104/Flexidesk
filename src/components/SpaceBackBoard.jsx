import React from 'react';
import styled from 'styled-components';

function SpaceBackBoard({ children }) {
  return <StSpaceBackBoard>{children}</StSpaceBackBoard>;
}

export default SpaceBackBoard;

const StSpaceBackBoard = styled.div`
  position: relative;
  height: 686px;
  min-width: 1020px;
  background: var(--spaceGradation);
  border-radius: 8px;
  margin-top: 16px;
  margin-right: 0;
`;
