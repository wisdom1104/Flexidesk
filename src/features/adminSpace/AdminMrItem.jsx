import React from 'react';
import { useDispatch } from 'react-redux';
import {
  BoxBtn,
  BoxInput,
  BoxSubBtn,
  StBox,
  StBtnBox,
} from '../../shared/SpaceStyles';
import { useMrDeleteAndEdit } from '../../hooks/adminSpace/useAdminSpaceHook';

function AdminMrItem({
  mr,
  HandleDrop,
  handleDragOver,
  elRef,
  mrBoxMouseDownHandler,
  handleDragStart,
  spaceId,
}) {
  const dispatch = useDispatch();

  const {
    onClickDeleteMrHandler,
    onEditMrNameHandler,
    mrEdit,
    setMrEdit,
    editMrName,
    setEditMrName,
  } = useMrDeleteAndEdit(dispatch, mr, spaceId);

  return (
    <>
      {!mrEdit ? (
        <StBox
          key={mr.mrId}
          onDrop={HandleDrop}
          onDragOver={handleDragOver}
          ref={el => (elRef.current[mr.mrId] = el)}
          onMouseDown={e => mrBoxMouseDownHandler(e, mr.mrId)}
          onDragStart={e => handleDragStart(e, mr.mrId)}
          transformValue={`translate(${mr.x}px, ${mr.y}px)`}
        >
          <div>{mr.mrName}</div>
          <StBtnBox>
            <BoxBtn
              onClick={() => {
                setMrEdit(!mrEdit);
              }}
            >
              수정
            </BoxBtn>
            <BoxSubBtn
              onClick={() => {
                onClickDeleteMrHandler(mr.mrId);
              }}
            >
              삭제
            </BoxSubBtn>
          </StBtnBox>
        </StBox>
      ) : (
        <StBox key={mr.mrId} transformValue={`translate(${mr.x}px, ${mr.y}px)`}>
          <BoxInput
            maxLength={6}
            type="text"
            value={editMrName}
            onChange={e => {
              setEditMrName(e.target.value);
            }}
          />
          <StBtnBox>
            <BoxBtn
              onClick={() => {
                onEditMrNameHandler();
              }}
            >
              완료
            </BoxBtn>
            <BoxSubBtn
              onClick={() => {
                setMrEdit(!mrEdit);
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

export default AdminMrItem;
