import React from 'react';
import styled from 'styled-components';

function Page({ children, ...rest }) {
  return <StPage {...rest}>{children}</StPage>;
}

const StPage = styled.div`
  position: relative;
  height: calc(94vh - 20px);
  max-width: 1200px;
  min-width: 800px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  gap: 10px;
`;

export default Page;
