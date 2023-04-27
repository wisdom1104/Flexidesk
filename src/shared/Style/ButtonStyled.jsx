import styled from 'styled-components'

const ButtonStyled = {
    //로그인/회원가입 등 사용하는 버튼
  StBlueButton : styled.button`
  width: 312px;
  height: 80px;
  left: 392px;
  top: 632px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 30px 60px;

  color: var(--white);
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;

  background: linear-gradient(276.35deg, var(--blue) 10.61%, var(--lightblue)85.36%);
  border-radius: 64px;
  &:hover {
    background: var(--lightblue);
  }
  &:focus {
    background: var(--blue);
  }
    `
  };

export default ButtonStyled