import React, { useState } from 'react';
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
  width: ${props => props.width || '400px'};
  margin: ${props => props.margin || '0px'};
  height: ${props => props.height || '50px'};
  padding: ${props => props.padding || '0 10px'};
  background: var(--white);

  outline: none;

  border: ${props => props.border || '1px solid #A6AEBB'};
  border-radius: ${props => props.borderRadius || '8px'};

  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #a6aebb;

  &:focus {
    border: 1px solid #65bab6;
  }
  &:active {
    border: 1px solid var(--blue);
  }
`;
