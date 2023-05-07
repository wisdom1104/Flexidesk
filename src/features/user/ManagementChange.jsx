import React from 'react';
import { useDispatch } from 'react-redux';
import { BsPersonGear } from 'react-icons/bs';
import { __deleteAllManagement } from '../../redux/modules/allManagementSlice';
import { useModal } from '../../hooks/useModalHook';
import { CommentBox } from '../../pages/reservation/CalendarStyled';
// import { MoveModalSubbtn, MoveModalbtn } from '../../pages/space/SpaceStyles';
import Modal from '../../components/Modal';
import SelectModal from '../../components/modal/SelectModal';
import Text from '../../components/Text';
import { Row } from '../../components/Flex';
import { CardInfo } from '../../components/CardInfo';

function ManagementChange({ item }) {
  const [isSelectModalOpen, controlSelectModal] = useModal();
  const [isDeleteModalOpen, controlDeleteModal] = useModal();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(__deleteAllManagement(item.userId));
    controlSelectModal(false);
    controlDeleteModal(false);
  };

  return (
    <>
      <CommentBox>
        <Text shape="T16_700" color="var(--grey_002)">
          <BsPersonGear /> 권한 변경
        </Text>

        <Row gap="10px">
          {/* <MoveModalSubbtn
            onClick={() => controlSelectModal(true)}
            width="84px"
            height="35px"
            left="18px"
            top="130px"
            position="sticky"
            padding="8px, 16px, 8px, 16px"
          >
            직급 수정
          </MoveModalSubbtn> */}

          {/* <MoveModalbtn
            onClick={() => controlDeleteModal(true)}
            width="84px"
            height="35px"
            left="100px"
            top="130px"
            position="sticky"
            padding="8px, 16px, 8px, 16px"
          >
            인원 삭제
          </MoveModalbtn> */}

          {isSelectModalOpen && (
            <SelectModal
              setIsModal={() => controlSelectModal(false)}
              role={item.role}
              userId={item.userId}
            />
          )}
        </Row>

        {isDeleteModalOpen && (
          <Modal
            setIsModal={() => controlDeleteModal(false)}
            modalTitle="삭제 하시겠습니까?"
            onButtonClick={handleLogout}
          />
        )}
      </CommentBox>
    </>
  );
}

export default ManagementChange;
