import { useDispatch } from 'react-redux';
import { __addMultiBox } from '../../../redux/modules/spaceMultiBoxSlice';
import { __addBox } from '../../../redux/modules/spaceBoxSlice';
import { __addMr } from '../../../redux/modules/spaceMrSlice';

export function useDropBox(
  spaceId,
  mrList,
  boxList,
  multiBoxList,
  mrBoxes,
  boxes,
  multiBoxes,
) {
  const dispatch = useDispatch();

  // 모든 요소 드롭
  const HandleDrop = async e => {
    e.preventDefault();
    const id = e.dataTransfer.getData('boxId');
    const targetRect = e.target.getBoundingClientRect();

    // 회의실드롭
    if (Number(id) === 1) {
      const newBox = {
        spaceId,
        mrName: 'New 회의실',
        x: e.clientX - targetRect.x - 45,
        y: e.clientY - targetRect.y - 45,
      };
      if (
        Number(mrList[0].length) !== 0 ||
        Number(boxList[0].length) !== 0 ||
        Number(multiBoxList[0].length) !== 0
      ) {
        const isOverlap = (draggedBox, existingBox) => {
          const draggedx = draggedBox.x;
          const draggedRight = draggedBox.x + 70;
          const draggedy = draggedBox.y;
          const draggedBottom = draggedBox.y + 70;

          const existingx = existingBox.x;
          const existingRight = existingBox.x + 70;
          const existingy = existingBox.y;
          const existingBottom = existingBox.y + 70;

          if (
            draggedx < existingRight &&
            draggedRight > existingx &&
            draggedy < existingBottom &&
            draggedBottom > existingy
          ) {
            return true;
          }
          return false;
        };

        const isOverlapping = mrBoxes.some(box => isOverlap(newBox, box));
        const isMrListOverlapping = mrList.some(box => isOverlap(newBox, box));
        const isBoxListOverlapping = boxList.some(box =>
          isOverlap(newBox, box),
        );
        if (!isOverlapping && !isMrListOverlapping && !isBoxListOverlapping) {
          dispatch(__addMr(newBox));
        }
      } else {
        dispatch(__addMr(newBox));
      }
    }

    // 박스 드롭
    if (Number(id) === 2) {
      const newBox = {
        spaceId,
        boxName: 'New 자리',
        x: e.clientX - targetRect.x - 45,
        y: e.clientY - targetRect.y - 45,
      };
      if (
        Number(mrList[0].length) !== 0 ||
        Number(boxList[0].length) !== 0 ||
        Number(multiBoxList[0].length) !== 0
      ) {
        const isOverlap = (draggedBox, existingBox) => {
          const draggedx = draggedBox.x;
          const draggedRight = draggedBox.x + 70;
          const draggedy = draggedBox.y;
          const draggedBottom = draggedBox.y + 70;

          const existingx = existingBox.x;
          const existingRight = existingBox.x + 70;
          const existingy = existingBox.y;
          const existingBottom = existingBox.y + 70;

          if (
            draggedx < existingRight &&
            draggedRight > existingx &&
            draggedy < existingBottom &&
            draggedBottom > existingy
          ) {
            return true;
          }
          return false;
        };
        const isOverlapping = boxes.some(box => isOverlap(newBox, box));
        const isMrListOverlapping = mrList.some(box => isOverlap(newBox, box));
        const isBoxListOverlapping = boxList.some(box =>
          isOverlap(newBox, box),
        );
        const isMultiBoxListOverlapping = multiBoxList.some(box =>
          isOverlap(newBox, box),
        );
        if (
          !isOverlapping &&
          !isMrListOverlapping &&
          !isBoxListOverlapping &&
          !isMultiBoxListOverlapping
        ) {
          dispatch(__addBox(newBox));
        }
      } else {
        dispatch(__addBox(newBox));
      }
    }

    // 공용공간 드롭
    if (Number(id) === 3) {
      const newBox = {
        spaceId,
        multiBoxName: 'New 공용공간',
        x: e.clientX - targetRect.x - 45,
        y: e.clientY - targetRect.y - 45,
      };
      if (
        Number(mrList[0].length) !== 0 ||
        Number(boxList[0].length) !== 0 ||
        Number(multiBoxList[0].length) !== 0
      ) {
        const isOverlap = (draggedBox, existingBox) => {
          const draggedx = draggedBox.x;
          const draggedRight = draggedBox.x + 70;
          const draggedy = draggedBox.y;
          const draggedBottom = draggedBox.y + 70;

          const existingx = existingBox.x;
          const existingRight = existingBox.x + 70;
          const existingy = existingBox.y;
          const existingBottom = existingBox.y + 70;

          if (
            draggedx < existingRight &&
            draggedRight > existingx &&
            draggedy < existingBottom &&
            draggedBottom > existingy
          ) {
            return true;
          }
          return false;
        };
        const isOverlapping = multiBoxes.some(box => isOverlap(newBox, box));
        const isMrListOverlapping = mrList.some(box => isOverlap(newBox, box));
        const isBoxListOverlapping = boxList.some(box =>
          isOverlap(newBox, box),
        );
        const isMultiBoxListOverlapping = multiBoxList.some(box =>
          isOverlap(newBox, box),
        );
        if (
          !isOverlapping &&
          !isMrListOverlapping &&
          !isBoxListOverlapping &&
          !isMultiBoxListOverlapping
        ) {
          dispatch(__addMultiBox(newBox));
        }
      } else {
        dispatch(__addMultiBox(newBox));
      }
    }
  };

  const handleDragOver = e => {
    e.preventDefault();
  };
  return { HandleDrop, handleDragOver };
}
