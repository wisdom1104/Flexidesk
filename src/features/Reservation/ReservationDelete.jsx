import React from 'react';
import { useDispatch } from 'react-redux';
import { __deleteRervation } from '../../redux/modules/detailSlice';
import { useModal } from '../../hooks/useModal';
import Modal from '../../components/Modal';
import MainMintBtn from '../../components/button/MainMintBtn';
import Text from '../../components/Text';

function ReservationDelete({ reservationId }) {
  const dispatch = useDispatch();

  const [isOpen, controlModal] = useModal();

  const deleteHandler = () => {
    dispatch(__deleteRervation(reservationId));
    controlModal(false);
  };

  return (
    <>
      <MainMintBtn
        w="84px"
        h="35px"
        mg="5px 0px"
        onClick={() => controlModal(true)}
      >
        <Text shape="T14_700_17" color="var(--white)">
          삭제
        </Text>
      </MainMintBtn>
      {isOpen && (
        <Modal
          setIsModal={() => controlModal(false)}
          modalTitle="삭제 하시겠습니까?"
          onButtonClick={deleteHandler}
        ></Modal>
      )}
    </>
  );
}

export default ReservationDelete;
