import React from 'react';
import SelectModal from '../../features/SelectModal';
import { CommentBox } from '../Reservation/CalendarStyled';

function ManagementChange({
  item,
  openModal,
  isModal,
  setIsModal,
  selectedUserId,
  allManagementId,
  userId
})

{

  return (
    <>
    <CommentBox>
    <p>권한 변경</p>

      <button onClick={() => openModal(allManagementId)}>직급 수정</button>
{/* 모달이 열릴때의 조건 = userId가 allManagementId 랑 같을때 */}
      {isModal && userId === allManagementId && (
        <SelectModal setIsModal={setIsModal} role={item.role}></SelectModal>
      )}

      <button>인원 삭제</button>
      </CommentBox>
    </>
  );
}

export default ManagementChange;
