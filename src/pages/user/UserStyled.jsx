import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StStartText = styled.div`
  width: 420px;
`;

export const StFormContain = styled.div`
  background: var(--mint_004);

  padding: 30px;
  margin-top: ${props => props.mt || '100px'};
  height: ${props => props.h || '65%'};
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const StForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StLink = styled(Link)`
  width: 100px;
  margin-top: 15%;
`;

export const Container = styled.div`
  width: 420px;
  height: 35px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 5px;
`;

export const InlineInput = styled.input`
  width: 85%;
  height: 50px;
  display: block;
  border: 1px solid #a6aebb;
  border-radius: 8px;
  padding: 0 10px;
  padding-left: 5px;
  outline: none;
  color: var(--blue_004);
  &::placeholder {
    color: #a6aebb;
    font-weight: 700;
    font-size: 14px;
    line-height: 30px;
  }
  &:focus {
    border: 1px solid #65bab6;
  }
  &:active {
    border: 1px solid var(--blue_001);
  }
`;
