import React from 'react';
import styled from 'styled-components';

export const SignUpIconBtnInput = ({
  type,
  value,
  innerText,
  placeholder,
  onChange,
  onClick,
}) => {
  return (
    <Container>
      <InlineInput
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <InlinButton type="button" onClick={onClick}>
        {innerText}
      </InlinButton>
    </Container>
  );
};

const Container = styled.div`
  width: 420px;
  height: 35px;
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const InlineInput = styled.input`
  width: 80%;
  height: 50px;
  display: block;

  border: 1px solid #a6aebb;
  border-radius: 8px;

  font-size: 1em;
  padding: 0 10px;
  padding-left: 5px;

  outline: none;
  box-sizing: border-box;

  font-weight: 700;
  line-height: 17px;
  color: #a6aebb;
  &:focus {
    border: 1px solid #65bab6;
  }
  &:active {
    border: 1px solid var(--blue);
  }
`;

const InlinButton = styled.input`
  width: 20%;
  height: 48px;

  outline: none;
  margin-left: 10px;
  padding: 8px 16px;

  cursor: pointer;

  border: 1px solid #a6aebb;
  border-radius: 4px;

  font-weight: 500;
  font-size: 12px;
  line-height: 15px;

  color: var(--white);
  background: var(--blue);
  &:hover {
    background: var(--lightblue);
  }
  &:focus {
    color: var(--blue);
    background: var(--white);
    border: 1px solid var(--blue);
  }
`;
