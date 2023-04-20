import React from 'react';
import { Box, StBox, StUseBox, StUser } from './SpaceStyles';

function SpaceBoxItem({ box, onClickMoveUserHandler, isClicked }) {
  return (
    <>
      {isClicked === box.boxId ? (
        <Box
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
        </Box>
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
        </StBox>
      )}
    </>
  );
}

export default SpaceBoxItem;
