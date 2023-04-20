import React from 'react';
import api from '../../axios/api';
import {  Container, InlinButton, InlineInput } from './UserStyled';
import { StSmallFont } from '../Welcome/WelcomeStyled';

function CertificationCkeck({ user,certification, onChange }) {


  // form태그 핸들러
  const submitBtnHandler = async e => {
    e.preventDefault();
    try {
      const response = await api.post('/users/signup/match', user);
      const newResponse = response.data.message;
      alert(`${newResponse}`);
      return newResponse;
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
        인증번호
      </StSmallFont>
      </Container>

      <Container>
      <InlineInput
        type="text"
        value={certification || ''}
        onChange={onChange}
        name="certification"
        placeholder="인증번호를 입력하세요."
        required
      />

      <InlinButton 
      type="button" 
      onClick={submitBtnHandler}
      value="인증받기"
      />
    </Container>
    </>
  );
}

export default CertificationCkeck;
