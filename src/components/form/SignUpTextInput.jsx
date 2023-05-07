import React from 'react';
import styled from 'styled-components';
import Text from '../Text';

export const SignUpTextInput = ({
  type,
  value,
  placeholder,
  onChange,
  innerText,
  height,
  minlength,
  maxlength,
  required,
}) => {
  return (
    <StTextInput height={height}>
      <Text shape="T14_700" color="var(--blue_004)">
        {innerText}
      </Text>
      <StInput
        required
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        minlength={minlength}
        maxlength={maxlength}
      />
    </StTextInput>
  );
};

const StTextInput = styled.div`
height: ${props => props.height || '75px'};
margin-top: ${props => props.marginTop || '16px'};
`;

const StInput = styled.input`
  display: block;
  width: 400px;
  margin: 0px;
  height: 50px;
  padding: 0 10px;
  background-repeat: no-repeat;

  outline: none;

  border: 1px solid #a6aebb;
  border-radius: 8px;

  font-weight: 700;
  font-size: 14px;
  line-height: 30px;
  color: #a6aebb;

  &::placeholder {
    color: #a6aebb;
  }

  &:focus {
    border: 1px solid #65bab6;
  }
  &:active {
    border: 1px solid var(--blue);
  }
`;
