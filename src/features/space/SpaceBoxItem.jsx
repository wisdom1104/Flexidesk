import React from 'react';
import { StBox, StUser } from '../../shared/SpaceStyles';

function SpaceBoxItem({ box, onClickMoveUserHandler, isClicked }) {
  return (
    <>
      {box.username !== null ? (
        <StBox
          key={box.boxId}
          id={box.boxId}
          onClick={() => {
            onClickMoveUserHandler(box);
          }}
          transformValue={`translate(${box.x}px, ${box.y}px)`}
          background={isClicked === box.boxId ? '#07133b' : '#def1ef'}
          color={isClicked === box.boxId ? '#8b93a6' : '#65bab6'}
        >
          <div>{box.boxName}</div>
          <StUser>{box.username}</StUser>
        </StBox>
      ) : (
        <StBox
          key={box.boxId}
          id={box.boxId}
          onClick={() => {
            onClickMoveUserHandler(box);
          }}
          transformValue={`translate(${box.x}px, ${box.y}px)`}
          background={isClicked === box.boxId ? '#07133b' : undefined}
          color={isClicked === box.boxId ? '#8b93a6' : undefined}
        >
          <div>{box.boxName}</div>
        </StBox>
      )}
    </>
  );
}

export default SpaceBoxItem;
