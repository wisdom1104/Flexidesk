import React, { useState } from 'react';
import api from '../../axios/api';
import { StSmallFont } from '../../pages/Welcome/WelcomeStyled';
import {
  Container,
  InlinButton,
  InlineInput,
} from '../../pages/user/UserStyled';
import ValidationError from '../../components/form/ValidationError';

function Certification({ admin, email, onChange, errors }) {
  const submitBtnHandler = async e => {
    e.preventDefault();

    try {
      const response = await api.post('/users/signup/email', admin);
      const newResponse = response.data.message;
      alert(`${newResponse}`);
      return response;
    } catch (error) {
      const errorMsg = error.response.data.message;
      alert(`${errorMsg}`);
      return error;
    }
  };

  return (
    <>
      <Container>
        <StSmallFont width align="start" fontSize="0.875rem" weight="700">
          회사 이메일
        </StSmallFont>
      </Container>

      <Container>
        <InlineInput
          type="email"
          value={email}
          onChange={onChange}
          name="email"
          placeholder=" 이메일을 입력하세요."
          required
        />

        <InlinButton
          type="button"
          onClick={submitBtnHandler}
          value="인증받기"
        />
      </Container>
      <ValidationError value={errors.email} />
    </>
  );
}

export default Certification;
