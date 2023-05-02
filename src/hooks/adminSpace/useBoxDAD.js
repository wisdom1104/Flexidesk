import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { __editBox } from '../../redux/modules/spaceBoxSlice';

export function useBoxDAD(spaceId, boardEl, boxList) {
  const dispatch = useDispatch();
  const elRef = useRef([]);

  const boxMouseDownHandler = (e, boxIndex) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const boxMoveHandler = e => {
      const currentBox = boxList[0].find(box => box.boxId === boxIndex);

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
      const payload = {
        spaceId,
        boxId: currentBox.boxId,
        boxName: currentBox.boxName,
        x: Number(limitedX),
        y: Number(limitedY),
      };
      return payload;
    };
    const boxMouseUpHandler = (e, boxIndex) => {
      document.removeEventListener('mousemove', boxMoveHandler);
      document.removeEventListener('mouseup', boxMouseUpHandler);
      const result = boxMoveHandler(e, boxIndex);
      dispatch(__editBox(result));
    };

    document.addEventListener('mousemove', boxMoveHandler);
    document.addEventListener('mouseup', boxMouseUpHandler);
  };
  return {
    elRef,
    boxMouseDownHandler,
  };
}
