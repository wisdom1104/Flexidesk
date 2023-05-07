import React from 'react';
import { useDispatch } from 'react-redux';
import { BsPersonGear } from 'react-icons/bs';
import { __deleteAllManagement } from '../../redux/modules/allManagementSlice';
import { useModal } from '../../hooks/useModal';
import Modal from '../../components/Modal';
import SelectModal from '../../components/modal/SelectModal';
import Text from '../../components/Text';
import { Row } from '../../components/Flex';
import SubMintBtn from '../../components/button/SubMintBtn';
import MainMintBtn from '../../components/button/MainMintBtn';
import styled from 'styled-components';

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
      <StContainer>
        <Text shape="T16_700" color="var(--grey_002)">
          <BsPersonGear /> 권한 변경
        </Text>

        <Row gap="10px">
          <MainMintBtn
            onClick={() => controlSelectModal(true)}
            w="84px"
            h="35px"
            left="18px"
            top="130px"
            position="sticky"
            pd="4px 10px"
          >
            <Text shape="T14_700_17" color="var(--white)">
              직급 수정
            </Text>
          </MainMintBtn>

          <SubMintBtn
            onClick={() => controlDeleteModal(true)}
            w="84px"
            h="35px"
            left="100px"
            top="130px"
            position="sticky"
            pd="4px 10px"
          />

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
      </StContainer>
    </>
  );
}

export default ManagementChange;

const StContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  margin: 5px;
  border-bottom: 1px solid lightgray;
  padding-bottom: 5%;
`;
