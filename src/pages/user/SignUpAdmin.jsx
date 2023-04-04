import React, { useEffect, useState } from 'react';
import { Input } from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import { cookies } from '../../shared/cookies';
import api from '../../axios/api';

function SignUpAdmin() {
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
  const sumbitBtnHandler = async (e) => {
    e.preventDefault();
    try {
        console.log('유저 !!!', admin);
        const response = await api.post('/users/signup/admin', admin);
        console.log(response);
        console.log(response.data);
        console.log(response.data.message);

        alert(`${admin.userName}님 회원가입을 축하합니다.`)
        navi('/login');
        return response;
    } 
    catch (error) {
      // alert('비밀번호가 일치하지 않습니다.');
      const errorMsg = error.response.data.message;
      console.log(error);
      console.log(error.response);

      alert(`${errorMsg}`);
      return error;
  }
}

  // 토큰값으로 페이지 위치조절 (가드)
  useEffect(() => {
    const token = cookies.get("token");
    if (token) {
      navi("/");
    }
  }, []);

  return (
    <>
      <form onSubmit={sumbitBtnHandler}>
        <h3>관리자 회원가입</h3>

        <p>회사 이메일</p>
        <Input
          type="email"
          value={admin.email}
          onChange={onChangeHandler}
          name="email"
          placeholder="이메일을 입력하세요."
          required
        />
        <button type="button">인증하기</button>
    
      <p>이메일 인증</p>
        <Input
          type="text"
          value={admin.certification}
          onChange={onChangeHandler}
          name="certification"
          placeholder="인증번호를 입력하세요."
          required
        />
        <p>비밀번호</p>
        <Input
          type="password"
          value={admin.password}
          onChange={onChangeHandler}
          name="password"
          placeholder="비밀번호를 입력하세요."
          required
        />

        <p>비밀번호 확인</p>
        <Input
          type="password"
          value={admin.passwordCheck}
          onChange={onChangeHandler}
          name="passwordCheck"
          placeholder="비밀번호를 한번 더 입력해주세요."
          required
        />

        <p>이름</p>
        <Input
          type="text"
          value={admin.userName}
          onChange={onChangeHandler}
          name="userName"
          placeholder="사용하실 이름을 입력하세요."
          required
        />

        <p>회사</p>
        <Input
          type="text"
          value={admin.companyName}
          onChange={onChangeHandler}
          name="companyName"
          placeholder="회사를 알려주세요."
          required
        />

        <button type="submit">시작하기</button>
      </form>
    </>
  );
}

export default SignUpAdmin;
