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

          <MoveModalbtn
            onClick={handleButtonClick}
            width="75px"
            height="33px"
            left="16px"
            top="121px"
            padding="4px 10px"
          >
            네
          </MoveModalbtn>
          <MoveModalSubbtn
            onClick={closeModal}
            width="75px"
            height="33px"
            left="97px"
            top="121px"
            padding="4px 10px"
          >
            아니요
          </MoveModalSubbtn>
        </MoveModal>
      </ModalWrapper>
    </ModalFullBackground>
  );
}

export default Modal;
