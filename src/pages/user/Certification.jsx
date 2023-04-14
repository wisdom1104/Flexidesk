import React, { useState } from 'react';
import { Input } from '../../components/Input';
import api from '../../axios/api';
import { StSmallFont } from '../Welcome/WelcomeStyled';
import { StSmallButton } from './UserStyled';

function Certification({email,onChange,admin,setAdmin}) {

  // form태그 핸들러
  // 로딩 띄우기 -> 로딩 이쁜걸로 ~~~
  const submitBtnHandler = async e => {
    e.preventDefault();
    try {
      const response = await api.post('/users/signup/email', admin);
      console.log('인증번호--->>>>>>', response.data.split(':')[1]);
      const data = response.data
      alert(`${data}`)
      return data;
    } catch (error) {
      const errorMsg = error.response.data.message;
      alert(`${errorMsg}`);
      setAdmin('');
      return error;
    }
  };

  return (
    <div>
      <StSmallFont
      width
      align="start"
      fontSize='0.875rem'
      weight='700'
      >회사 이메일</StSmallFont>
      <Input
        type="email"
        value={email}
        onChange={onChange}
        name="email"
        placeholder="이메일을 입력하세요."
        required
      />
      <StSmallButton 
      type='button'
      onClick={submitBtnHandler}>클릭</StSmallButton>
    </div>
  );
}

export default Certification;
