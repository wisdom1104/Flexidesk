import React, { useEffect, useState } from 'react';
import { Input } from '../../components/Input';
import { cookies } from '../../shared/cookies';
import { useNavigate } from 'react-router-dom';
import api from '../../axios/api';
import useTrueHook from '../../hooks/useTrueHook'
import CertificationCkeck from '../user/CertificationCkeck'

function SignUpUser() {
  // maxlength 설정
  
  // 가드
  useTrueHook();

  const [user, setUser] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    userName: '',
    certification: '',
  });

  const onChangeHandler = e => {
    const { value, name } = e.target;
    setUser(old => {
      return { ...old, [name]: value };
    });
  };

  const navi = useNavigate();

  const submitBtnHandler = async e => {
    e.preventDefault();
    try {
      const response = await api.post('/users/signup/user', user);
      alert(`${user.userName}님 회원가입을 축하합니다.`);
      navi('/login');
      return response;
    } catch (error) {
      const errorMsg = error.response.data.message;
      alert(`${errorMsg}`);
      return error;
    }
  };



  return (
    <form onSubmit={submitBtnHandler}>
      <h3>회원가입</h3>

      <p>회사 이메일</p>
      <Input
        type="email"
        value={user.email|| ''}
        onChange={onChangeHandler}
        name="email"
        placeholder="이메일을 입력하세요."
        required
      />

      <p>비밀번호</p>
      <Input
        type="password"
        value={user.password|| ''}
        onChange={onChangeHandler}
        name="password"
        placeholder="비밀번호를 입력하세요."
        required
      />

      <p>비밀번호 확인</p>
      <Input
        type="password"
        value={user.passwordCheck|| ''}
        onChange={onChangeHandler}
        name="passwordCheck"
        placeholder="비밀번호를 한번 더 입력해주세요."
        required
      />

      <CertificationCkeck 
      certification={user.certification} 
      onChange={onChangeHandler}
      user={user}
      setUser={setUser}
      />

      <p>이름</p>
      <Input
        type="text"
        value={user.userName|| ''}
        onChange={onChangeHandler}
        name="userName"
        placeholder="사용하실 이름을 입력하세요."
        required
      />

      <button>시작하기</button>
    </form>
  );
}

export default SignUpUser;
