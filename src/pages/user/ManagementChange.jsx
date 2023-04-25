import React from 'react';
import SelectModal from '../../features/SelectModal';

function ManagementChange({
  item,
  openModal,
  isModal,
  setIsModal,
  selectedUserId,
}) {
  return (
    <div>
      <button onClick={() => openModal(item.allManagementId)}>권한 수정</button>
      {isModal && selectedUserId === item.allManagementId && (
        <SelectModal setIsModal={setIsModal} role={item.role}></SelectModal>
      )}
      <button>인원 삭제</button>
    </div>
  );
}

export default ManagementChange;
