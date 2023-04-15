import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Column, Row } from '../../components/Flex';

const Test3 = () => {
  const [mrBoxes] = useState([{ mrId: 1, left: 20, top: 20, inner: '회의실' }]);
  const [boxes] = useState([{ boxId: 2, left: 20, top: 50, inner: '박스' }]);
  const [newMrBoxes, setNewMrBoxes] = useState([]);
  const [newBoxes, setNewBoxes] = useState([]);

  const elRef = useRef([]);
  const boardEl = useRef(null);

  //------------------------모든 상자 드롭----------------------------------
  const HandleDrop = e => {
    e.preventDefault();
    const id = e.dataTransfer.getData('boxId');
    const targetRect = e.target.getBoundingClientRect();

    //------------------------회의실드롭----------------------------------
    if (Number(id) === 1) {
      const newBox = {
        mrId: Number(id) + Number(newMrBoxes.length),
        left: e.clientX - targetRect.left - 50,
        top: e.clientY - targetRect.top - 50,
        inner: 'new 회의실',
        zIndex: 1,
      };
      if (Number(newMrBoxes.length) !== 0 || Number(newBoxes.length) !== 0) {
        const isOverlap = (draggedBox, existingBox) => {
          const draggedLeft = draggedBox.left;
          const draggedRight = draggedBox.left + 80;
          const draggedTop = draggedBox.top;
          const draggedBottom = draggedBox.top + 80;

          const existingLeft = existingBox.left;
          const existingRight = existingBox.left + 80;
          const existingTop = existingBox.top;
          const existingBottom = existingBox.top + 80;

          if (
            draggedLeft < existingRight &&
            draggedRight > existingLeft &&
            draggedTop < existingBottom &&
            draggedBottom > existingTop
          ) {
            return true;
          }
          return false;
        };

        const isOverlapping = mrBoxes.some(box => isOverlap(newBox, box));
        const isNewBoxOverlapping = newMrBoxes.some(box =>
          isOverlap(newBox, box),
        );
        const isNewBoxesOverlapping = newBoxes.some(box =>
          isOverlap(newBox, box),
        );
        if (!isOverlapping && !isNewBoxOverlapping && !isNewBoxesOverlapping) {
          setNewMrBoxes(prevBoxes => [...prevBoxes, newBox]);
        } else {
          console.log('겹쳐진다아아아');
        }
      } else {
        setNewMrBoxes(prevBoxes => [...prevBoxes, newBox]);
      }
    }

    //------------------------박스 드롭----------------------------------
    if (Number(id) === 2) {
      const newBox = {
        boxId: Number(id) + Number(newBoxes.length),
        left: e.clientX - targetRect.left - 50,
        top: e.clientY - targetRect.top - 50,
        inner: 'new 박스',
        zIndex: 1,
      };
      if (Number(newMrBoxes.length) !== 0 || Number(newBoxes.length) !== 0) {
        const isOverlap = (draggedBox, existingBox) => {
          const draggedLeft = draggedBox.left;
          const draggedRight = draggedBox.left + 80;
          const draggedTop = draggedBox.top;
          const draggedBottom = draggedBox.top + 80;

          const existingLeft = existingBox.left;
          const existingRight = existingBox.left + 80;
          const existingTop = existingBox.top;
          const existingBottom = existingBox.top + 80;

          if (
            draggedLeft < existingRight &&
            draggedRight > existingLeft &&
            draggedTop < existingBottom &&
            draggedBottom > existingTop
          ) {
            return true;
          }
          return false;
        };

        const isOverlapping = newBoxes.some(box => isOverlap(newBox, box));
        const isNewBoxOverlapping = newMrBoxes.some(box =>
          isOverlap(newBox, box),
        );
        const isNewBoxesOverlapping = newBoxes.some(box =>
          isOverlap(newBox, box),
        );
        if (!isOverlapping && !isNewBoxOverlapping && !isNewBoxesOverlapping) {
          setNewBoxes(prevBoxes => [...prevBoxes, newBox]);
        } else {
          console.log('겹쳐진다아아아');
        }
      } else {
        setNewBoxes(prevBoxes => [...prevBoxes, newBox]);
      }
    }
  };

  const handleDragOver = e => {
    e.preventDefault();
  };

  const handleDragStart = (e, boxId) => {
    e.dataTransfer.setData('boxId', boxId);
  };

  //--------------------------회의실 드래그 앤 드롭--------------------------------

  const mrBoxMouseDownHandler = (e, boxIndex) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const mrBoxMoveHandler = e => {
      const currentMrBox = newMrBoxes[boxIndex];

      const newMouseX = e.clientX;
      const newMouseY = e.clientY;

      const mrDiffX = mouseX - currentMrBox.left;
      const mrDiffY = mouseY - currentMrBox.top;

      const newLeft = newMouseX - mrDiffX;
      const newTop = newMouseY - mrDiffY;

      const boardRect = boardEl.current.getBoundingClientRect();

      const boxRect = elRef.current[boxIndex].getBoundingClientRect();

      const limitedLeft = Math.max(
        boardRect.left - (boardRect.left + 10),
        Math.min(
          newLeft,
          boardRect.right - (boxRect.width + (boardRect.left + 10)),
        ),
      );
      const limitedTop = Math.max(
        boardRect.top - (boardRect.top + 10),
        Math.min(
          newTop,
          boardRect.bottom - (boxRect.height + (boardRect.top + 10)),
        ),
      );
      setNewMrBoxes(prevBoxes => {
        const newMrBoxes = [...prevBoxes];
        newMrBoxes[boxIndex] = {
          ...currentMrBox,
          left: limitedLeft,
          top: limitedTop,
        };
        return newMrBoxes;
      });
    };

    const spaceMouseUpHandler = e => {
      document.removeEventListener('mousemove', mrBoxMoveHandler);
      document.removeEventListener('mouseup', spaceMouseUpHandler);
    };

    document.addEventListener('mousemove', mrBoxMoveHandler);
    document.addEventListener('mouseup', spaceMouseUpHandler);
  };

  //--------------------------박스 드래그 앤 드롭--------------------------------

  const boxMouseDownHandler = (e, boxIndex) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const boxMoveHandler = e => {
      const currentBox = newBoxes[boxIndex];

      const newMouseX = e.clientX;
      const newMouseY = e.clientY;

      const boxDiffY = mouseY - currentBox.top;
      const boxDiffX = mouseX - currentBox.left;

      const newLeft = newMouseX - boxDiffX;
      const newTop = newMouseY - boxDiffY;

      const boardRect = boardEl.current.getBoundingClientRect();

      const boxRect = elRef.current[boxIndex].getBoundingClientRect();

      const limitedLeft = Math.max(
        boardRect.left - (boardRect.left + 10),
        Math.min(
          newLeft,
          boardRect.right - (boxRect.width + (boardRect.left + 10)),
        ),
      );
      const limitedTop = Math.max(
        boardRect.top - (boardRect.top + 10),
        Math.min(
          newTop,
          boardRect.bottom - (boxRect.height + (boardRect.top + 10)),
        ),
      );

      setNewBoxes(prevBoxes => {
        const newBoxes = [...prevBoxes];
        newBoxes[boxIndex] = {
          ...currentBox,
          left: limitedLeft,
          top: limitedTop,
        };
        document.addEventListener('mouseup', spaceMouseUpHandler);
        return newBoxes;
      });
    };

    const spaceMouseUpHandler = e => {
      document.removeEventListener('mousemove', boxMoveHandler);
      document.removeEventListener('mouseup', spaceMouseUpHandler);
    };

    document.addEventListener('mousemove', boxMoveHandler);
    document.addEventListener('mouseup', spaceMouseUpHandler);
  };

  //-------------------------------------------------------------------------------
  return (
    <>
      <Row>
        {/* ------------------------셀렉터 영역--------------------------------- */}
        <StSelect>
          <span>test3</span>
          {/* ------------------------회의실 셀렉터--------------------------------- */}
          {mrBoxes.map((box, i) => (
            <StBox
              key={box.mrId}
              ref={el => (elRef.current[i] = el)}
              draggable={true}
              onDragStart={e => handleDragStart(e, box.mrId)}
              left={box.left}
              top={box.top}
            >
              {box.inner} {box.mrId}
            </StBox>
          ))}
          {/* ------------------------박스 셀렉터--------------------------------- */}
          {boxes.map((box, i) => (
            <StBox
              key={box.boxId}
              ref={el => (elRef.current[i] = el)}
              draggable={true}
              onDragStart={e => handleDragStart(e, box.boxId)}
              left={box.left}
              top={box.top}
            >
              {box.inner} {box.boxId}
            </StBox>
          ))}
        </StSelect>
        {/* ------------------------리스트 영역--------------------------------- */}
        <StList>Space List</StList>
        <Column>
          <h2>Space Name</h2>
          {/* ------------------------보드 영역--------------------------------- */}
          <StBoard
            ref={boardEl}
            onDrop={HandleDrop}
            onDragOver={handleDragOver}
          >
            {/* ------------------------회의실 드롭--------------------------------- */}
            {newMrBoxes.map((box, index) => (
              <StDropBox
                onDrop={HandleDrop}
                onDragOver={handleDragOver}
                key={box.mrId}
                ref={el => (elRef.current[index] = el)}
                onMouseDown={e => mrBoxMouseDownHandler(e, index)}
                onDragStart={e => handleDragStart(e, box.mrId)}
                style={{ transform: `translate(${box.left}px, ${box.top}px)` }}
              >
                <div>
                  {box.inner} {box.mrId}
                </div>
                <StBtnBox>
                  <button>수정</button>
                  <button>삭제</button>
                </StBtnBox>
              </StDropBox>
            ))}
            {/* ------------------------박스 드롭--------------------------------- */}
            {newBoxes.map((box, index) => (
              <StDropBox
                key={box.boxId}
                ref={el => (elRef.current[index] = el)}
                onMouseDown={e => boxMouseDownHandler(e, index)}
                onDragStart={e => handleDragStart(e, box.boxId)}
                style={{ transform: `translate(${box.left}px, ${box.top}px)` }}
              >
                <div>
                  {box.inner} {box.boxId}
                </div>
                <StBtnBox>
                  <button>수정</button>
                  <button>삭제</button>
                </StBtnBox>
              </StDropBox>
            ))}
          </StBoard>
        </Column>
      </Row>
      {/* ------------------------스페이스 추가/완료 버튼--------------------------------- */}
      <StBtn>
        <button>Space 추가</button>
        <button>완료</button>
      </StBtn>
    </>
  );
};

export default Test3;

const StBox = styled.div`
  background: steelblue;
  width: 100px;
  height: 100px;
  margin: 10px;
  cursor: grab;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StDropBox = styled.div`
  background: #c0a55c;
  width: 100px;
  height: 100px;
  margin: 10px;
  cursor: grab;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const StSelect = styled.div`
  background: #759573;
  width: 150px;
  height: 700px;
  padding: 10px;
`;

const StList = styled.div`
  background: #80b166;
  width: 150px;
  height: 700px;
  padding: 10px;
`;

const StBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #867395;
  width: 700px;
  height: 700px;
  margin: 10px;
  position: relative;
  overflow: hidden;
`;

const StBtnBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  gap: 5px;
`;

const StBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
`;
