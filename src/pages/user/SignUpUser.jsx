import React, { useEffect, useState } from 'react';
import { Input } from '../../components/Input';
import { cookies } from '../../shared/cookies';
import { useNavigate } from 'react-router-dom';
import api from '../../axios/api';
import TrueGuard from '../../hooks/TrueGuard'
import CertificationCkeck from '../user/CertificationCkeck'

// 유효성검사 라이브러리
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

function SignUpUser() {
  // alert 에러메세지 띄어주기!!!
  // maxlength 설정

  const [user, setUser] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    userName: '',
    certification: '',
  });

  console.log('유저!!!!!!->', user);

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

  // 토큰값으로 페이지 위치조절 (가드)
  TrueGuard();

  // 정규식 유효성 검사를 수행
  const schema = yup.object().shape({
    userName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup
      .string()
      .required()
      .min(8)
      .matches(
        /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/,
        '비밀번호는 숫자, 영문자, 특수문자를 모두 포함해야 합니다.',
      ),
    passwordCheck: yup
      .string()
      .oneOf([yup.ref('password'), null])
      .min(8)
      .matches(
        /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/,
        '비밀번호는 숫자, 영문자, 특수문자를 모두 포함해야 합니다.',
      ),
    certification: yup.string().required(),
  });

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

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
      {errors.certification && <span>인증번호를 입력하세요.</span>}

      <p>비밀번호</p>
      <Input
        type="password"
        value={user.password|| ''}
        onChange={onChangeHandler}
        name="password"
        placeholder="비밀번호를 입력하세요."
        required
      />
      {errors.password && <span>비밀번호 형식에 맞게 입력하세요.</span>}

      <p>비밀번호 확인</p>
      <Input
        type="password"
        value={user.passwordCheck|| ''}
        onChange={onChangeHandler}
        name="passwordCheck"
        placeholder="비밀번호를 한번 더 입력해주세요."
        required
      />
      {errors.passwordCheck && <span>비밀번호가 맞는지 확인해주세요.</span>}

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
      {errors.userName && <span>사용하실 이름을 입력하세요.</span>}

      <button>시작하기</button>
    </form>
  );
}

export default SignUpUser;
