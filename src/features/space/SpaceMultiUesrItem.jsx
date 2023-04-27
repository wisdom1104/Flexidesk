import React from 'react';
import { ClickedBox, StUserBox, StUser } from '../../shared/SpaceStyles';

function SpaceMultiUesrItem({ multiBox, onClickMoveUserHandler, isClicked }) {
  return (
    <>
      {isClicked === multiBox.multiBoxId ? (
        <ClickedBox
          key={multiBox.multiBoxId}
          id={multiBox.multiBoxId}
          onClick={() => {
            onClickMoveUserHandler(multiBox);
          }}
          transformValue={`translate(${multiBox.x}px, ${multiBox.y}px)`}
        >
          <div>{multiBox.multiBoxName}</div>
          <StUser>{multiBox.username}</StUser>
        </ClickedBox>
      ) : (
        <StUserBox
          key={multiBox.multiBoxId}
          id={multiBox.multiBoxId}
          onClick={() => {
            onClickMoveUserHandler(multiBox);
          }}
          transformValue={`translate(${multiBox.x}px, ${multiBox.y}px)`}
        >
          <div>{multiBox.multiBoxName}</div>
          {multiBox.userlist.length > 1 ? (
            <StUser>
              {multiBox.userlist[0].username}외 {multiBox.userlist.length - 1}명
            </StUser>
          ) : (
            <StUser>{multiBox.userlist[0].username}</StUser>
          )}
          {/* <StUser>{multiBox.userlist.length}명</StUser> */}
        </StUserBox>
      )}
    </>
  );
}

export default SpaceMultiUesrItem;
