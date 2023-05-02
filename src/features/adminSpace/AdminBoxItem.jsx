import React from 'react';
import { useDispatch } from 'react-redux';
import {
  BoxBtn,
  BoxInput,
  BoxSubBtn,
  StBox,
  StBtnBox,
} from '../../shared/SpaceStyles';
import { useDeleteBox } from '../../hooks/adminSpace/useDeleteBox';
import { useEditBox } from '../../hooks/adminSpace/useEditBox';
import { useBoxDAD } from '../../hooks/adminSpace/useBoxDAD';

function AdminBoxItem({ box, boardEl, spaceId, boxList }) {
  const { submitDelete } = useDeleteBox();

  const {
    submitEdit,
    isEditBox,
    changeEditModeHandler,
    editBoxName,
    changeNameHandler,
  } = useEditBox(box, spaceId);

  const { elRef, boxMouseDownHandler } = useBoxDAD(spaceId, boardEl, boxList);

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
