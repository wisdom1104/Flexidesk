import React,{useState} from 'react';
import styled from 'styled-components'

export const Input = ({type, value, onChange, name, placeholder, ...restProps}) => {
  
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
    )
  };

  const StInput = styled.input`
  width: 400px;
  height: 50px;

  display: block;  
  height: ${props => props.heigth};
  padding: 0 10px;
  background: #fff;

  outline: none;
  border: none;

  border: ${props => props.border || "1px solid #A6AEBB"};
  border-radius: ${props => props.borderRadius || '8px'};
  
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #A6AEBB;

`