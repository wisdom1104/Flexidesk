import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { __deleteBox, __editBox } from '../../redux/modules/spaceBoxSlice';
import { StBtnBox } from '../../pages/space/AdminSpace';
import { StDropBox } from './SpaceStyles';

function BoxItem({
  box,
  boxList,
  HandleDrop,
  handleDragOver,
  elRef,
  boxMouseDownHandler,
  handleDragStart,
  spaceId,
}) {
  const dispatch = useDispatch();

  //box 삭제
  const onClickDeleteBoxHandler = async boxId => {
    const payload = {
      boxId,
      spaceId,
    };
    dispatch(__deleteBox(payload));
  };

  //box name 수정
  const [boxEdit, setBoxEdit] = useState(false);
  const [editBoxName, setEditBoxName] = useState(box.boxName);

  const onEditBoxNameHandler = async () => {
    const payload = {
      spaceId,
      boxId: box.boxId,
      boxName: editBoxName,
      x: box.x,
      y: box.y,
    };
    dispatch(__editBox(payload));
    setBoxEdit(!boxEdit);
  };

  return (
    <>
      <StDropBox
        key={box.boxId}
        onDrop={HandleDrop}
        onDragOver={handleDragOver}
        ref={el => (elRef.current[box.boxId] = el)}
        onMouseDown={e => boxMouseDownHandler(e, box.boxId)}
        onDragStart={e => handleDragStart(e, box.boxId)}
        style={{ transform: `translate(${box.x}px, ${box.y}px)` }}
      >
        {!boxEdit ? (
          <>
            <div>
              {box.boxName}/{box.boxId}
            </div>
            <StBtnBox>
              <button
                onClick={() => {
                  setBoxEdit(!boxEdit);
                }}
              >
                수정
              </button>
              <button
                onClick={() => {
                  onClickDeleteBoxHandler(box.boxId);
                }}
              >
                삭제
              </button>
            </StBtnBox>
          </>
        ) : (
          <>
            <input
              type="text"
              value={editBoxName}
              onChange={e => {
                setEditBoxName(e.target.value);
              }}
            />
            <StBtnBox>
              <button
                onClick={() => {
                  onEditBoxNameHandler();
                }}
              >
                완료
              </button>
              <button
                onClick={() => {
                  setBoxEdit(!boxEdit);
                }}
              >
                취소
              </button>
            </StBtnBox>
          </>
        )}
      </StDropBox>
    </>
  );
}

export default BoxItem;
