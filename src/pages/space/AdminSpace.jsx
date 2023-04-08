import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Test3 from './Test3';
import { useDispatch, useSelector } from 'react-redux';
import { __addSpace, __getSpaces } from '../../redux/modules/spacesSlice';
import AdminSpaceBox from '../../features/space/AdminSpaceBox';
import { __deleteSpace } from '../../redux/modules/spaceSlice';

const AdminSpace = () => {
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
  const dispatch = useDispatch();

  const { spaces } = useSelector(state => state.spaces);

  // useEffect(() => {
  //   setSelectedSpace(spaces[0]);
  // }, []);
  // console.log(spaces[0]);

  useEffect(() => {
    dispatch(__getSpaces());
  }, [dispatch]);
  //추가
  const onClickAddSpaceHandler = async () => {
    const newSpace = {
      spaceName: 'New Space',
    };

    dispatch(__addSpace(newSpace));
    console.log(newSpace);
  };

  //삭제
  const onDeleteSpaceHandler = async spaceId => {
    dispatch(__deleteSpace(spaceId));
    // dispatch(__getSpaces())
  };
  //
  const [selectedSpace, setSelectedSpace] = useState(null);
  useEffect(() => {
    setSelectedSpace(spaces[0]);
  }, [spaces]);

  const onClickSpaceListHandler = spaceId => {
    const space = spaces.find(space => space.spaceId === spaceId);
    setSelectedSpace(space);
  };

  return (
    <>
      <Row>
        {/* ------------------------셀렉터 영역--------------------------------- */}
        <StSelect>
          <span>AdminSpace</span>
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
        <StList>
          Space List
          <br />
          {spaces?.map(space => {
            if (space)
              return (
                <span
                  style={{ cursor: 'pointer' }}
                  key={space.spaceId}
                  onClick={() => onClickSpaceListHandler(space.spaceId)}
                >
                  {space.spaceName}/{space.spaceId}-----
                  <button
                    onClick={() => {
                      const confirmDelete =
                        window.confirm('정말 삭제하시겠습니까?');
                      if (confirmDelete) {
                        onDeleteSpaceHandler(space.spaceId);
                      }
                    }}
                  >
                    X
                  </button>
                </span>
              );
          })}
        </StList>
        <Column>
          {selectedSpace && (
            <AdminSpaceBox
              spaceId={selectedSpace.spaceId}
              selectedSpace={selectedSpace}
            />
          )}
          {/* <h2>Space Name</h2>
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
          </StBoard> */}
        </Column>
      </Row>
      <StBtn>
        <button onClick={onClickAddSpaceHandler}>Space 추가</button>
        <button>완료</button>
      </StBtn>
    </>
  );
};

export default AdminSpace;

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

const StBtnBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  gap: 5px;
`;

const StList = styled.div`
  background: #80b166;
  width: 200px;
  height: 725px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: scroll;
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
