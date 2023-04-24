import React from 'react';
import {
  ModalFullBackground,
  MoveModal,
  MoveModalSubbtn,
  MoveModalTitle,
} from '../features/space/SpaceStyles';

function LoginModal({ setIsModal }) {


    const closeModal = () => {
        setIsModal(false);
      };

    const openModal = () => {
        setIsModal(true);
      };

  return (
    <ModalFullBackground>
      <MoveModal>

        <MoveModalTitle>다시 입력해주세요.</MoveModalTitle>

        <MoveModalSubbtn
          onClick={closeModal}
        >
        확인
        </MoveModalSubbtn>
      </MoveModal>
    </ModalFullBackground>
  );
}

export default LoginModal;
