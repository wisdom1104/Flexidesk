import React from 'react';
import styled from 'styled-components';
import Text from './Text';

export function CardInfo({ children, shape = 'T16_700', color, value }) {
  return (
    <StCardInfo>
      <Text shape={shape} color={color}>
        {children}
      </Text>
      <br />
      <Text shape={shape}>{value}</Text>
    </StCardInfo>
  );
}

const StCardInfo = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  margin: 5px;
  border-bottom: 1px solid var(--grey_003);
  padding-bottom: 5%;
`;
