import React from 'react';
import { useDispatch } from 'react-redux';
import {
  BoxBtn,
  BoxInput,
  BoxSubBtn,
  StBox,
  StBtnBox,
} from '../../shared/SpaceStyles';
import { useMultiBoxDeleteAndEdit } from '../../hooks/adminSpace/useAdminSpaceHook';
import { useBoxDragAndDrop } from '../../hooks/adminSpace/useBoxDragAndDrop';
import { handleDragStart } from '../../utils/dragStartHandler';

function AdminMultiBoxItem({
  multiBox,
  // HandleDrop,
  // handleDragOver,
  // elRef,
  // multiBoxMouseDownHandler,
  boardEl,
  // handleDragStart,
  spaceId,
  multiBoxList,
}) {
  const dispatch = useDispatch();

  const {
    onClickDeleteBoxHandler,
    onEditBoxNameHandler,
    multiBoxEdit,
    setMultiBoxEdit,
    editMultiBoxName,
    setEditMultiBoxName,
  } = useMultiBoxDeleteAndEdit(dispatch, multiBox, spaceId);
  const dispatchValue = '__editMultiBox';
  const type = 'multiBox';
  const { elRef, boxMouseDownHandler } = useBoxDragAndDrop(
    dispatch,
    spaceId,
    multiBox,
    boardEl,
    multiBoxList,
    dispatchValue,
    type,
  );

  return (
    <>
      {!multiBoxEdit ? (
        <StBox
          key={multiBox.multiBoxId}
          // onDrop={HandleDrop}
          // onDragOver={handleDragOver}
          ref={el => (elRef.current[multiBox.multiBoxId] = el)}
          onMouseDown={e => boxMouseDownHandler(e, multiBox.multiBoxId)}
          onDragStart={e => handleDragStart(e, multiBox.multiBoxId)}
          transformValue={`translate(${multiBox.x}px, ${multiBox.y}px)`}
        >
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
        </StBox>
      ) : (
        <StBox
          key={multiBox.multiBoxId}
          transformValue={`translate(${multiBox.x}px, ${multiBox.y}px)`}
        >
          <BoxInput
            maxLength={6}
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
        </StBox>
      )}
    </>
  );
}

export default AdminMultiBoxItem;
