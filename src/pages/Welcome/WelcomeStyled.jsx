import styled from 'styled-components';

//welcome 1
export const StGradationBg = styled.div`
  background: linear-gradient(180deg, #ffffff 0%, #def1ef 100%);
  height: 155vh;
`;

//welcome 3,5
export const StBackground = styled.div`
  background: ${props => props.background || '#DEF1EF'};
  height: ${props => props.h || '100%'};
  padding: ${props => props.pd || '100px'};
`;
