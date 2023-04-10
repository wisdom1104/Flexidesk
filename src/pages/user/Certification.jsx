import React, { useState } from 'react';
import { Input } from '../../components/Input';
import api from '../../axios/api';

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
      <p>회사 이메일</p>
      <Input
        type="email"
        value={email}
        onChange={onChange}
        name="email"
        placeholder="이메일을 입력하세요."
        required
      />
      <button 
      type='button'
      onClick={submitBtnHandler}>클릭시 인증번호가 나올예정</button>
    </div>
  );
}

export default Certification;
