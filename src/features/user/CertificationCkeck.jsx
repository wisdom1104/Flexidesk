import React from 'react';
import api from '../../axios/api';
import {  Container, InlinButton, InlineInput } from '../../pages/user/UserStyled';
import { StSmallFont } from '../../pages/Welcome/WelcomeStyled';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CertificationCkeck({ user,certification, onChange }) {


  // form태그 핸들러
  const submitBtnHandler = async e => {
    e.preventDefault();
    try {
      const response = await api.post('/users/signup/match', user);
      const newResponse = response.data.message;
      toast(`${newResponse}`);
      return newResponse;
    } catch (error) {
      const errorMsg = error.response.data.message;
      toast(`${errorMsg}`);
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
        회사 인증번호
      </StSmallFont>
      </Container>

      <Container>
      <InlineInput
        type="text"
        value={certification}
        onChange={onChange}
        name="certification"
        placeholder=" 인증번호는 관리자에게 문의하세요."
        required
      />

      <InlinButton 
      type="button" 
      onClick={submitBtnHandler}
      value="인증확인"
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
    </>
  );
}

export default CertificationCkeck;
