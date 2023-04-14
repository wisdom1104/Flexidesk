import React, { useState } from 'react';
import { Input } from '../../components/Input';
import api from '../../axios/api';
import { StSmallButton } from './UserStyled';
import { StSmallFont } from '../Welcome/WelcomeStyled';

function CertificationCkeck({ certification, onChange, user, setUser }) {
  // form태그 핸들러
  // 로딩 띄우기 -> 로딩 이쁜걸로 ~~~
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
    <div>
      <StSmallFont width align="start" fontSize="0.875rem" weight="700">
        인증번호
      </StSmallFont>
      <Input
        type="text"
        value={certification || ''}
        onChange={onChange}
        name="certification"
        placeholder="인증번호를 입력하세요."
        required
      />
      <StSmallButton type="button" onClick={submitBtnHandler}>
        인증번호 확인
      </StSmallButton>
    </div>
  );
}

export default CertificationCkeck;
