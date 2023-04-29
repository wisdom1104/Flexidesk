import React, { useState } from 'react';
import api from '../../axios/api';
import { StSmallFont } from '../../pages/Welcome/WelcomeStyled';
import {
  Container,
  InlinButton,
  InlineInput,
  SterrorFont,
} from '../../pages/user/UserStyled';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Certification({ admin, email ,onChange, errors}) {
  
  const submitBtnHandler = async e => {
    e.preventDefault();

    try {
      const response = await api.post('/users/signup/email', admin);
      const newResponse = response.data.message;
      toast.success(`${newResponse}`);
      return response;
    } catch (error) {
      const errorMsg = error.response.data.message;      
      toast.error(`${errorMsg}`);
      return error;
    }
  };

  return (
    <>
      <Container>
        <StSmallFont
          width
          align="start"
          fontSize="0.875rem"
          weight="700"
          marginBottom="10px"
          >
          회사 이메일
        </StSmallFont>
      </Container>

      <Container>
        <InlineInput
          type="email"
          value={email}
          onChange={onChange}
          name="email"
          placeholder=" 이메일을 입력하세요."
          required
        />

        <InlinButton
          type="button"
          onClick={submitBtnHandler}
          value="인증받기"
        />
      </Container>

      <ToastContainer
        position="top-right" // 알람 위치 지정
        autoClose={3000} // 자동 off 시간
        hideProgressBar={false} // 진행시간바 숨김
        closeOnClick // 클릭으로 알람 닫기
        rtl={false} // 알림 좌우 반전
        pauseOnFocusLoss // 화면을 벗어나면 알람 정지
        draggable // 드래그 가능
        pauseOnHover // 마우스를 올리면 알람 정지
        theme="light"
        limit={1} // 알람 개수 제한
      />

      <SterrorFont>
        {errors.email && (
          <StSmallFont
            width
            align="start"
            fontSize="0.875rem"
            weight="400"
            color="red"
          >
            {errors.email}
          </StSmallFont>
        )}
      </SterrorFont>
    </>
  );
}

export default Certification;
