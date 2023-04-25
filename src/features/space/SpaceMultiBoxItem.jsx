import React from 'react';
import { ClickedBox, StBox } from '../../shared/SpaceStyles';

function SpaceMultiBoxItem({ multiBox, onClickMoveUserHandler, isClicked }) {
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
        </ClickedBox>
      ) : (
        <StBox
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
        </StBox>
      )}
    </>
  );
}

export default SpaceMultiBoxItem;
