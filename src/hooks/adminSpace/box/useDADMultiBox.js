import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import{__editMultiBox} from '../../../redux/modules/MultiBoxSlice'

export function useDADMultiBox(spaceId, boardEl, multiBoxList) {
  const dispatch = useDispatch();
  const elRef = useRef([]);

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
      return payload;
    };
    const multiBoxMouseUpHandler = (e, boxIndex) => {
      document.removeEventListener('mousemove', multiBoxMoveHandler);
      document.removeEventListener('mouseup', multiBoxMouseUpHandler);
      const result = multiBoxMoveHandler(e, boxIndex);
      dispatch(__editMultiBox(result));
    };

    document.addEventListener('mousemove', multiBoxMoveHandler);
    document.addEventListener('mouseup', multiBoxMouseUpHandler);
  };
  return {
    elRef,
    multiBoxMouseDownHandler,
  };
}
