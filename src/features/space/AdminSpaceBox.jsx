import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { __editSpace, __getSpace } from '../../redux/modules/spaceSlice';
import { __addMr, __editMr } from '../../redux/modules/spaceMrSlice';
import { __addBox, __editBox } from '../../redux/modules/spaceBoxSlice';
import MrItem from './MrItem';
import BoxItem from './BoxItem';

function AdminSpaceBox({ spaceId, selectedSpace }) {
  const [mrBoxes] = useState([{ mrId: 1, x: 0, y: 0, inner: '회의실' }]);
  const [boxes] = useState([{ boxId: 2, x: 0, y: 0, inner: '박스' }]);

  const elRef = useRef([]);
  const boardEl = useRef(null);

  const [newMrBoxes, setNewMrBoxes] = useState([]);
  const [newBoxes, setNewBoxes] = useState([]);
  const dispatch = useDispatch();

  const { space } = useSelector(state => state.space);
  // console.log('space', space);
  // const mrList = [];
  useEffect(() => {
    dispatch(__getSpace(spaceId));
  }, [selectedSpace]);

  // space name 수정
  const [editSpaceName, setEditSpaceName] = useState('');
  useEffect(() => {
    const spaceName = space?.[0]?.spaceName;
    setEditSpaceName(spaceName || '');
  }, [space]);
  const mrList = space?.map(item => item.mrlist);
  const boxList = space?.map(item => item.boxlist);

  // console.log('space', space);
  // console.log('boxList', boxList[0]);
  // console.log('mrList', mrList[0]);

  // 모든 요소 드롭
  const HandleDrop = async e => {
    e.preventDefault();
    // const boxList = space?.map(item => item.boxlist);
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

  const handleDragStart = (e, boxId) => {
    e.dataTransfer.setData('boxId', boxId);
  };
  //--------------------------회의실 드래그 앤 드롭--------------------------------

  // mr 좌표 수정 (드래그 앤 드롭)
  const mrBoxMouseDownHandler = (e, boxIndex) => {
    // console.log(boxIndex);
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const mrBoxMoveHandler = e => {
      const currentMrBox = mrList[0].find(mrBox => mrBox.mrId === boxIndex);
      // console.log('currentMrBox', currentMrBox);
      // console.log('mrList', mrList[0]);

      const newMouseX = e.clientX;
      const newMouseY = e.clientY;

      const mrDiffX = mouseX - currentMrBox.x; // 현재 이동 중인 상자의 시작 위치와 마우스 위치 사이의 X축 차이
      const mrDiffY = mouseY - currentMrBox.y; // 현재 이동 중인 상자의 시작 위치와 마우스 위치 사이의 Y축 차이

      const newx = newMouseX - mrDiffX; // 새로운 X 위치 계산
      const newy = newMouseY - mrDiffY; // 새로운 Y 위치 계산

      const boardRect = boardEl.current.getBoundingClientRect(); // 이동 가능한 영역(board)의 위치와 크기 정보 가져오기
      const boxRect = elRef.current[boxIndex].getBoundingClientRect(); // 이동 대상 상자(box)의 위치와 크기 정보 가져오기

      const limitedx = Math.max(
        // X 위치 제한 범위 설정
        boardRect.x - (boardRect.x + 10), // board 영역에서 왼쪽 끝으로 이동하는 경우
        Math.min(newx, boardRect.right - (boxRect.width + (boardRect.x + 10))), // board 영역에서 오른쪽 끝으로 이동하는 경우
      );
      const limitedy = Math.max(
        // Y 위치 제한 범위 설정
        boardRect.y - (boardRect.y + 10), // board 영역에서 위쪽 끝으로 이동하는 경우
        Math.min(
          newy,
          boardRect.bottom - (boxRect.height + (boardRect.y + 10)), // board 영역에서 아래쪽 끝으로 이동하는 경우
        ),
      );

      const payload = {
        spaceId,
        mrId: currentMrBox.mrId,
        mrName: currentMrBox.mrName,
        x: Number(limitedx),
        y: Number(limitedy),
      };
      // console.log('payload1', payload);
      return payload;
    };

    const spaceMouseUpHandler = (e, boxIndex) => {
      document.removeEventListener('mousemove', mrBoxMoveHandler);
      document.removeEventListener('mouseup', spaceMouseUpHandler);
      const result = mrBoxMoveHandler(e, boxIndex);
      // console.log('payload2', result);
      dispatch(__editMr(result)); // 새로운 위치로 이동
    };

    document.addEventListener('mousemove', mrBoxMoveHandler);
    document.addEventListener('mouseup', spaceMouseUpHandler);
  };

  //--------------------------박스 드래그 앤 드롭--------------------------------

  // box 좌표 수정 (드래그 앤 드롭)

  const boxMouseDownHandler = (e, boxIndex) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const boxMoveHandler = e => {
      const currentBox = boxList[0].find(box => box.boxId === boxIndex);
      // console.log(currentBox);

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
      // console.log('payload1', payload);
      return payload;
    };

    const spaceMouseUpHandler = e => {
      document.removeEventListener('mousemove', boxMoveHandler);
      document.removeEventListener('mouseup', spaceMouseUpHandler);
      const result = boxMoveHandler(e, boxIndex);
      // console.log('payload2', result);
      dispatch(__editBox(result)); // 새로운 위치로 이동
    };

    document.addEventListener('mousemove', boxMoveHandler);
    document.addEventListener('mouseup', spaceMouseUpHandler);
  };

  //---------------------------------------------------

  //space name 수정
  const [spaceEdit, setSpaceEdit] = useState(false);
  const onEditSpaceNameHandler = async spaceId => {
    const payload = {
      spaceId,
      spaceName: editSpaceName,
    };
    dispatch(__editSpace(payload));
    setSpaceEdit(!spaceEdit);
  };

  return (
    <>
      {/* space name 부분 */}
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
      {/* board 부분 */}
      <StBoard ref={boardEl} onDrop={HandleDrop} onDragOver={handleDragOver}>
        {newMrBoxes.map((box, index) => (
          <StDropMr
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
          </StDropMr>
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

export const StBtnBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  gap: 5px;
`;

export const StDropMr = styled.div`
  background: #c478a4;
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
