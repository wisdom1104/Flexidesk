import React from 'react';
import { useDispatch } from 'react-redux';
import {
  BoxBtn,
  BoxInput,
  BoxSubBtn,
  StBox,
  StBtnBox,
} from '../../shared/SpaceStyles';
import { useBoxDeleteAndEdit } from '../../hooks/adminSpace/useAdminSpaceHook';

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

  const {
    onClickDeleteBoxHandler,
    onEditBoxNameHandler,
    boxEdit,
    setBoxEdit,
    editBoxName,
    setEditBoxName,
  } = useBoxDeleteAndEdit(dispatch, box, spaceId);

  return (
    <>
      <StBox
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
      </StBox>
    </>
  );
}

export default AdminBoxItem;
