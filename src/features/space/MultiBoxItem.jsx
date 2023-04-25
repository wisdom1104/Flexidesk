import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  BoxBtn,
  BoxInput,
  BoxSubBtn,
  StBtnBox,
  StDropBox,
} from './SpaceStyles';
import {
  __deleteMultiBox,
  __editMultiBox,
} from '../../redux/modules/MultiBoxSlice';

function MultiBoxItem({
  multiBox,
  HandleDrop,
  handleDragOver,
  elRef,
  multiBoxMouseDownHandler,
  handleDragStart,
  spaceId,
}) {
  const dispatch = useDispatch();

  //multiBox 삭제
  const onClickDeleteBoxHandler = async multiBoxId => {
    const payload = {
      multiBoxId,
      spaceId,
    };
    dispatch(__deleteMultiBox(payload));
  };

  //multiBox name 수정
  const [multiBoxEdit, setMultiBoxEdit] = useState(false);
  const [editMultiBoxName, setEditMultiBoxName] = useState(
    multiBox.multiBoxName,
  );

  const onEditBoxNameHandler = async () => {
    const payload = {
      spaceId,
      multiBoxId: multiBox.multiBoxId,
      multiBoxName: editMultiBoxName,
      x: multiBox.x,
      y: multiBox.y,
    };
    dispatch(__editMultiBox(payload));
    setMultiBoxEdit(!multiBoxEdit);
  };

  return (
    <>
      <StDropBox
        key={multiBox.multiBoxId}
        onDrop={HandleDrop}
        onDragOver={handleDragOver}
        ref={el => (elRef.current[multiBox.multiBoxId] = el)}
        onMouseDown={e => multiBoxMouseDownHandler(e, multiBox.multiBoxId)}
        onDragStart={e => handleDragStart(e, multiBox.multiBoxId)}
        style={{ transform: `translate(${multiBox.x}px, ${multiBox.y}px)` }}
      >
        {!multiBoxEdit ? (
          <>
            <div>{multiBox.multiBoxName}</div>
            <StBtnBox>
              <BoxBtn
                onClick={() => {
                  setMultiBoxEdit(!multiBoxEdit);
                }}
              >
                수정
              </BoxBtn>
              <BoxSubBtn
                onClick={() => {
                  onClickDeleteBoxHandler(multiBox.multiBoxId);
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
              value={editMultiBoxName}
              onChange={e => {
                setEditMultiBoxName(e.target.value);
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
                  setMultiBoxEdit(!multiBoxEdit);
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

export default MultiBoxItem;
