import React, { useState } from 'react';
import SelectModal from '../../features/SelectModal';
import { CommentBox } from '../Reservation/CalendarStyled';
import { MoveModalSubbtn, MoveModalbtn } from '../../shared/SpaceStyles';
import { useDispatch } from 'react-redux';
import { __deleteAllManagement } from '../../redux/modules/allManagementSlice';
import { cookies } from '../../shared/cookies';

function ManagementChange({ item }) {
  //모달이 컴포넌트 안에 있어야 함
  const [isModal, setIsModal] = useState(false);

  const dispatch = useDispatch();

  const openModal = () => {
    setIsModal(true);
  };

    //삭제
    // const onClickDeleteHandler = async userId => {
    //   dispatch(__deleteAllManagement(userId));
    // };

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
            onClick={openModal}
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
            <SelectModal setIsModal={setIsModal} role={item.role} userId={item.userId} ></SelectModal>
          ) : null}

          <MoveModalbtn
            onClick={()=>{
              dispatch(__deleteAllManagement(item.userId))
            }}
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
