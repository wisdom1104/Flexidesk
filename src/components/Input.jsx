import React from 'react';
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
  width:100%;
  height:30px;
  display: block;
  height: ${props => props.heigth};
  padding: 0 10px;
  background: #FCF5F6;
  font-size: .8rem;
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