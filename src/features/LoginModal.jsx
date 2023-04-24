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

function LoginModal({ setIsModal }) {

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

        <MoveModalTitle>다시 입력해주세요.</MoveModalTitle>

        <MoveModalSubbtn
          onClick={closeModal}
        >
          예
        </MoveModalSubbtn>
      </MoveModal>
    </MoveModalBackground>
  );
}

export default LoginModal;
