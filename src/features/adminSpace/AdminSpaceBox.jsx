import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getSpace } from '../../redux/modules/spaceSlice';
import { __addMr, __editMr } from '../../redux/modules/spaceMrSlice';
import { __addBox, __editBox } from '../../redux/modules/spaceBoxSlice';
import { useNavigate } from 'react-router-dom';
import { Row } from '../../components/Flex';
import {
  StBoard,
  StBtn,
  StDrag,
  StSubBtn,
  StSubHeader,
  Stmainspace,
  SubIcon,
  SubTitle,
} from '../../shared/SpaceStyles';
import {
  __addMultiBox,
  __editMultiBox,
} from '../../redux/modules/MultiBoxSlice';
import AdminMrItem from './AdminMrItem';
import AdminBoxItem from './AdminBoxItem';
import AdminMultiBoxItem from './AdminMultiBoxItem';
import AdminSubHeader from './AdminSubHeader';
import AdminShadowItem from './AdminShadowItem';
import AdminDropItem from './AdminDropItem';

function AdminSpaceBox({
  spaceId,
  selectedSpace,
  handleDragStart,
  isModal,
  setIsModal,
  spaces,
  id,
  mrBoxes,
  boxes,
  multiBoxes,
}) {
  const dispatch = useDispatch();

  const { space } = useSelector(state => state.space);

  const [newMrBoxes, setNewMrBoxes] = useState([]);
  const [newBoxes, setNewBoxes] = useState([]);
  const [newMultiBoxes, setNewMultiBoxes] = useState([]);

  const elRef = useRef([]);
  const boardEl = useRef(null);

  // floor, space 조회
  useEffect(() => {
    const foundSpace = spaces.find(space => space.spaceId === id);
    if (foundSpace) {
      dispatch(__getSpace(id));
    }
  }, [selectedSpace]);

  // mrList와 boxList를 계산하는 useEffect
  const [mrList, setMrList] = useState([]);
  const [boxList, setBoxList] = useState([]);
  const [multiBoxList, setMultiBoxList] = useState([]);

  useEffect(() => {
    const newMrList = space?.map(item => item.mrList) || [];
    const newBoxList = space?.map(item => item.boxList) || [];
    const newMultiBoxList = space?.map(item => item.multiBoxList) || [];
    setMrList(newMrList);
    setBoxList(newBoxList);
    setMultiBoxList(newMultiBoxList);
  }, [space]);

  // 모든 요소 드롭
  const HandleDrop = async e => {
    e.preventDefault();
    const id = e.dataTransfer.getData('boxId');
    const targetRect = e.target.getBoundingClientRect();

    //------------------------회의실드롭----------------------------------
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
        // const isMultiBoxListOverlapping = multiBoxList.some(box =>
        //   isOverlap(newBox, box),
        // );
        if (
          !isOverlapping &&
          !isMrListOverlapping &&
          !isBoxListOverlapping
          // && !isMultiBoxListOverlapping
        ) {
          dispatch(__addMr(newBox));
        }
      } else {
        dispatch(__addMr(newBox));
      }
    }

    //------------------------박스 드롭----------------------------------
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

    //------------------------공용공간 드롭----------------------------------
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

  //--------------------------회의실 드래그 앤 드롭--------------------------------
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

  //--------------------------박스 드래그 앤 드롭--------------------------------
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

  //--------------------------공용공간 드래그 앤 드롭--------------------------------
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

  return (
    <Stmainspace>
      <AdminSubHeader space={space} isModal={isModal} setIsModal={setIsModal} />
      <StBoard ref={boardEl} onDrop={HandleDrop} onDragOver={handleDragOver}>
        <AdminShadowItem
          newMrBoxes={newMrBoxes}
          newBoxes={newBoxes}
          newMultiBoxes={newMultiBoxes}
          elRef={elRef}
        />
        <AdminDropItem
          space={space}
          HandleDrop={HandleDrop}
          handleDragOver={handleDragOver}
          elRef={elRef}
          handleDragStart={handleDragStart}
          spaceId={spaceId}
          mrBoxMouseDownHandler={mrBoxMouseDownHandler}
          boxMouseDownHandler={boxMouseDownHandler}
          multiBoxMouseDownHandler={multiBoxMouseDownHandler}
        />
      </StBoard>
    </Stmainspace>
  );
}

export default AdminSpaceBox;
