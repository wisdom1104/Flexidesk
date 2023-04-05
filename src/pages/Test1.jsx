import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Column, Row } from '../components/Flex';

const Test1 = () => {
  const [mrBoxes, setMrBoxes] = useState([
    { mrId: 1, left: 20, top: 20, inner: '회의실', zIndex: 1 },
  ]);
  const elRef = useRef([]);
  const boardEl = useRef(null);
  const [newMrBoxes, setNewMrBoxes] = useState([]);

  //------------------------모든 상자 드롭----------------------------------
  const HandleDrop = e => {
    e.preventDefault();
    const id = e.dataTransfer.getData('boxId');
    const targetRect = e.target.getBoundingClientRect();
    if (Number(id) === 1) {
      const newBox = {
        // ...currentBox,
        mrId: Number(id) + Number(newMrBoxes.length),
        left: e.clientX - targetRect.left - 50,
        top: e.clientY - targetRect.top - 50,
        inner: 'new 회의실',
        zIndex: 1,
      };
      if (!newMrBoxes.some(box => box.mrId === newBox.mrId)) {
        setNewMrBoxes(prevBoxes => [...prevBoxes, newBox]);
      }
    }
  };
  console.log('newMrBoxes', newMrBoxes);
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

  //-------------------------------------------------------------------------------
  return (
    <>
      <Row>
        <StSelect>
          <span>test1</span>
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
        </StSelect>
        <StList>Space List</StList>
        <Column>
          <h2>Space Name</h2>
          <StBoard
            ref={boardEl}
            onDrop={HandleDrop}
            onDragOver={handleDragOver}
          >
            {newMrBoxes.map((box, index) => (
              <StDropBox
                onDrop={HandleDrop}
                onDragOver={handleDragOver}
                key={box.mrId}
                ref={el => (elRef.current[index] = el)}
                onMouseDown={e => mrBoxMouseDownHandler(e, index)}
                onDragStart={e => handleDragStart(e, box.mrId)}
                style={{
                  transform: `translate(${box.left}px, ${box.top}px)`,
                  zIndex: box.zIndex,
                }}
              >
                <div>
                  {box.inner} {box.mrId}
                </div>
              </StDropBox>
            ))}
          </StBoard>
        </Column>
      </Row>
    </>
  );
};

export default Test1;

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
  /* z-index: 0; */
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
