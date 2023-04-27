import React, { useState } from 'react';
import SelectModal from '../../features/SelectModal';
import { CommentBox } from '../../pages/Reservation/CalendarStyled';
import {  MoveModalSubbtn, MoveModalbtn } from '../../shared/SpaceStyles';
import { useDispatch } from 'react-redux';
import { __deleteAllManagement } from '../../redux/modules/allManagementSlice';
import Modal from '../../components/Modal';
import { StSmallFont } from '../../pages/Welcome/WelcomeStyled';
import { useModal } from '../../hooks/useModalHook';

function ManagementChange({ item }) {

  const [isSelectModalOpen, openSelectModal, closeSelectModal] = useModal();
  const [isDeleteModalOpen, openDeleteModal, closeDeleteModal] = useModal();
  
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(__deleteAllManagement(item.userId));
    closeDeleteModal();
  };

  return (
    <>
      <CommentBox>
        <StSmallFont width>권한 변경</StSmallFont>

        <div 
        style={{
          display:'flex',
          flexDirection:'row',
          gap: '10px'
        }}>
          <MoveModalSubbtn
            onClick={openSelectModal}
            width="84px"
            height="35px"
            left="18px"
            top="130px"
            position="sticky"
            padding='8px, 16px, 8px, 16px'
          >
            직급 수정
          </MoveModalSubbtn>

          {isSelectModalOpen && (
            <SelectModal setIsModal={closeSelectModal} role={item.role} userId={item.userId} ></SelectModal>
          )}

          <MoveModalbtn
            onClick={openDeleteModal}

            width="84px"
            height="35px"
            left="100px"
            top="130px"
            position="sticky"
            padding='8px, 16px, 8px, 16px'
          >
            인원 삭제
          </MoveModalbtn>

        {isDeleteModalOpen && (
        <Modal
          setIsModal={closeDeleteModal} modalTitle="삭제 하시겠습니까?" onButtonClick={handleLogout}
        ></Modal>
      )}

        </div>
      </CommentBox>
    </>
  );
}

export default ManagementChange;
