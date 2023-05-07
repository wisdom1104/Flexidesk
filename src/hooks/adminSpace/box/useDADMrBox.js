import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { __editMr } from '../../../redux/modules/spaceMrSlice';

export function useDADMrBox(spaceId, boardEl, mrList) {
  const dispatch = useDispatch();
  const elRef = useRef([]);

  const mrMouseDownHandler = (e, boxIndex) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const mrMoveHandler = e => {
      const currentBox = mrList[0].find(mr => mr.mrId === boxIndex);

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
        mrId: currentBox.mrId,
        mrName: currentBox.mrName,
        x: Number(limitedX),
        y: Number(limitedY),
      };
      return payload;
    };
    const mrMouseUpHandler = (e, boxIndex) => {
      document.removeEventListener('mousemove', mrMoveHandler);
      document.removeEventListener('mouseup', mrMouseUpHandler);
      const result = mrMoveHandler(e, boxIndex);
      dispatch(__editMr(result));
    };

    document.addEventListener('mousemove', mrMoveHandler);
    document.addEventListener('mouseup', mrMouseUpHandler);
  };
  return {
    elRef,
    mrMouseDownHandler,
  };
}
