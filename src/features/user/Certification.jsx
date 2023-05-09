import React from 'react';
import api from '../../axios/api';
import ValidationError from '../../components/form/ValidationError';
import Text from '../../components/Text';
import { BlueBtn } from '../../components/button/BlueBtn';
import { Container, InlineInput } from '../../pages/user/UserStyled';

function Certification({ admin, email, onChange, errors }) {
  const onSubmitHandler = async e => {
    e.preventDefault();

    try {
      const response = await api.post('/users/signup/email', admin);
      const newResponse = response.data.message;
      alert(`${newResponse}`);
      return response;
    } catch (error) {
      if (error.response.status === 401) {
        return alert('인증에 실패하였습니다.');
      }
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

        <BlueBtn type="button" onClick={onSubmitHandler} w="25%" h="50px">
          <Text shape="T14_700" color="var(--white)">
            인증확인
          </Text>
        </BlueBtn>
      </Container>
      <ValidationError value={errors.email} />
    </>
  );
}

export default Certification;
