import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MainMintBtn from './button/MainMintBtn';
import SubMintBtn from './button/SubMintBtn';
import Text from './Text';

function Modal({ setIsModal, modalTitle, onButtonClick, redirectPath }) {
  const navi = useNavigate();

  const closeModal = () => {
    setIsModal(false);
  };

  const handleButtonClick = () => {
    onButtonClick();
    navi(redirectPath);
    closeModal();
  };

  return (
    <StModalFullBackground>
      <StModalWrapper>
        <StModal>
          <StModalTitle>
            <Text shape="T18_700" ta="center">
              {modalTitle}
            </Text>
          </StModalTitle>
          <MainMintBtn
            onClick={handleButtonClick}
            position="absolute"
            w="75px"
            h="33px"
            left="16px"
            top="121px"
            pd="4px 10px"
          >
            <Text shape="T14_700_17" color="var(--white)">
              네
            </Text>
          </MainMintBtn>
          <SubMintBtn
            onClick={closeModal}
            position="absolute"
            w="75px"
            h="33px"
            left="97px"
            top="121px"
            pd="4px 10px"
          >
            <Text shape="T14_700_17" color="var(--mint_002)">
              아니요
            </Text>
          </SubMintBtn>
        </StModal>
      </StModalWrapper>
    </StModalFullBackground>
  );
}

export default Modal;

export const StModalFullBackground = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  z-index: 50;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  border-radius: 8px;
  margin: auto;
`;

export const StModalWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vw;
  padding: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

export const StModal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
  border: 1px solid #def1ef;
  box-shadow: 0px 5px 40px rgba(140, 159, 157, 0.25);
  border-radius: 8px;
  padding: 2px;
  width: ${props => props.width || '188px'};
  height: ${props => props.height || '174px'};
`;

export const StModalTitle = styled.div`
  position: absolute;
  width: 142px;
  height: 54px;
  left: 23px;
  top: 41px;
`;
