import React from 'react';
import { ClickedBox, StUserBox, StUser } from '../../shared/SpaceStyles';

function SpaceUesrItem({ box, onClickMoveUserHandler, isClicked }) {
  return (
    <>
      {isClicked === box.boxId ? (
        <ClickedBox
          key={box.boxId}
          id={box.boxId}
          style={{
            transform: `translate(${box.x}px, ${box.y}px)`,
          }}
          onClick={() => {
            onClickMoveUserHandler(box);
          }}
        >
          <div>{box.boxName}</div>
          <StUser>{box.username}</StUser>
        </ClickedBox>
      ) : (
        <StUserBox
          key={box.boxId}
          id={box.boxId}
          style={{
            transform: `translate(${box.x}px, ${box.y}px)`,
          }}
          onClick={() => {
            onClickMoveUserHandler(box);
          }}
        >
          <div>{box.boxName}</div>
          <StUser>{box.username}</StUser>
        </StUserBox>
      )}
    </>
  );
}

export default SpaceUesrItem;
