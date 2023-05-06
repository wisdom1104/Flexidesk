import styled from 'styled-components';

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${props => props.mt || ''};
  gap: ${props => props.gap || ''};
`;
