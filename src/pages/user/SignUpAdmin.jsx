import React, { useEffect, useState } from 'react';
import { Input } from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import { cookies } from '../../shared/cookies';
import api from '../../axios/api';
import useTrueHook from '../../hooks/useTrueHook'
import Certification from './Certification';

function SignUpAdmin() {  

  // 가드
  useTrueHook();

  const [admin, setAdmin] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    userName: '',
    companyName: '',
    certification: '',
  });

  const onChangeHandler = e => {
    const { value, name } = e.target;
    setAdmin(old => {
      return { ...old, [name]: value };
    });
  };

  const navi = useNavigate();

  // form태그 핸들러
  const submitBtnHandler = async e => {
    e.preventDefault();
    try {
      const response = await api.post('/users/signup/admin', admin);
      alert(`${admin.userName}님 회원가입을 축하합니다.`);
      navi('/login');
      return response;
    } catch (error) {
      console.log(error);
      const errorMsg = error.response.data.message;
      console.log(errorMsg);
      alert(`${errorMsg}`);
      setAdmin('');
      return error;
    }
  };


  
  return (
    <>
      <form onSubmit={submitBtnHandler}>
        <h3>관리자 회원가입</h3>
       
        <Certification 
        email={admin.email}
        onChange={onChangeHandler}
        admin={admin}
        setAdmin={setAdmin}
        />

        <p>인증번호</p>
        <Input
          type="text"
          value={admin.certification|| ''}
          onChange={onChangeHandler}
          name="certification"
          placeholder="인증번호를 입력하세요."
          required
        />

        <p>비밀번호</p>
        <Input
          type="password"
          value={admin.password|| ''}
          onChange={onChangeHandler}
          name="password"
          placeholder="영문, 숫자, 특수문자를 조합하여 입력하세요.(8~16자)"
          required
        />
    
        <p>비밀번호 확인</p>
        <Input
          type="password"
          value={admin.passwordCheck|| ''}
          onChange={onChangeHandler}
          name="passwordCheck"
          placeholder="영문, 숫자, 특수문자를 조합하여 입력하세요.(8~16자)"
          required
        />

        <p>이름</p>
        <Input
          type="text"
          value={admin.userName|| ''}
          onChange={onChangeHandler}
          name="userName"
          placeholder="사용하실 이름을 입력하세요."
          required
        />

        <p>회사</p>
        <Input
          type="text"
          value={admin.companyName|| ''}
          onChange={onChangeHandler}
          name="companyName"
          placeholder="회사를 입력하세요."
          required
        />

        <button type="submit">시작하기</button>
      </form>
    </>
  );
}

export default SignUpAdmin;
