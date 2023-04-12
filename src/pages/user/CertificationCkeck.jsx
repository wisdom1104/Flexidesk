import React, { useState } from 'react'
import { Input } from '../../components/Input'
import api from '../../axios/api';

function CertificationCkeck({certification,onChange,user,setUser}) {

    // form태그 핸들러
  // 로딩 띄우기 -> 로딩 이쁜걸로 ~~~
  const submitBtnHandler = async e => {
    e.preventDefault();
    try {
      console.log('되나?!!!!!??',user);
      const response = await api.post('/users/signup/match', user);
      const newResponse = response.data.message
      console.log('인증번호 일치여부 확인하기', newResponse);
      alert(`${newResponse}`)
      return newResponse;
    } catch (error) {
      const errorMsg = error.response.data.message;
      console.log('인증번호 일치여부 확인하기->>>>>', errorMsg);
      alert(`${errorMsg}`);
      setUser('');
      return error;
    }
  };

  return (
    <div>
        <p>인증번호</p>
        <Input
          type="text"
          value={certification|| ''}
          onChange={onChange}
          name="certification"
          placeholder="인증번호를 입력하세요."
          required
        />
        <button type="button" onClick={submitBtnHandler}>인증번호 확인</button>
    </div>
  )
}

export default CertificationCkeck