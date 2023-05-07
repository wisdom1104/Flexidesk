import React from 'react';
import SpaceModal from '../../components/modal/SpaceModal';
import {
  MoveModalSubTitle,
  MoveModalTitle,
} from '../../pages/space/SpaceStyles';
import MainMintBtn from '../../components/button/MainMintBtn';
import SubMintBtn from '../../components/button/SubMintBtn';
import Text from '../../components/Text';
import { Row } from '../../components/Flex';

function SpaceBoxModal({
  moveBox,
  isModal,
  MoveUser,
  setIsModal,
  setIsClicked,
}) {
  return (
    <>
      {moveBox !== null && isModal && (
        <SpaceModal>
          <MoveModalSubTitle>자리선택</MoveModalSubTitle>
          {moveBox.username === null ? (
            <>
              <MoveModalTitle>
                <Text shape="T18_700" ta="center">
                  &quot;{moveBox.boxName}&quot;
                  <div>선택하시겠습니까</div>
                </Text>
              </MoveModalTitle>
              <MainMintBtn
                h="41px"
                pd="12px 24px"
                position="absolute"
                left="16px"
                top="117px"
                onClick={() => {
                  MoveUser(moveBox);
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
                top="117px"
                onClick={() => {
                  setIsModal(!isModal);
                  setIsClicked(null);
                }}
              >
                <Text shape="T16_600" color="var(--mint_002)">
                  아니요
                </Text>
              </SubMintBtn>
            </>
          ) : (
            <>
              <MoveModalTitle>
                <Text shape="T18_700" ta="center">
                  &quot;{moveBox.boxName}&quot;
                  <Row>
                    이미
                    <Text shape="T18_700" color="var(--error)">
                      &nbsp;사용중&nbsp;
                    </Text>
                    입니다.
                  </Row>
                </Text>
              </MoveModalTitle>
              <MainMintBtn
                w="157px"
                h="41px"
                pd="12px 24px"
                position="absolute"
                left="16px"
                top="117px"
                onClick={() => {
                  setIsModal(!isModal);
                  setIsClicked(null);
                }}
              >
                <Text shape="T16_600" color="var(--white)">
                  다른 자리 찾기
                </Text>
              </MainMintBtn>
            </>
          )}
        </SpaceModal>
      )}
    </>
  );
}

export default SpaceBoxModal;
