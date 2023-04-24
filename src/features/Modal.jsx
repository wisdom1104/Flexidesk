import React, { useState } from 'react';
import styled from 'styled-components';
import {
  MoveModal,
  MoveModalBackground,
  MoveModalSubbtn,
  MoveModalTitle,
  MoveModalbtn,
} from '../features/space/SpaceStyles';
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
    <MoveModalBackground>
      <MoveModal>
        <MoveModalTitle>로그아웃 하시겠습니까?</MoveModalTitle>
        <MoveModalbtn
          onClick={() => {
            dispatch(isLoginActions.logout());
            navi('/')
            closeModal();
          }}
        >
          예
        </MoveModalbtn>
        <MoveModalSubbtn
          onClick={closeModal}
        >
          아니요
        </MoveModalSubbtn>
      </MoveModal>
    </MoveModalBackground>
  );
}

export default Modal;
