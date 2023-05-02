import { useRef, useState } from 'react';
import { __editMr } from '../../redux/modules/spaceMrSlice';
import { __editBox } from '../../redux/modules/spaceBoxSlice';
import { __editMultiBox } from '../../redux/modules/MultiBoxSlice';

export function useBoxDragAndDrop(
  dispatch,
  spaceId,
  box,
  boardEl,
  boxList,
  dispatchValue,
  type
) {
  const elRef = useRef([]);
  // const boardEl = useRef(null);

  // 공용공간 드래그 앤 드롭 ----------------------------------------------------
  const boxMouseDownHandler = (e, boxIndex) => {
    // console.log('box', box);
    // console.log('boxList', boxList);
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    let currentBox;

    if(type==='mrBox'){
      currentBox = boxList[0].find(box => box.mrBoxId === boxIndex);
    }
    if(type==='box'){
      currentBox = boxList[0].find(box => box.boxId === boxIndex);
    }
    if(type==='multiBox'){
      currentBox = boxList[0].find(box => box.multiBoxId === boxIndex);
    }
    // console.log('currentBox', currentBox);
    const boxMoveHandler = e => {
      // const currentBox = boxList[0].find(box => `box.${box}Id` === boxIndex);

      const newMouseX = e.clientX;
      const newMouseY = e.clientY;

      const mrDiffX = mouseX - currentBox.x;
      const mrDiffY = mouseY - currentBox.y;

      const newx = newMouseX - mrDiffX;
      const newy = newMouseY - mrDiffY;

      const boardRect = boardEl.current.getBoundingClientRect();
      const boxRect = elRef.current[boxIndex].getBoundingClientRect();

      const limitedX = Math.max(
        boardRect.x - (boardRect.x + 10),
        Math.min(newx, boardRect.right - (boxRect.width + (boardRect.x + 10))),
      );
      const limitedY = Math.max(
        boardRect.y - (boardRect.y + 10),
        Math.min(
          newy,
          boardRect.bottom - (boxRect.height + (boardRect.y + 10)),
        ),
      );
      let payload;
      if(type==='mrBox'){
        payload = {
          spaceId,
          mrId: currentBox.mrId,
          mrName: currentBox.mrName,
          x: Number(limitedX),
          y: Number(limitedY),
        };
      }
      if(type==='box'){
        payload = {
          spaceId,
          boxId: currentBox.boxId,
          boxName: currentBox.boxName,
          x: Number(limitedX),
          y: Number(limitedY),
        };
      }
      if(type==='multiBox'){
        payload = {
          spaceId,
          multiBoxId: currentBox.multiBoxId,
          multiBoxName: currentBox.multiBoxName,
          x: Number(limitedX),
          y: Number(limitedY),
        };
      }
      // const payload = {
      //   spaceId,
      //   [`${box}Id`]: currentBox[`${box}Id`],
      //   [`${box}Name`]: currentBox[`${box}Name`],
      //   x: Number(limitedX),
      //   y: Number(limitedY),
      // };
      // console.log('payload', payload);
      return payload;
    };

    const spaceMouseUpHandler = (e, boxIndex) => {
      document.removeEventListener('mousemove', boxMoveHandler);
      document.removeEventListener('mouseup', spaceMouseUpHandler);
      const result = boxMoveHandler(e, boxIndex);
      dispatch(__editMultiBox(result));
    };

    document.addEventListener('mousemove', boxMoveHandler);
    document.addEventListener('mouseup', spaceMouseUpHandler);
  };
  return {
    elRef,
    boxMouseDownHandler,
  };
}
