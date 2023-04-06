import React, { useEffect, useState } from 'react';
import { Input } from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import { cookies } from '../../shared/cookies';
import api from '../../axios/api';

// 유효성검사 라이브러리
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Certification from './Certification';

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
  const submitBtnHandler = async e => {
    e.preventDefault();
    try {
      const response = await api.post('/users/signup/admin', admin);
      alert(`${admin.userName}님 회원가입을 축하합니다.`);
      navi('/login');
      return response;
    } catch (error) {
      const errorMsg = error.response.data.message;
      alert(`${errorMsg}`);
      return error;
    }
  };

  // 토큰값으로 페이지 위치조절 (가드)
  useEffect(() => {
    const token = cookies.get('token');
    if (token) {
      navi('/');
    }
  }, []);

  // 정규식 유효성 검사를 수행
  const schema = yup.object().shape({
    userName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup
      .string()
      .required()
      .min(8)
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/i,
        '비밀번호는 숫자, 소문자, 특수문자를 모두 포함해야 합니다.',
      ),
    passwordCheck: yup
      .string()
      .oneOf([yup.ref('password'), null])
      .min(8)
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/i,
        '비밀번호는 숫자, 소문자, 특수문자를 모두 포함해야 합니다.',
      ),
  });

  const {
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <>
      <form onSubmit={submitBtnHandler}>
        <h3>관리자 회원가입</h3>

        <Certification onChangeHandler={onChangeHandler} admin={admin} />
        {/* <p>회사 이메일</p>
      <Input
        type="email"
        value={admin.email}
        onChange={onChangeHandler}
        name="email"
        placeholder="이메일을 입력하세요."
        required
      />
      <button type="submit">인증하기</button> */}

        <p>이메일 인증</p>
        <Input
          type="text"
          value={admin.certification}
          onChange={onChangeHandler}
          name="certification"
          placeholder="인증번호를 입력하세요."
          required
        />
        {errors.certification && <span>인증번호를 입력하세요.</span>}

        <p>비밀번호</p>
        <Input
          type="password"
          value={admin.password}
          onChange={onChangeHandler}
          name="password"
          placeholder="영문, 숫자, 특수문자를 조합하여 입력하세요.(8~16자)"
          required
        />
        {errors.password && <span>비밀번호 형식에 맞게 입력하세요.</span>}

        <p>비밀번호 확인</p>
        <Input
          type="password"
          value={admin.passwordCheck}
          onChange={onChangeHandler}
          name="passwordCheck"
          placeholder="영문, 숫자, 특수문자를 조합하여 입력하세요.(8~16자)"
          required
        />
        {errors.passwordCheck && <span>비밀번호가 맞는지 확인해주세요.</span>}

        <p>이름</p>
        <Input
          type="text"
          value={admin.userName}
          onChange={onChangeHandler}
          name="userName"
          placeholder="사용하실 이름을 입력하세요."
          required
        />
        {errors.userName && <span>사용하실 이름을 입력하세요.</span>}

        <p>회사</p>
        <Input
          type="text"
          value={admin.companyName}
          onChange={onChangeHandler}
          name="companyName"
          placeholder="회사를 입력하세요."
          required
        />
        {errors.companyName && <span>회사를 입력하세요.</span>}

        <button type="submit">시작하기</button>
      </form>
    </>
  );
}

export default SignUpAdmin;
