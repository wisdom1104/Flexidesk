import React from 'react';
import styled from 'styled-components';

export const Input = ({
  type,
  value,
  onChange,
  name,
  placeholder,
  ...restProps
}) => {
  return (
    <>
      <StInput
        required
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        {...restProps}
      />
    </>
  );
};

const StInput = styled.input`
  display: block;
  background: var(--white);
  outline: none;

  width: ${props => props.w || '400px'};
  height: ${props => props.h || '50px'};
  margin: ${props => props.mg || '0px'};
  padding: ${props => props.pd || '0 10px'};

  border: 1px solid;
  border-color: ${props => props.border || 'var(--blue_004)'};
  border-radius: ${props => props.br || '8px'};

  color: var(--blue_004);

  &:focus {
    border: 1px solid var(--mint_002);
  }
  &:active {
    border: 1px solid var(--blue_001);
  }
`;
