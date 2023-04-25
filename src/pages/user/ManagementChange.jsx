import React, { useState } from 'react';
import SelectModal from '../../features/SelectModal';
import { CommentBox, DelBtn, PathBtn } from '../Reservation/CalendarStyled';
import { MoveModalSubbtn, MoveModalbtn } from '../../shared/SpaceStyles';

function ManagementChange({ item, allManagementId }) {
  //모달이 컴포넌트 안에 있어야 함
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
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
            onClick={() => openModal(allManagementId)}
            width="84px"
            height="35px"
            left="18px"
            top="130px"
            position="sticky"
            padding='8px, 16px, 8px, 16px'
          >
            직급 수정
          </MoveModalSubbtn>

          {isModal ? (
            <SelectModal setIsModal={setIsModal} role={item.role}></SelectModal>
          ) : null}

          <MoveModalbtn
            width="84px"
            height="35px"
            left="100px"
            top="130px"
            position="sticky"
            padding='8px, 16px, 8px, 16px'
          >
            인원 삭제
          </MoveModalbtn>
        </div>
      </CommentBox>
    </>
  );
}

export default ManagementChange;
