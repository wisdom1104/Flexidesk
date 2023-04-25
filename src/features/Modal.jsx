import React from 'react';
import {
  ModalFullBackground,
  MoveModal,
  MoveModalSubbtn,
  MoveModalTitle,
  MoveModalbtn,
} from '../shared/SpaceStyles';
import { useDispatch } from 'react-redux';
import { isLoginActions } from '../redux/modules/loginSlice';
import { useNavigate } from 'react-router-dom';

function Modal({ setIsModal }) {
  const dispatch = useDispatch();
  const navi = useNavigate();

  const closeModal = () => {
    setIsModal(false);
  };

  const openModal = () => {
    setIsModal(true);
  };

  return (
    <ModalFullBackground>
      <MoveModal>
        <MoveModalTitle>
          로그아웃 <br /> 하시겠습니까?
        </MoveModalTitle>

        <MoveModalbtn
          onClick={() => {
            dispatch(isLoginActions.logout());
            navi('/');
            closeModal();
          }}
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
    </ModalFullBackground>
  );
}

export default Modal;
