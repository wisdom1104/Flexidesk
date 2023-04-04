import React, { useEffect, useState } from 'react';
import { Input } from '../../components/Input';
import { cookies } from '../../shared/cookies';
import { useNavigate } from 'react-router-dom';
import api from '../../axios/api';
import { useDispatch } from 'react-redux';
import jwt_decode from 'jwt-decode';

function Login() {
  // alert 에러메세지 띄어주기!!!
  // navigate로 메인페이지 보내주기
  // const { users } = useSelector((state) => state.users);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  console.log('로그인 유저->>>>>>', user);

  const onChangeHandler = e => {
    const { value, name } = e.target;
    setUser(old => {
      return { ...old, [name]: value };
    });
  };

  const navi = useNavigate();

  const dispatch = useDispatch();

  const onsumbitHandler = async e => {
    e.preventDefault();

    //  const response = await dispatch(__login(user));
    //  console.log(user);
    //  navi('/')
    //  console.log(response);
    //  if (response.type === "LOGIN/fulfilled") {
    //   dispatch();
    //   alert("로그인 되었습니다.");
    //   // 머지하고 바꾸기
    //   navi('/')
    //  } else {
    //   alert('로그인 실패하였습니다. 다시 !!!')
    //  }

    // try {
    //   const response = await api.post('/login', user);
    //   console.log(response.headers.authorization);
    //   // const payload = jwt_decode(response.data.token);
    //   const payload = jwt_decode(response.headers.authorization);

    //   // cookies.set("token", response.data.token, { path: "/" });
    //   cookies.set('token', response.headers.authorization, { path: '/' });
    //   navi('/');
    // } catch (e) {
    //   alert('로그인 실패하였습니다.');
    // }
      const response = await api.post('/users/login', user);
      // console.log(response.headers.authorization);
      console.log(response.data.message);
      // const payload = jwt_decode(response.data.token);
      const token = response.headers.authorization
      const newtoken = token.split(" ")[1]
      // userId값이 token에 담겨온다! 근데 토큰값을 어떻게 id로 빼줄것인가..?!
      console.log(newtoken);
    
      const payload = jwt_decode(newtoken);
    try {
      // cookies.set("token", response.data.token, { path: "/" });
      cookies.set('token', response.headers.authorization, { path: '/' });
      cookies.set('userId', response.headers.id, { path: '/' });
  
      navi('/');
    } catch (e) {
      const errorMsg = e.response.data.message
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
      <form onSubmit={onsumbitHandler}>
        <p>이메일</p>
        <Input
          type="email"
          value={user.email}
          onChange={onChangeHandler}
          name="email"
          placeholder="이메일을 입력하세요."
          required
        />

        <p>비밀번호</p>
        <Input
          type="password"
          value={user.password}
          onChange={onChangeHandler}
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
