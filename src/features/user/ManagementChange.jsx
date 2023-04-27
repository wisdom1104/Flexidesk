import React, { useState } from 'react';
import SelectModal from '../../features/SelectModal';
import { CommentBox } from '../../pages/Reservation/CalendarStyled';
import {  MoveModalSubbtn, MoveModalbtn } from '../../shared/SpaceStyles';
import { useDispatch } from 'react-redux';
import { __deleteAllManagement } from '../../redux/modules/allManagementSlice';
import Modal from '../../components/Modal';

function ManagementChange({ item }) {

  const [isSelectModalOpen, setIsSelectModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const dispatch = useDispatch();

  const openSelectModal = () => {
    setIsSelectModalOpen(true);
  };

  const closeSelectModal = () => {
    setIsSelectModalOpen(false);
  };

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleLogout = () => {
    dispatch(__deleteAllManagement(item.userId));
    closeDeleteModal();
  };

  return (
    <>
      <CommentBox>
        <p>권한 변경</p>

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
