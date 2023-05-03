import React from 'react';
import SpaceModal from '../../components/modal/SpaceModal';
import {
  MoveModalErrorbtn,
  MoveModalSubTitle,
  MoveModalSubbtn,
  MoveModalTitle,
  MoveModalbtn,
} from '../../shared/SpaceStyles';

function SpaceBoxModal({
  moveBox,
  isModal,
  MoveUser,
  setIsModal,
  setIsClicked,
}) {
  return (
    <>
      {moveBox !== null && isModal ? (
        <>
          {moveBox.username === null ? (
            <SpaceModal>
              <MoveModalSubTitle>자리선택</MoveModalSubTitle>
              <MoveModalTitle>
                {moveBox.boxName}
                <br />
                선택하시겠습니까?
              </MoveModalTitle>
              <MoveModalbtn
                onClick={() => {
                  MoveUser(moveBox);
                }}
              >
                예
              </MoveModalbtn>
              <MoveModalSubbtn
                onClick={() => {
                  setIsModal(!isModal);
                  setIsClicked(null);
                }}
              >
                아니요
              </MoveModalSubbtn>
            </SpaceModal>
          ) : (
            <SpaceModal>
              <MoveModalSubTitle>자리선택</MoveModalSubTitle>
              <MoveModalTitle>
                {moveBox.boxName}
                <br />
                이미 <span style={{ color: '#FF5454' }}>사용중</span>입니다.
              </MoveModalTitle>
              <MoveModalErrorbtn
                onClick={() => {
                  setIsModal(!isModal);
                  setIsClicked(null);
                }}
              >
                다른 자리 찾기
              </MoveModalErrorbtn>
            </SpaceModal>
          )}
        </>
      ) : null}
    </>
  );
}

export default SpaceBoxModal;
