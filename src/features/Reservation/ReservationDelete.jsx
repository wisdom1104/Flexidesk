import React from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../hooks/useModal';
import Modal from '../../components/Modal';
import { __deleteRervation } from '../../redux/modules/detail';
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
      {/* <MoveModalbtn
        onClick={() => controlModal(true)}
        width="84px"
        height="35px"
        mg="5px 0px"
        left="100px"
        top="130px"
        position="sticky"
        padding="8px, 16px, 8px, 16px"
      >
        삭제
      </MoveModalbtn> */}

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
