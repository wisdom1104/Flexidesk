import React from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../hooks/useModalHook';
import { MoveModalbtn } from '../../shared/SpaceStyles';
import Modal from '../../components/Modal';
import { __deleteRervation } from '../../redux/modules/detail';

function ReservationDelete({ reservationId }) {
  const dispatch = useDispatch();

  const [isOpen, controlModal] = useModal();

  const deleteHandler = () => {
    dispatch(__deleteRervation(reservationId));
    controlModal(false);
  };

  return (
    <>
      <MoveModalbtn
        onClick={()=> controlModal(true)}
        width="84px"
        height="35px"
        left="100px"
        top="130px"
        position="sticky"
        padding="8px, 16px, 8px, 16px"
      >
        삭제
      </MoveModalbtn>

      {isOpen && (
        <Modal
          setIsModal={()=> controlModal(false)}
          modalTitle="삭제 하시겠습니까?"
          onButtonClick={deleteHandler}
        ></Modal>
      )}
    </>
  );
}

export default ReservationDelete;
