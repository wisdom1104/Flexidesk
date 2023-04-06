import React, { useEffect, useState } from 'react';
import { Input } from '../../components/Input';
import { cookies } from '../../shared/cookies';
import { useNavigate } from 'react-router-dom';
import api from '../../axios/api';
import { useDispatch } from 'react-redux';
import jwt_decode from 'jwt-decode';

function Login() {
  // alert 에러메세지 띄어주기!!!

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const loginChangeHandler = e => {
    const { value, name } = e.target;
    setUser(old => {
      return { ...old, [name]: value };
    });
  };

  const navi = useNavigate();

  const onsubmitHandler = async e => {
    e.preventDefault();
    try {
      const response = await api.post('/users/login', user);
      const token = response.headers.authorization;
      const newtoken = token.split(' ')[1];
      const payload = jwt_decode(newtoken);

      cookies.set('token', response.headers.authorization, { path: '/' });
      cookies.set('userId', payload.id, { path: '/' });
      console.log(payload.companyName);
      cookies.set('companyName', String(payload.companyName), { path: '/' });

      navi('/');
    } catch (e) {
      const errorMsg = e.response.data.message;
      alert(`${errorMsg}`);
    }
  };

  // 가드
  useEffect(() => {
    const token = cookies.get('token');
    if (token) {
      navi('/');
    }
  }, []);

  return (
    <div>
      <form onSubmit={onsubmitHandler}>
        <p>이메일</p>
        <Input
          type="email"
          value={user.email}
          onChange={loginChangeHandler}
          name="email"
          placeholder="이메일을 입력하세요."
          required
        />

        <p>비밀번호</p>
        <Input
          type="password"
          value={user.password}
          onChange={loginChangeHandler}
          name="password"
          placeholder="비밀번호를 입력하세요."
          required
        />
        <button> 확인 </button>
      </form>
    </div>
  );
}

export default Login;
