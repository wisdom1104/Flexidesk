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
  }

  // export const PostsButtons = ({text, onClick}) => {
  //   return (
  //   <StyledButton onClick={onClick}>{text}</StyledButton>
  //   )
  // }

  const StInput = styled.input`
  width: 400px;
  height: 60px;
  display: block;
  height: ${props => props.heigth};
  padding: 0 10px;
  background: #f2fafa;

  border: none;
  
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #A6AEBB;

  flex: none;
  order: 0;
  flex-grow: 0;
`

// const StyledButton = styled.button`
//   border: none;
//   cursor: pointer;

//   border-radius: 8px;
//   background-color: #fab1a0;
//   &:hover {
//     background-color:#FDE8E3;
//   }
//   &:active {
//     background-color:#e6a293;
//   }
//   color: #d63031;
//   font-weight: 400px;

//   height: 40px;
//   width: 100px;
// `;