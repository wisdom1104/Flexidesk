import { useRef, useState } from 'react';
import { __editMr } from '../../redux/modules/spaceMrSlice';
import { __editBox } from '../../redux/modules/spaceBoxSlice';
import { __editMultiBox } from '../../redux/modules/MultiBoxSlice';

export function useBoxDragAndDrop(
  dispatch,
  spaceId,
  mrList,
  boxList,
  multiBoxList,
) {
  const [newMrBoxes, setNewMrBoxes] = useState([]);
  const [newBoxes, setNewBoxes] = useState([]);
  const [newMultiBoxes, setNewMultiBoxes] = useState([]);

  const elRef = useRef([]);
  const boardEl = useRef(null);

  // 회의실 드래그 앤 드롭
  const mrBoxMouseDownHandler = (e, boxIndex) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const mrBoxMoveHandler = e => {
      const currentMrBox = mrList[0].find(mrBox => mrBox.mrId === boxIndex);

      const newMouseX = e.clientX;
      const newMouseY = e.clientY;

      const mrDiffX = mouseX - currentMrBox.x;
      const mrDiffY = mouseY - currentMrBox.y;

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
      const payload = {
        spaceId,
        mrId: currentMrBox.mrId,
        mrName: currentMrBox.mrName,
        x: Number(limitedX),
        y: Number(limitedY),
      };
      setNewMrBoxes(prevBoxes => [...prevBoxes, payload]);
      return payload;
    };
    const spaceMouseUpHandler = (e, boxIndex) => {
      document.removeEventListener('mousemove', mrBoxMoveHandler);
      document.removeEventListener('mouseup', spaceMouseUpHandler);
      const result = mrBoxMoveHandler(e, boxIndex);
      dispatch(__editMr(result));
      setNewMrBoxes([]);
    };

    document.addEventListener('mousemove', mrBoxMoveHandler);
    document.addEventListener('mouseup', spaceMouseUpHandler);
  };

  // 박스 드래그 앤 드롭
  const boxMouseDownHandler = (e, boxIndex) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const boxMoveHandler = e => {
      const currentBox = boxList[0].find(box => box.boxId === boxIndex);

      const newMouseX = e.clientX;
      const newMouseY = e.clientY;

      const boxDiffY = mouseY - currentBox.y;
      const boxDiffX = mouseX - currentBox.x;

      const newx = newMouseX - boxDiffX;
      const newy = newMouseY - boxDiffY;

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

      const payload = {
        spaceId,
        boxId: currentBox.boxId,
        boxName: currentBox.boxName,
        x: Number(limitedX),
        y: Number(limitedY),
      };
      setNewBoxes(prevBoxes => [...prevBoxes, payload]);
      return payload;
    };

    const spaceMouseUpHandler = e => {
      document.removeEventListener('mousemove', boxMoveHandler);
      document.removeEventListener('mouseup', spaceMouseUpHandler);
      const result = boxMoveHandler(e, boxIndex);
      dispatch(__editBox(result));
      setNewBoxes([]);
    };

    document.addEventListener('mousemove', boxMoveHandler);
    document.addEventListener('mouseup', spaceMouseUpHandler);
  };

  // 공용공간 드래그 앤 드롭
  const multiBoxMouseDownHandler = (e, boxIndex) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const multiBoxMoveHandler = e => {
      const currentMultiBox = multiBoxList[0].find(
        multiBox => multiBox.multiBoxId === boxIndex,
      );

      const newMouseX = e.clientX;
      const newMouseY = e.clientY;

      const mrDiffX = mouseX - currentMultiBox.x;
      const mrDiffY = mouseY - currentMultiBox.y;

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
      const payload = {
        spaceId,
        multiBoxId: currentMultiBox.multiBoxId,
        multiBoxName: currentMultiBox.multiBoxName,
        x: Number(limitedX),
        y: Number(limitedY),
      };
      setNewMultiBoxes(prevBoxes => [...prevBoxes, payload]);
      return payload;
    };
    const spaceMouseUpHandler = (e, boxIndex) => {
      document.removeEventListener('mousemove', multiBoxMoveHandler);
      document.removeEventListener('mouseup', spaceMouseUpHandler);
      const result = multiBoxMoveHandler(e, boxIndex);
      dispatch(__editMultiBox(result));
      setNewMultiBoxes([]);
    };

    document.addEventListener('mousemove', multiBoxMoveHandler);
    document.addEventListener('mouseup', spaceMouseUpHandler);
  };
  return {
    elRef,
    boardEl,
    newMrBoxes,
    newBoxes,
    newMultiBoxes,
    mrBoxMouseDownHandler,
    boxMouseDownHandler,
    multiBoxMouseDownHandler,
  };
}
