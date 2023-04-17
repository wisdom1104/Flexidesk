import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Row } from '../../components/Flex';

const Test3 = () => {
  const [newBoxes, setNewBoxes] = useState([
    { boxId: 2, left: 20, top: 50, inner: '박스' },
  ]);

  const elRef = useRef([]);
  const boardEl = useRef(null);

  const handleDragStart = (e, boxId) => {
    e.dataTransfer.setData('boxId', boxId);
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
        {/* ------------------------보드 영역--------------------------------- */}
        <StBoard ref={boardEl}>
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
            </StDropBox>
          ))}
        </StBoard>
      </Row>
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
  height: 300px;
  /* margin: 10px; */
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
