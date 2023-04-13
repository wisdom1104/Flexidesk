import React,{useState} from 'react'
import api from '../axios/api';
import { cookies } from '../shared/cookies';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';


export const useSignUp = (payload) => {

  const navi = useNavigate();

  const signUpApi = async (user) => {
    console.log('hook->>>>>',user);
    try {
      const response = await api.post('/users/login', user);
      const token = response.headers.authorization;
      const newtoken = token.split(' ')[1];
      const payload = jwt_decode(newtoken);

      cookies.set('token', newtoken, { path: '/' , maxAge:3540,});
      cookies.set('userId', payload.id, { path: '/' , maxAge:3540,});
      cookies.set('companyName', String(payload.companyName), { path: '/' , maxAge:3540, });
      cookies.set('role', payload.role, { path: '/' , maxAge:3540,});
      
      navi('/adminspace');
      console.log('payload',payload);
      return payload;

    } catch (e) {
      const errorMsg = e.response.data.message;
      alert(`${errorMsg}`);
      return e
    }
  }

  // 관리자 회원가입
  const [admin, setAdmin] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    userName: '',
    companyName: '',
    certification: '',
  });

// 일반 회원가입
const [user, setUser] = useState({
  email: '',
  password: '',
  passwordCheck: '',
  userName: '',
  certification: '',
});

const submitHandler = (e) => {
  e.preventDefault();
  if(
    admin.email === "" ||
    admin.password === "" ||
    admin.passwordCheck === "" ||
    admin.userName === "" ||
    admin.companyName === "" ||
    admin.certification === "" ||

    user.email === "" ||
    user.password === "" ||
    user.passwordCheck === "" ||
    user.userName === "" ||
    user.certification === "" ||
  ) {
    alert("빈 칸을 작성해 주세요.");
    return;
  }
  if (payload.probableEmail && payload.probableNick) {
    await signUpApi(user);
    navigate("/");
  }
};
return [user, setUser, submitHandler];
};

// 이메일 유효성 검사
export const useValidEmail = () => {
  const [emailMsg, setEmailMsg] = useState("");
  const validEmail = (e) => {
    const email = e.target.value;
    const isValidEmail =
      /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
    if (isValidEmail) {
      setEmailMsg(null);
    } else {
      setEmailMsg("이메일 형식에 맞지 않습니다.");
    }
  };
  return [emailMsg, validEmail];
};

// 닉네임 유효성 검사
export const useValidNick = () => {
  const [nickMsg, setNickMsg] = useState("");
  const validNick = (e) => {
    const nick = e.target.value;
    const isValidNick = /^[가-힣a-zA-Z0-9]{2,15}$/.test(nick);
    if (isValidNick) {
      setNickMsg(null);
      return;
    } else {
      setNickMsg("닉네임은 2~15글자, 한글, 알파벳, 숫자만 입력 가능합니다");
      return;
    }
  };
  return [nickMsg, validNick];
};

//비밀번호 유효성 검사
export const useValidPassword = () => {
  const [passwordMsg, setPasswordMsg] = useState("");
  const validPassword = (e) => {
    const password = e.target.value;
    const isValidPassword =
      /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[a-zA-Z\d!@#$%^&*()_+]{8,15}$/.test(
        password
      );
    if (isValidPassword) {
      setPasswordMsg(null);
    } else {
      setPasswordMsg(
        "비밀번호는 숫자와 영어 소문자와 특수문자를 사용해 8~15자리로 입력해주세요."
      );
    }
  };
  return [passwordMsg, validPassword];
};

// 비밀번호 일치 검사
export const usePasswordCheck = (payload) => {
  const [passwordCheckPwMsg, setpasswordCheckPwMsg] = useState("");
  const onChangePasswordCheck = (e) => {
    e.preventDefault();
    const checkPw = e.target.value;

    if (payload.length >= 1 && payload !== checkPw) {
      setpasswordCheckPwMsg("비밀번호가 일치하지 않습니다.");
    }
    if (payload.length >= 1 && payload === checkPw) {
      setpasswordCheckPwMsg("비밀번호가 일치합니다.");
    }
  };
  return [passwordCheckPwMsg, onChangePasswordCheck];
};