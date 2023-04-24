import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getSpace } from '../../redux/modules/spaceSlice';
import { __addMr, __editMr } from '../../redux/modules/spaceMrSlice';
import { __addBox, __editBox } from '../../redux/modules/spaceBoxSlice';
import MrItem from './MrItem';
import BoxItem from './BoxItem';
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
} from './SpaceStyles';
import { __addMultiBox } from '../../redux/modules/MultiBoxSlice';

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
  const navi = useNavigate();

  const { space } = useSelector(state => state.space);
  console.log('space', space);

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

  console.log('mrList', mrList[0]);
  console.log('boxList', boxList[0]);
  console.log('multiBoxList', multiBoxList[0]);

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

    const boxMoveHandler = e => {
      const currentBox = multiBoxList[0].find(
        box => box.multiBoxId === boxIndex,
      );

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

  return (
    <Stmainspace>
      <StSubHeader>
        {/* space name 부분 */}
        <Row>
          {space?.map(item => {
            if (item && item.floorId !== null)
              return (
                <Row key={item.spaceId}>
                  <SubTitle key={item.floorId}>{item.floorName}</SubTitle>
                  <SubIcon>&gt;</SubIcon>
                  <SubTitle key={item.spaceId}>{item.spaceName}</SubTitle>
                </Row>
              );
            if (item && item.floorId === null)
              return (
                <SubTitle key={item.spaceId}>
                  {/* if(item.floorId) */}
                  {item.spaceName}
                </SubTitle>
              );
          })}
        </Row>
        <Row>
          <StSubBtn
            onClick={() => {
              setIsModal(!isModal);
            }}
          >
            스페이스 관리하기
          </StSubBtn>
          <StBtn onClick={() => navi('/space')}>완료</StBtn>
        </Row>
      </StSubHeader>
      {/* board 부분 */}
      <StBoard ref={boardEl} onDrop={HandleDrop} onDragOver={handleDragOver}>
        {/* 회의실 잔상 */}
        {newMrBoxes.map((box, index) => (
          <StDrag
            key={box.mrId}
            ref={el => (elRef.current[index] = el)}
            onMouseDown={e => mrBoxMouseDownHandler(e, index)}
            onDragStart={e => handleDragStart(e, box.mrId)}
            style={{ transform: `translate(${box.x}px, ${box.y}px)` }}
          ></StDrag>
        ))}
        {/* 박스 잔상 */}
        {newBoxes.map((box, index) => (
          <StDrag
            key={box.boxId}
            ref={el => (elRef.current[index] = el)}
            onMouseDown={e => boxMouseDownHandler(e, index)}
            onDragStart={e => handleDragStart(e, box.boxId)}
            style={{ transform: `translate(${box.x}px, ${box.y}px)` }}
          ></StDrag>
        ))}
        {/* 공용공간 잔상 */}
        {newMultiBoxes.map((box, index) => (
          <StDrag
            key={box.multiBoxId}
            ref={el => (elRef.current[index] = el)}
            onMouseDown={e => multiBoxMouseDownHandler(e, index)}
            onDragStart={e => handleDragStart(e, box.multiBoxId)}
            style={{ transform: `translate(${box.x}px, ${box.y}px)` }}
          ></StDrag>
        ))}
        {/* 회의실 드래그 앤 드롭 */}
        <div>
          {space?.map(item =>
            item.mrList?.length > 0
              ? item.mrList?.map(mr => (
                  <MrItem
                    key={mr.mrId}
                    mr={mr}
                    mrList={mrList}
                    HandleDrop={HandleDrop}
                    handleDragOver={handleDragOver}
                    elRef={elRef}
                    mrBoxMouseDownHandler={mrBoxMouseDownHandler}
                    handleDragStart={handleDragStart}
                    spaceId={spaceId}
                  />
                ))
              : null,
          )}
        </div>
        {/* 박스 드래그 앤 드롭 */}
        <div>
          {space?.map(item =>
            item.boxList?.length > 0
              ? item.boxList?.map(box => (
                  <BoxItem
                    key={box.boxId}
                    box={box}
                    boxList={boxList}
                    HandleDrop={HandleDrop}
                    handleDragOver={handleDragOver}
                    elRef={elRef}
                    boxMouseDownHandler={boxMouseDownHandler}
                    handleDragStart={handleDragStart}
                    spaceId={spaceId}
                  />
                ))
              : null,
          )}
        </div>
        {/* 공용공간 드래그 앤 드롭 */}
        <div>
          {space?.map(item =>
            item.multiBoxList?.length > 0
              ? item.multiBoxList?.map(multiBox => (
                  <div>{multiBox.multiBoxName}</div>
                  // <BoxItem
                  //   key={box.boxId}
                  //   box={box}
                  //   boxList={boxList}
                  //   HandleDrop={HandleDrop}
                  //   handleDragOver={handleDragOver}
                  //   elRef={elRef}
                  //   boxMouseDownHandler={boxMouseDownHandler}
                  //   handleDragStart={handleDragStart}
                  //   spaceId={spaceId}
                  // />
                ))
              : null,
          )}
        </div>
      </StBoard>
    </Stmainspace>
  );
}

export default AdminSpaceBox;
