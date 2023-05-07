import React from 'react';
import Text from './Text';
import styled from 'styled-components';

export function Card({ children, shape = 'T20_600', value, key, height }) {
  return (
    <StCard key={key} height={height}>
      <Text shape={shape}>{value}</Text>
      <StInfo>{children}</StInfo>
    </StCard>
  );
}

const StCard = styled.div`
  width: ${props => props.width || '400px'};
  /* height: ${props => props.height || '280px'}; */
  height: ${props => props.height || '90%'};

  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding-bottom: 20px;
  background-color: #def1ef;
  border: none;
  border-radius: 8px;
  padding-top: 15px;
`;

const StInfo = styled.div`
  display: flex;
  width: 90%;

  flex-direction: column;
  align-items: center;
  background-color: var(--white);

  box-shadow: 0px 5.02286px 37.6714px rgba(140, 159, 157, 0.25);
  border-radius: 8px;
  padding: 0px;
  margin-top: 20px;

  min-height: 12vw;
`;
