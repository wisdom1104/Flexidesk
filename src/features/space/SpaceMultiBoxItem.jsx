import React from 'react';
import { ClickedBox, StBox } from '../../shared/SpaceStyles';

function SpaceMultiBoxItem({ multiBox, onClickMoveUserHandler, isClicked }) {
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
        </ClickedBox>
      ) : (
        <StBox
          key={multiBox.multiBoxId}
          id={multiBox.multiBoxId}
          onClick={() => {
            onClickMoveUserHandler(multiBox);
          }}
          transformValue={`translate(${multiBox.x}px, ${multiBox.y}px)`}
        >
          <div>{multiBox.multiBoxName}</div>
          {/* <div>{multiBox.multiBoxId}</div> */}
        </StBox>
      )}
    </>
  );
}

export default SpaceMultiBoxItem;
