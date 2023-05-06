import React from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../hooks/useModalHook';
import Modal from '../../components/Modal';
import { __deleteSchedule } from '../../redux/modules/schedules';
import MainMintBtn from '../../components/button/MainMintBtn';
import Text from '../../components/Text';

function SchedulesDelete({ scId }) {
  const dispatch = useDispatch();

  const [isOpen, controlModal] = useModal();

  const deleteHandler = () => {
    dispatch(__deleteSchedule(scId));
    controlModal(false);
  };
  return (
    <>
      <MainMintBtn
        w="50px"
        h="32px"
        mg="5px 10px"
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

export default SchedulesDelete;
