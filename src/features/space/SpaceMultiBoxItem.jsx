import React from 'react';
import { StBox, StUser } from '../../shared/SpaceStyles';

function SpaceMultiBoxItem({ multiBox, onClickMoveUserHandler, isClicked }) {
  return (
    <>
      {multiBox.userlist.length > 0 ? (
        <StBox
          key={multiBox.multiBoxId}
          id={multiBox.multiBoxId}
          onClick={() => {
            onClickMoveUserHandler(multiBox);
          }}
          transformValue={`translate(${multiBox.x}px, ${multiBox.y}px)`}
          background={isClicked === multiBox.multiBoxId ? '#07133b' : '#def1ef'}
          color={isClicked === multiBox.multiBoxId ? '#8b93a6' : '#65bab6'}
        >
          <div>{multiBox.multiBoxName}</div>
          <StUser>{multiBox.userlist.length}명</StUser>
        </StBox>
      ) : (
        <StBox
          key={multiBox.multiBoxId}
          id={multiBox.multiBoxId}
          onClick={() => {
            onClickMoveUserHandler(multiBox);
          }}
          transformValue={`translate(${multiBox.x}px, ${multiBox.y}px)`}
          background={isClicked === multiBox.multiBoxId ? '#07133b' : undefined}
          color={isClicked === multiBox.multiBoxId ? '#8b93a6' : undefined}
        >
          <div>{multiBox.multiBoxName}</div>
        </StBox>
      )}
    </>
  );
}

export default SpaceMultiBoxItem;
