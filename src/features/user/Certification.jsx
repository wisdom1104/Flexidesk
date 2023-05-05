import React from 'react';
import api from '../../axios/api';
import ValidationError from '../../components/form/ValidationError';
import Text from '../../components/Text';
import { BlueBtn } from '../../components/button/BlueBtn';
import { Container, InlineInput } from '../../pages/user/UserStyled2';

function Certification({ admin, email, onChange, errors }) {
  const submitBtnHandler = async e => {
    e.preventDefault();

    try {
      const response = await api.post('/users/signup/email', admin);
      const newResponse = response.data.message;
      alert(`${newResponse}`);
      return response;
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
          type="email"
          value={email}
          onChange={onChange}
          name="email"
          placeholder=" 이메일을 입력하세요."
          required
        />

        <BlueBtn type="button" onClick={submitBtnHandler} w="25%" h="50px">
          인증확인
        </BlueBtn>
      </Container>
      <ValidationError value={errors.email} />
    </>
  );
}

export default Certification;
