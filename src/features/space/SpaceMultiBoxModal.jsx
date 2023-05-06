import React from 'react';
import SpaceModal from '../../components/modal/SpaceModal';
import {
  ListDot,
  MoveModalList,
  MoveModalSubTitle,
  MoveModalTitle,
} from '../../shared/SpaceStyles';
import Text from '../../components/Text';
import { Row } from '../../components/Flex';
import MainMintBtn from '../../components/button/MainMintBtn';
import SubMintBtn from '../../components/button/SubMintBtn';

function SpaceMultiBoxModal({
  moveBox,
  isMultiModal,
  MoveMultiUser,
  setIsMultiModal,
  setIsClicked,
}) {
  return (
    <>
      {moveBox !== null && isMultiModal && (
        <SpaceModal height="280px">
          <MoveModalSubTitle>자리선택</MoveModalSubTitle>
          <MoveModalTitle>
            <Text shape="T18_700" ta="center">
              &quot;{moveBox.multiBoxName}&quot;
              <div>선택하시겠습니까</div>
            </Text>
          </MoveModalTitle>
          <MoveModalList>
            <Row>
              <Text shape="T14_600">현재 인원</Text>
              <Text shape="T14_600" color="#65bab6">
                &nbsp;{moveBox.userlist.length}명
              </Text>
            </Row>
            {moveBox.userlist.map(user => (
              <Row>
                <ListDot />
                <div>{user.username}</div>
              </Row>
            ))}
          </MoveModalList>
          <MainMintBtn
            h="41px"
            pd="12px 24px"
            position="absolute"
            left="16px"
            top="227px"
            onClick={() => {
              MoveMultiUser(moveBox);
            }}
          >
            <Text shape="T16_600" color="var(--white)">
              네
            </Text>
          </MainMintBtn>
          <SubMintBtn
            h="41px"
            pd="12px 24px"
            position="absolute"
            left="85px"
            top="227px"
            onClick={() => {
              setIsMultiModal(!isMultiModal);
              setIsClicked(null);
            }}
          >
            <Text shape="T16_600" color="var(--mint_002)">
              아니요
            </Text>
          </SubMintBtn>
        </SpaceModal>
      )}
    </>
  );
}

export default SpaceMultiBoxModal;
