import React, { useState } from 'react';
import SelectModal from '../../features/SelectModal';
import { CommentBox } from '../Reservation/CalendarStyled';

function ManagementChange({
  item,
  allManagementId,
})

{
  //모달이 컴포넌트 안에 있어야 될듯
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };

  return (
    <>
    <CommentBox>
    <p>권한 변경</p>

      <button onClick={() => openModal(allManagementId)}>직급 수정</button>
{/* 모달이 열릴때의 조건 = userId가 allManagementId 랑 같을때 */}
      {isModal ? (
        <SelectModal setIsModal={setIsModal} role={item.role}></SelectModal> 
      ): null
    }

      <button>인원 삭제</button>
      </CommentBox>
    </>
  );
}

export default ManagementChange;
