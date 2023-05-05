import React from 'react';
import {
  ModalFullBackground,
  MoveModal,
  MoveModalSubbtn,
  MoveModalTitle,
  MoveModalbtn,
  ModalWrapper,
} from '../shared/SpaceStyles';

import { useNavigate } from 'react-router-dom';
import MainMintBtn from './button/MainMintBtn';
import SubMintBtn from './button/SubMintBtn';

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
    <ModalFullBackground>
      <ModalWrapper>
        <MoveModal>
          <MoveModalTitle>{modalTitle}</MoveModalTitle>
          <MainMintBtn
            onClick={handleButtonClick}
            position="absolute"
            w="75px"
            h="33px"
            left="16px"
            top="121px"
            pd="4px 10px"
          >
            네
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
            아니요
          </SubMintBtn>
        </MoveModal>
      </ModalWrapper>
    </ModalFullBackground>
  );
}

export default Modal;
