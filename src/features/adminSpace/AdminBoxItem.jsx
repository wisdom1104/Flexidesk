import React from 'react';
import { useDeleteBox } from '../../hooks/adminSpace/box/useDeleteBox';
import { useEditBox } from '../../hooks/adminSpace/box/useEditBox';
import { useDADBox } from '../../hooks/adminSpace/box/useDADBox';
import {
  BoxBtn,
  BoxInput,
  BoxSubBtn,
  StBox,
  StBtnBox,
} from '../../shared/SpaceStyles';

function AdminBoxItem({ box, boardEl, spaceId, boxList }) {
  const { submitDelete } = useDeleteBox();

  const {
    submitEdit,
    isEditBox,
    changeEditModeHandler,
    editBoxName,
    changeNameHandler,
  } = useEditBox(box, spaceId);

  const { elRef, boxMouseDownHandler } = useDADBox(spaceId, boardEl, boxList);

  return (
    <>
      {!isEditBox ? (
        <StBox
          key={box.boxId}
          ref={el => (elRef.current[box.boxId] = el)}
          onMouseDown={e => boxMouseDownHandler(e, box.boxId)}
          transformValue={`translate(${box.x}px, ${box.y}px)`}
        >
          <div>{box.boxName}</div>
          <StBtnBox>
            <BoxBtn onClick={() => changeEditModeHandler()}>수정</BoxBtn>
            <BoxSubBtn
              onClick={() => {
                submitDelete(box.boxId, spaceId);
              }}
            >
              삭제
            </BoxSubBtn>
          </StBtnBox>
        </StBox>
      ) : (
        <StBox
          key={box.boxId}
          transformValue={`translate(${box.x}px, ${box.y}px)`}
        >
          <BoxInput
            maxLength={6}
            type="text"
            value={editBoxName}
            onChange={e => changeNameHandler(e.target.value)}
          />
          <StBtnBox>
            <BoxBtn onClick={submitEdit}>완료</BoxBtn>
            <BoxSubBtn onClick={() => changeEditModeHandler()}>취소</BoxSubBtn>
          </StBtnBox>
        </StBox>
      )}
    </>
  );
}

export default AdminBoxItem;
