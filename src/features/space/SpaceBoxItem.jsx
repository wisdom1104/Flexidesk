import React from 'react';
import { ClickedBox, StBox } from '../../shared/SpaceStyles';

function SpaceBoxItem({ box, onClickMoveUserHandler, isClicked }) {
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
        </ClickedBox>
      ) : (
        <StBox
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
          <div>{box.boxId}</div>
        </StBox>
      )}
    </>
  );
}

export default SpaceBoxItem;
