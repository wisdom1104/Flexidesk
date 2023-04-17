import React,{useState} from 'react';
import styled from 'styled-components'

export const Input = ({type, value, onChange, name, placeholder}) => {
  
    return (
      <>
      <StInput 
          required
          type={type}
          value={value}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          
          />
      </>
    )
  };

  const StInput = styled.input`
  width: 400px;
  height: 60px;

  display: block;
  height: ${props => props.heigth};
  padding: 0 10px;
  background: #fff;

  border: 1px solid #A6AEBB;;
  border-radius: 8px;
  
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #A6AEBB;

  flex: none;
  order: 0;
  flex-grow: 0;
`