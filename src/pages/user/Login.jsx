import React, { useEffect, useState } from 'react'
import { Input } from '../../components/Input'
import { cookies } from '../../shared/cookies';
import { useNavigate } from 'react-router-dom';
import instance from '../../axios/api';
import { useDispatch, useSelector } from 'react-redux';
import { __login } from '../../redux/modules/loginSlice';
import jwt_decode from "jwt-decode";

function Login() {
  // alert 에러메세지 띄어주기!!!
  // navigate로 메인페이지 보내주기
  // const { users } = useSelector((state) => state.users);

  const [user,setUser]= useState({
    email:'',
    password:'',
  });

  console.log('로그인 유저->>>>>>',user);

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setUser((old) => {
      return { ...old, [name]: value };
    });
  };

  const navi = useNavigate();

  const dispatch = useDispatch();

  const onsumbitHandler = async (e) => {
    e.preventDefault();
    
  //  const responce = await dispatch(__login(user));
  //  console.log(user);
  //  navi('/')
  //  console.log(responce);
  //  if (responce.type === "LOGIN/fulfilled") {
  //   dispatch();
  //   alert("로그인 되었습니다.");
  //   // 머지하고 바꾸기
  //   navi('/')
  //  } else {
  //   alert('로그인 실패하였습니다. 다시 !!!')
  //  }

  try{
    const responce = await instance.post("/login",user);
    console.log(responce.headers
.      authorization);
    // const payload = jwt_decode(responce.data.token);
    const payload = jwt_decode(responce.headers
      .      authorization);

    // cookies.set("token", responce.data.token, { path: "/" });
    cookies.set("token", responce.headers
    .      authorization, { path: "/" });

    
    navi('/')
  }
  catch(e) {
    alert('로그인 실패하였습니다.')
  }
  };

// 가드
  useEffect(() => {
    const token = cookies.get("token");
    if (token) {
      navi("/");
    }
  }, []);

  return (
    <div>
      <form onSubmit={onsumbitHandler}>
      <p>이메일</p>
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
      <button> 확인 </button>
      </form>
    </div>
  )
}

export default Login