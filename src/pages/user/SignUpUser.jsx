import React, { useEffect, useState } from 'react';
import { Input } from '../../components/Input';
import { cookies } from '../../shared/cookies';
import { useNavigate } from 'react-router-dom';
import instance from '../../axios/api';

function SignUpUser() {
  // alert 에러메세지 띄어주기!!!
  // maxlength 설정

  const [user,setUser]= useState({
    email:'',
    password:'',
    passwordCheck:'',
    userName:'',
    certification:'',
  });

  console.log('유저!!!!!!->',user);

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setUser((old) => {
      return { ...old, [name]: value };
    });
  };

  const navi = useNavigate();

  // form태그 핸들러
  // const sumbitHandler = async (e) => {
  //   e.preventDefault();
  //   try{
  //     if(user.password === user.passwordCheck) {
  //       console.log("확인안에 있는 유저 ->",user);
  //       await instance.post('/signup/user',user)
  //       navi('/login');
  //     }
  //   }
  //   catch (e) {
  //     alert('비밀번호가 일치하지 않습니다.')
  //   }
  // };

  const sumbitBtnHandler = async (e) => {
    e.preventDefault();
    try {
      if (user.password === user.passwordCheck) {
        console.log('직원 유저 !!!', user);

        await instance.post('/users/signup/user', user);
        alert(`${user.userName}님 회원가입을 축하합니다.`)
        navi('/login');
      }
    } catch (e) {
      alert('비밀번호가 일치하지 않습니다.');
      setUser('');
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
      <form onSubmit={sumbitBtnHandler}>
      <h3>회원가입</h3>

      <p>회사 이메일</p>
      <Input type="email" 
        value={user.email}
        onChange={onChangeHandler}
        name='email'
        placeholder='이메일을 입력하세요.'
        required/>

      <p>비밀번호</p>
      <Input type="password" 
        value={user.password}
        onChange={onChangeHandler}
        name='password'
        placeholder='비밀번호를 입력하세요.'
      required/>

      <p>비밀번호 확인</p>
      <Input type="password" 
        value={user.passwordCheck}
        onChange={onChangeHandler}
        name='passwordCheck'
        placeholder='비밀번호를 한번 더 입력해주세요.'
      required/>

      <p>회사 인증번호</p>
      <Input type="text"
        value={user.certification}
        onChange={onChangeHandler}
        name='certification'
        placeholder='인증번호를 입력해주세요.' 
      required/>

      <p>이름</p>
      <Input type="text"
        value={user.userName}
        onChange={onChangeHandler}
        name='userName'
        placeholder='사용하실 이름을 입력하세요.' 
      required/>

      <button>시작하기</button>
      </form>
  )
}

export default SignUpUser