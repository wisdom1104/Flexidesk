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

function AdminMultiBoxItem({
  multiBox,
  HandleDrop,
  handleDragOver,
  elRef,
  multiBoxMouseDownHandler,
  handleDragStart,
  spaceId,
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

  return (
    <>
      {!multiBoxEdit ? (
        <StBox
          key={multiBox.multiBoxId}
          onDrop={HandleDrop}
          onDragOver={handleDragOver}
          ref={el => (elRef.current[multiBox.multiBoxId] = el)}
          onMouseDown={e => multiBoxMouseDownHandler(e, multiBox.multiBoxId)}
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
