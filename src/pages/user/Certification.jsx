import React, { useState } from 'react';
import { Input } from '../../components/Input';
import api from '../../axios/api';
import { StSmallFont } from '../Welcome/WelcomeStyled';
import {
  Container,
  InlinButton,
  InlineInput,
  StSmallButton,
} from './UserStyled';

function Certification({ admin }) {

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    if (!emailRegex.test(value)) {
      setEmailError("올바른 이메일 형식이 아닙니다.");
    } else {
      setEmailError("");
    }
  }


  const submitBtnHandler = async e => {
    e.preventDefault();

    try {
      const response = await api.post('/users/signup/email', admin);
      const data = response.data;
      alert(`${data}`);
      return data;
    } catch (error) {
      const errorMsg = error.response.data.message;
      alert(`${errorMsg}`);
      return error;
    }
  };

  return (
    <>
      <Container>
        <StSmallFont
          width
          align="start"
          fontSize="0.875rem"
          weight="700"
          marginBottom="10px"
        >
          회사 이메일
        </StSmallFont>
      </Container>

      <Container>
        <InlineInput
          type="email"
          value={email}
          onChange={handleEmailChange}
          name="email"
          placeholder="이메일을 입력하세요."
          required
        />


        <InlinButton
          type="button"
          onClick={submitBtnHandler}
          value="인증받기"
        />
      </Container>        
      {emailError && <StSmallFont width
                      align="start"
                      fontSize="0.875rem"
                      weight="700"
                      marginTop='10px'
                     color='red'>{emailError}</StSmallFont>}
    </>
  );
}

export default Certification;
