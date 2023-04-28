import React from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../hooks/useModalHook';
import { MoveModalbtn } from '../../shared/SpaceStyles';
import Modal from '../../components/Modal';
import { __deleteSchedule } from '../../redux/modules/schedules';

function SchedulesDelete({ scId }) {
  const dispatch = useDispatch();
  const [isOpen, openModal, closeModal] = useModal();
  const deleteHandler = () => {
    dispatch(__deleteSchedule(scId));
    closeModal();
  };
  return (
    <>
      <MoveModalbtn
        onClick={openModal}
        width="50px"
        height="32px"
        left="100px"
        top="130px"
        position="sticky"
        padding="7px"
      >
        삭제
      </MoveModalbtn>

      {isOpen && (
        <Modal
          setIsModal={closeModal}
          modalTitle="삭제 하시겠습니까?"
          onButtonClick={deleteHandler}
        ></Modal>
      )}
    </>
  );
}

export default SchedulesDelete;
