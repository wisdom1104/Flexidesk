import React from 'react';
import { Box, StUseBox, StUser } from '../../shared/SpaceStyles';

function SpaceUesrItem({ box, onClickMoveUserHandler, isClicked }) {
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
          <StUser>{box.username}</StUser>
        </Box>
      ) : (
        <StUseBox
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
        </StUseBox>
      )}
    </>
  );
}

export default SpaceUesrItem;
