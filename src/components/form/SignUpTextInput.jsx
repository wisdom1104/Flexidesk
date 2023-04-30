import React from 'react'

import styled from 'styled-components';
import { StSmallFont } from '../../pages/Welcome/WelcomeStyled';
import { StTextInput } from '../../pages/user/UserStyled';

export const SignUpTextInput = ({type,value,placeholder,onChange,innerText,width,height,minlength,maxlength} ) => {  
  return (
    <StTextInput height={height}>
      <StSmallFont
        width
        align="start"
        fontSize="0.875rem"
        weight="700"
      >
        {innerText}
      </StSmallFont>
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
  )
}

const StInput = styled.input`
  display: block;
  width: 400px;
  margin: 0px;
  height: 50px;
  padding: 0 10px;
  background: var(--white);

  outline: none;

  border: 1px solid #A6AEBB;
  border-radius: 8px;

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
