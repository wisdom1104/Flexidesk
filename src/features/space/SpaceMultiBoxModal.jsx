import React from 'react';
import SpaceModal from '../../components/modal/SpaceModal';
import {
  ListDot,
  MoveModalItem,
  MoveModalList,
  MoveModalSubTitle,
  MoveModalSubbtn,
  MoveModalTitle,
  MoveModalbtn,
} from '../../shared/SpaceStyles';

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
        <>
          <SpaceModal height="280px">
            <MoveModalSubTitle>자리선택</MoveModalSubTitle>
            <MoveModalTitle>
              {moveBox.multiBoxName}
              <br />
              선택하시겠습니까?
            </MoveModalTitle>
            <MoveModalList>
              <MoveModalItem>
                현재 인원
                <div style={{ color: '#65bab6' }}>
                  &nbsp;{moveBox.userlist.length}명
                </div>
              </MoveModalItem>
              {moveBox.userlist.map(user => (
                <MoveModalItem>
                  <ListDot />
                  <div>{user.username}</div>
                </MoveModalItem>
              ))}
            </MoveModalList>
            <MoveModalbtn
              onClick={() => {
                MoveMultiUser(moveBox);
              }}
              top="227px"
            >
              네
            </MoveModalbtn>
            <MoveModalSubbtn
              onClick={() => {
                setIsMultiModal(!isMultiModal);
                setIsClicked(null);
              }}
              top="227px"
            >
              아니요
            </MoveModalSubbtn>
          </SpaceModal>
        </>
      )}
    </>
  );
}

export default SpaceMultiBoxModal;
