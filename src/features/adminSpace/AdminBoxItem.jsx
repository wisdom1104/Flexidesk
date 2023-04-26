import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { __deleteBox, __editBox } from '../../redux/modules/spaceBoxSlice';
import {
  BoxBtn,
  BoxInput,
  BoxSubBtn,
  StBtnBox,
  StDropBox,
} from '../../shared/SpaceStyles';

function AdminBoxItem({
  box,
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
        transformValue={`translate(${box.x}px, ${box.y}px)`}
      >
        {!boxEdit ? (
          <>
            <div>{box.boxName}</div>
            <StBtnBox>
              <BoxBtn
                onClick={() => {
                  setBoxEdit(!boxEdit);
                }}
              >
                수정
              </BoxBtn>
              <BoxSubBtn
                onClick={() => {
                  onClickDeleteBoxHandler(box.boxId);
                }}
              >
                삭제
              </BoxSubBtn>
            </StBtnBox>
          </>
        ) : (
          <>
            <BoxInput
              type="text"
              value={editBoxName}
              onChange={e => {
                setEditBoxName(e.target.value);
              }}
            />
            <StBtnBox>
              <BoxBtn
                onClick={() => {
                  onEditBoxNameHandler();
                }}
              >
                완료
              </BoxBtn>
              <BoxSubBtn
                onClick={() => {
                  setBoxEdit(!boxEdit);
                }}
              >
                취소
              </BoxSubBtn>
            </StBtnBox>
          </>
        )}
      </StDropBox>
    </>
  );
}

export default AdminBoxItem;
