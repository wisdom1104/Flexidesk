import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { __deleteMr, __editMr } from '../../redux/modules/spaceMrSlice';
import { StBtnBox } from '../../pages/space/AdminSpace';
import { StDropMr } from './SpaceStyles';

function MrItem({
  mr,
  mrList,
  HandleDrop,
  handleDragOver,
  elRef,
  mrBoxMouseDownHandler,
  handleDragStart,
  spaceId,
}) {
  const dispatch = useDispatch();

  // mr 삭제
  const onClickDeleteMrHandler = async mrId => {
    const payload = {
      mrId,
      spaceId,
    };
    dispatch(__deleteMr(payload));
  };
  //mr name 수정
  const [mrEdit, setMrEdit] = useState(false);
  const [editMrName, setEditMrName] = useState(mr.mrName);

  const onEditMrNameHandler = async () => {
    const payload = {
      spaceId,
      mrId: mr.mrId,
      mrName: editMrName,
      x: mr.x,
      y: mr.y,
    };
    dispatch(__editMr(payload));
    setMrEdit(!mrEdit);
  };

  return (
    <>
      <StDropMr
        onDrop={HandleDrop}
        onDragOver={handleDragOver}
        ref={el => (elRef.current[mr.mrId] = el)}
        onMouseDown={e => mrBoxMouseDownHandler(e, mr.mrId)}
        onDragStart={e => handleDragStart(e, mr.mrId)}
        style={{ transform: `translate(${mr.x}px, ${mr.y}px)` }}
      >
        {!mrEdit ? (
          <>
            <div>
              {mr.mrName}/{mr.mrId}
            </div>
            <StBtnBox>
              <button
                onClick={() => {
                  setMrEdit(!mrEdit);
                }}
              >
                수정
              </button>
              <button
                onClick={() => {
                  onClickDeleteMrHandler(mr.mrId);
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
              value={editMrName}
              onChange={e => {
                setEditMrName(e.target.value);
              }}
            />
            <StBtnBox>
              <button
                onClick={() => {
                  onEditMrNameHandler();
                }}
              >
                완료
              </button>
              <button
                onClick={() => {
                  setMrEdit(!mrEdit);
                }}
              >
                취소
              </button>
            </StBtnBox>
          </>
        )}
      </StDropMr>
    </>
  );
}

export default MrItem;
