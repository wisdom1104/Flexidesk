import React from 'react';
import { ClickedBox, StUserBox, StUser } from '../../shared/SpaceStyles';

function SpaceMultiUesrItem({ multiBox, onClickMoveUserHandler, isClicked }) {
  return (
    <>
      {isClicked === multiBox.multiBoxId ? (
        <ClickedBox
          key={multiBox.multiBoxId}
          id={multiBox.multiBoxId}
          style={{
            transform: `translate(${multiBox.x}px, ${multiBox.y}px)`,
          }}
          onClick={() => {
            onClickMoveUserHandler(multiBox);
          }}
        >
          <div>{multiBox.multiBoxName}</div>
          <StUser>{multiBox.username}</StUser>
        </ClickedBox>
      ) : (
        <StUserBox
          key={multiBox.multiBoxId}
          id={multiBox.multiBoxId}
          style={{
            transform: `translate(${multiBox.x}px, ${multiBox.y}px)`,
          }}
          onClick={() => {
            onClickMoveUserHandler(multiBox);
          }}
        >
          <div>{multiBox.multiBoxName}</div>
          {/* <div>{multiBox.multiBoxId}</div> */}
          <div>
            {multiBox.userlist[0].username}외 {multiBox.userlist.length - 1}명
          </div>
        </StUserBox>
      )}
    </>
  );
}

export default SpaceMultiUesrItem;
