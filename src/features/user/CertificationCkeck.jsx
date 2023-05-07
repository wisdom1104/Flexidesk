import React from 'react';
import api from '../../axios/api';
import { BlueBtn } from '../../components/button/BlueBtn';
import Text from '../../components/Text';
import { Container, InlineInput } from '../../pages/user/UserStyled';

function CertificationCkeck({ user, certification, onChange }) {
  const submitBtnHandler = async e => {
    e.preventDefault();
    try {
      const response = await api.post('/users/signup/match', user);
      const newResponse = response.data.message;
      alert(`${newResponse}`);
      return newResponse;
    } catch (error) {
      const errorMsg = error.response.data.message;
      alert(`${errorMsg}`);
      return error;
    }
  };

  return (
    <>
      <Container>
        <Text shape="T14_700" color="var(--blue_004)">
          회사 인증번호
        </Text>
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
        <BlueBtn type="button" onClick={submitBtnHandler} w="25%" h="50px">
          인증확인
        </BlueBtn>
      </Container>
    </>
  );
}

export default CertificationCkeck;
