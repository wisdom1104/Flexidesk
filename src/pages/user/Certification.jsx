import React, { useState } from 'react'
import { Input } from '../../components/Input'
import api from '../../axios/api';

function Certification({admin}) {

    const [number,setNumber] = useState('');
    console.log(setNumber);

    const onChangeHandler = e => {
        const { value, name } = e.target;
        setNumber(old => {
          return { ...old, [name]: value };
        });
      };

      // form태그 핸들러
  const submitBtnHandler = async e => {
    e.preventDefault();
    console.log("여긴 되려나?????????????");

    try {
        console.log("여긴 되려나???");
        const response = await api.post('/users/signup/email', number);
        console.log("인증번호를 찾아라",response);
        return response;
    } 
    catch (error) {
      const errorMsg = error.response.data.message;
      alert(`${errorMsg}`);
      setNumber('')
      return error;
  }
};

return (
    <form onSubmit={submitBtnHandler}>
      <p>회사 이메일</p>
      <Input
        type="email"
        value={admin.email}
        onChange={onChangeHandler}
        name="email"
        placeholder="이메일을 입력하세요."
        required
      />
      <button type="submit">인증하기</button>
    </form>
  );
}

export default Certification