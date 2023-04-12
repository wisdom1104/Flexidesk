import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  __deleteSpace,
  __editSpace,
  __getSpace,
} from '../../redux/modules/spaceSlice';
import { __addMr, __editMr } from '../../redux/modules/spaceMrSlice';
import { __addBox, __editBox } from '../../redux/modules/spaceBoxSlice';
import MrItem from './MrItem';
import BoxItem from './BoxItem';
import { StBoard, StBtn } from '../../pages/space/AdminSpace';
import { __addSpace } from '../../redux/modules/spacesSlice';
import { useNavigate } from 'react-router-dom';
import CreateSpace from './CreateSpace';
import { Row } from '../../components/Flex';
import { __editFloor, __getFloor } from '../../redux/modules/floorSlice';

function AdminSpaceBox({
  spaceId,
  floorId,
  selectedSpace,
  selectedFloor,
  handleDragStart,
  isModal,
  setIsModal,
}) {
  const [mrBoxes] = useState([{ mrId: 1, x: 0, y: 0, inner: '회의실' }]);
  const [boxes] = useState([{ boxId: 2, x: 0, y: 0, inner: '박스' }]);

  const elRef = useRef([]);
  const boardEl = useRef(null);

  const [newMrBoxes, setNewMrBoxes] = useState([]);
  const [newBoxes, setNewBoxes] = useState([]);
  const dispatch = useDispatch();
  const navi = useNavigate();

  const { space } = useSelector(state => state.space);
  const { floor } = useSelector(state => state.floor);

  //floor, space 조회
  useEffect(() => {
    dispatch(__getSpace(spaceId));
  }, [selectedSpace]);
  useEffect(() => {
    dispatch(__getFloor(floorId));
  }, [selectedFloor]);

  const mrList = space?.map(item => item.mrlist);
  const boxList = space?.map(item => item.boxlist);

  // 모든 요소 드롭
  const HandleDrop = async e => {
    e.preventDefault();
    const id = e.dataTransfer.getData('boxId');
    const targetRect = e.target.getBoundingClientRect();

    //------------------------회의실드롭----------------------------------
    if (Number(id) === 1) {
      const newBox = {
        spaceId,
        mrName: 'new mr',
        x: e.clientX - targetRect.x - 50,
        y: e.clientY - targetRect.y - 50,
      };
      if (Number(mrList.length) !== 0 || Number(boxList.length) !== 0) {
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
        const isMrListOverlapping = mrList.some(box => isOverlap(newBox, box));
        const isBoxListOverlapping = boxList.some(box =>
          isOverlap(newBox, box),
        );
        console.log(isOverlapping);
        console.log(isMrListOverlapping);
        console.log(isBoxListOverlapping);
        if (!isOverlapping && !isMrListOverlapping && !isBoxListOverlapping) {
          dispatch(__addMr(newBox));
        } else {
          console.log('겹쳐져');
        }
      } else {
        dispatch(__addMr(newBox));
      }
    }

    //------------------------박스 드롭----------------------------------
    if (Number(id) === 2) {
      const newBox = {
        spaceId,
        boxName: 'new box',
        x: e.clientX - targetRect.x - 50,
        y: e.clientY - targetRect.y - 50,
      };
      if (Number(mrList[0].length) !== 0 || Number(boxList[0].length) !== 0) {
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
        const isMrListOverlapping = mrList[0].some(box =>
          isOverlap(newBox, box),
        );
        const isBoxListOverlapping = boxList[0].some(box =>
          isOverlap(newBox, box),
        );
        console.log('mrList[0]', mrList[0]);
        console.log('isOverlapping', isOverlapping);
        console.log('isMrListOverlapping', isMrListOverlapping);
        console.log('isBoxListOverlapping', isBoxListOverlapping);

        if (!isOverlapping && !isMrListOverlapping && !isBoxListOverlapping) {
          dispatch(__addBox(newBox));
        } else {
          console.log('겹쳐져');
        }
      } else {
        dispatch(__addBox(newBox));
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

      const payload = {
        spaceId,
        mrId: currentMrBox.mrId,
        mrName: currentMrBox.mrName,
        x: Number(limitedx),
        y: Number(limitedy),
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
  // console.log(newMrBoxes);

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

      const payload = {
        spaceId,
        boxId: currentBox.boxId,
        boxName: currentBox.boxName,
        x: Number(limitedx),
        y: Number(limitedy),
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

  //---------------------------------------------------
  //space name 수정
  const [editSpaceName, setEditSpaceName] = useState('');
  const [spaceEdit, setSpaceEdit] = useState(false);

  useEffect(() => {
    const spaceName = space?.[0]?.spaceName;
    setEditSpaceName(spaceName || '');
  }, [space]);
  //space name 수정 핸들러
  const onEditSpaceNameHandler = async spaceId => {
    const payload = {
      spaceId,
      spaceName: editSpaceName,
    };
    dispatch(__editSpace(payload));
    setSpaceEdit(!spaceEdit);
  };

  //floor name 수정
  const [editFloorName, setEditFloorName] = useState('');
  const [floorEdit, setFloorEdit] = useState(false);

  useEffect(() => {
    const floorName = floor?.[0]?.floorName;
    setEditFloorName(floorName || '');
  }, [floor]);
  //floor name 수정 핸들러
  const onEditFloorNameHandler = async floorId => {
    const payload = {
      floorId,
      floorName: editFloorName,
    };
    dispatch(__editFloor(payload));
    setFloorEdit(!floorEdit);
  };

  return (
    <>
      <StSubHeader>
        <Row>
          {/* floor name 부분 */}
          {!floorEdit ? (
            <div>
              {floor?.map(item => {
                if (item)
                  return (
                    <span style={{ margin: '10px' }} key={item.floorId}>
                      {item.floorName}
                      {/* {item.floorId} */}
                      <button
                        onClick={() => {
                          setFloorEdit(!floorEdit);
                        }}
                      >
                        수정하기
                      </button>
                    </span>
                  );
              })}
            </div>
          ) : (
            <div>
              {floor?.map(item => {
                if (item)
                  return (
                    <div key={item.floorId}>
                      <input
                        style={{ padding: '10px' }}
                        type="text"
                        value={editFloorName}
                        onChange={e => {
                          setEditFloorName(e.target.value);
                        }}
                      />
                      <button
                        onClick={() => {
                          onEditFloorNameHandler(item.floorId);
                        }}
                      >
                        수정 완료
                      </button>
                    </div>
                  );
              })}
            </div>
          )}
          /{/* space name 부분 */}
          {!spaceEdit ? (
            <div>
              {space?.map(item => {
                if (item)
                  return (
                    <span style={{ margin: '10px' }} key={item.spaceId}>
                      {item.spaceName}
                      {/* {item.spaceId} */}
                      <button
                        onClick={() => {
                          setSpaceEdit(!spaceEdit);
                        }}
                      >
                        수정하기
                      </button>
                    </span>
                  );
              })}
            </div>
          ) : (
            <div>
              {space?.map(item => {
                if (item)
                  return (
                    <div key={item.spaceId}>
                      <input
                        style={{ padding: '10px' }}
                        type="text"
                        value={editSpaceName}
                        onChange={e => {
                          setEditSpaceName(e.target.value);
                        }}
                      />
                      <button
                        onClick={() => {
                          onEditSpaceNameHandler(item.spaceId);
                        }}
                      >
                        수정 완료
                      </button>
                    </div>
                  );
              })}
            </div>
          )}
        </Row>
        <StBtn>
          <button
            onClick={() => {
              setIsModal(!isModal);
            }}
          >
            Space 관리
          </button>
          <button onClick={() => navi('/space')}>완료</button>
        </StBtn>
      </StSubHeader>
      {/* board 부분 */}
      <StBoard ref={boardEl} onDrop={HandleDrop} onDragOver={handleDragOver}>
        {newMrBoxes.map((box, index) => (
          <StDragMr
            onDrop={HandleDrop}
            onDragOver={handleDragOver}
            key={box.mrId}
            ref={el => (elRef.current[index] = el)}
            onMouseDown={e => mrBoxMouseDownHandler(e, index)}
            onDragStart={e => handleDragStart(e, box.mrId)}
            style={{ transform: `translate(${box.x}px, ${box.y}px)` }}
          >
            <div>{box.mrName}</div>
          </StDragMr>
        ))}
        {newBoxes.map((box, index) => (
          <StDragBox
            key={box.boxId}
            ref={el => (elRef.current[index] = el)}
            onMouseDown={e => boxMouseDownHandler(e, index)}
            onDragStart={e => handleDragStart(e, box.boxId)}
            style={{ transform: `translate(${box.x}px, ${box.y}px)` }}
          >
            <div>{box.boxName}</div>
          </StDragBox>
        ))}
        {/* 회의실 드래그 앤 드롭 */}
        <div>
          {space?.map(item =>
            item.mrlist?.length > 0
              ? item.mrlist?.map(mr => (
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
            item.boxlist?.length > 0
              ? item.boxlist?.map(box => (
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
      </StBoard>
    </>
  );
}

export default AdminSpaceBox;

export const StSubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
`;

export const StDragMr = styled.div`
  background: #c478a4;
  opacity: 0.2;
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

export const StDragBox = styled.div`
  background: #c0a55c;
  opacity: 0.2;
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
