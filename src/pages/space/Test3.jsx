import React, { useRef, useState } from 'react';
import styled from 'styled-components';

function Test3() {
  const [mrBoxes] = useState([{ mrId: 1, x: 20, y: 20, inner: '회의실' }]);
  const [boxes] = useState([{ boxId: 2, x: 20, y: 50, inner: '박스' }]);
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
        x: e.clientX - targetRect.x - 50,
        y: e.clientY - targetRect.y - 50,
        inner: 'new 회의실',
        zIndex: 1,
      };
      if (Number(newMrBoxes.length) !== 0 || Number(newBoxes.length) !== 0) {
        const isOverlap = (draggedBox, existingBox) => {
          const draggedx = draggedBox.x;
          const draggedRight = draggedBox.x + 80;
          const draggedy = draggedBox.y;
          const draggedBottom = draggedBox.y + 80;

          const existingx = existingBox.x;
          const existingRight = existingBox.x + 80;
          const existingy = existingBox.y;
          const existingBottom = existingBox.y + 80;

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
        const isNewBoxOverlapping = newMrBoxes.some(box =>
          isOverlap(newBox, box),
        );
        const isNewBoxesOverlapping = newBoxes.some(box =>
          isOverlap(newBox, box),
        );
        if (!isOverlapping && !isNewBoxOverlapping && !isNewBoxesOverlapping) {
          setNewMrBoxes(prevBoxes => [...prevBoxes, newBox]);
        }
      } else {
        setNewMrBoxes(prevBoxes => [...prevBoxes, newBox]);
      }
    }

    //------------------------박스 드롭----------------------------------
    if (Number(id) === 2) {
      const newBox = {
        boxId: Number(id) + Number(newBoxes.length) - 1,
        x: e.clientX - targetRect.x - 50,
        y: e.clientY - targetRect.y - 50,
        inner: 'new 박스',
        zIndex: 1,
      };
      if (Number(newBoxes.length) !== 0 || Number(newMrBoxes.length) !== 0) {
        const isOverlap = (draggedBox, existingBox) => {
          const draggedx = draggedBox.x;
          const draggedRight = draggedBox.x + 80;
          const draggedy = draggedBox.y;
          const draggedBottom = draggedBox.y + 80;

          const existingx = existingBox.x;
          const existingRight = existingBox.x + 80;
          const existingy = existingBox.y;
          const existingBottom = existingBox.y + 80;

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
        const isNewBoxOverlapping = boxes.some(box => isOverlap(newBox, box));
        const isNewBoxesOverlapping = mrBoxes.some(box =>
          isOverlap(newBox, box),
        );
        if (!isOverlapping && !isNewBoxOverlapping && !isNewBoxesOverlapping) {
          setNewBoxes(prevBoxes => [...prevBoxes, newBox]);
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

      const mrDiffX = mouseX - currentMrBox.x;
      const mrDiffY = mouseY - currentMrBox.y;

      const newx = newMouseX - mrDiffX;
      const newy = newMouseY - mrDiffY;

      const boardRect = boardEl.current.getBoundingClientRect();

      const boxRect = elRef.current[boxIndex].getBoundingClientRect();

      const limitedx = Math.max(
        boardRect.x - (boardRect.x + 10),
        Math.min(newx, boardRect.right - (boxRect.width + (boardRect.x + 10))),
      );
      const limitedy = Math.max(
        boardRect.y - (boardRect.y + 10),
        Math.min(
          newy,
          boardRect.bottom - (boxRect.height + (boardRect.y + 10)),
        ),
      );
      setNewMrBoxes(prevBoxes => {
        const newMrBoxes = [...prevBoxes];
        newMrBoxes[boxIndex] = {
          ...currentMrBox,
          x: limitedx,
          y: limitedy,
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
      console.log('currentBox', currentBox);

      const newMouseX = e.clientX;
      const newMouseY = e.clientY;

      const boxDiffY = mouseY - currentBox.y;
      const boxDiffX = mouseX - currentBox.x;

      const newx = newMouseX - boxDiffX;
      const newy = newMouseY - boxDiffY;

      const boardRect = boardEl.current.getBoundingClientRect();

      const boxRect = elRef.current[boxIndex].getBoundingClientRect();

      const limitedx = Math.max(
        boardRect.x - (boardRect.x + 10),
        Math.min(newx, boardRect.right - (boxRect.width + (boardRect.x + 10))),
      );
      const limitedy = Math.max(
        boardRect.y - (boardRect.y + 10),
        Math.min(
          newy,
          boardRect.bottom - (boxRect.height + (boardRect.y + 10)),
        ),
      );

      setNewBoxes(prevBoxes => {
        const newBoxes = [...prevBoxes];
        newBoxes[boxIndex] = {
          ...currentBox,
          x: limitedx,
          y: limitedy,
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
  // console.log(newMrBoxes);
  //-------------------------------------------------------------------------------
  return (
    <>
      <Row>
        {/* ------------------------셀렉터 영역--------------------------------- */}
        <StSelect>
          <span>Test3</span>
          {/* ------------------------회의실 셀렉터--------------------------------- */}
          {mrBoxes.map((box, i) => (
            <StBox
              key={box.mrId}
              ref={el => (elRef.current[i] = el)}
              draggable={true}
              onDragStart={e => handleDragStart(e, box.mrId)}
              x={box.x}
              y={box.y}
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
              x={box.x}
              y={box.y}
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
                style={{ transform: `translate(${box.x}px, ${box.y}px)` }}
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
                style={{ transform: `translate(${box.x}px, ${box.y}px)` }}
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
}

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
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
