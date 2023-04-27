import React from 'react';
import { ClickedBox, StBox } from '../../shared/SpaceStyles';

function SpaceBoxItem({ box, onClickMoveUserHandler, isClicked }) {
  return (
    <>
      {isClicked === box.boxId ? (
        <ClickedBox
          key={box.boxId}
          id={box.boxId}
          onClick={() => {
            onClickMoveUserHandler(box);
          }}
          transformValue={`translate(${box.x}px, ${box.y}px)`}
        >
          <div>{box.boxName}</div>
        </ClickedBox>
      ) : (
        <StBox
          key={box.boxId}
          id={box.boxId}
          onClick={() => {
            onClickMoveUserHandler(box);
          }}
          transformValue={`translate(${box.x}px, ${box.y}px)`}
        >
          <div>{box.boxName}</div>
          {/* <div>{box.boxId}</div> */}
        </StBox>
      )}
    </>
  );
}

export default SpaceBoxItem;
