import React from 'react';
import {
  BoxBtn,
  BoxInput,
  BoxSubBtn,
  StBox,
  StBtnBox,
} from '../../shared/SpaceStyles';
import { useDeleteMultiBox } from '../../hooks/adminSpace/useDeleteMultiBox';
import { useEditMultiBox } from '../../hooks/adminSpace/useEditMultiBox';
import { useMultiBoxDAD } from '../../hooks/adminSpace/useMultiBoxDAD';

function AdminMultiBoxItem({ multiBox, boardEl, spaceId, multiBoxList }) {
  const { submitDelete } = useDeleteMultiBox();

  const {
    submitEdit,
    isEditMultiBox,
    changeEditModeHandler,
    editMultiBoxName,
    changeNameHandler,
  } = useEditMultiBox(multiBox, spaceId);

  const { elRef, multiBoxMouseDownHandler } = useMultiBoxDAD(
    spaceId,
    boardEl,
    multiBoxList,
  );

  return (
    <>
      {!isEditMultiBox ? (
        <StBox
          key={multiBox.multiBoxId}
          ref={el => (elRef.current[multiBox.multiBoxId] = el)}
          onMouseDown={e => multiBoxMouseDownHandler(e, multiBox.multiBoxId)}
          transformValue={`translate(${multiBox.x}px, ${multiBox.y}px)`}
        >
          <div>{multiBox.multiBoxName}</div>
          <StBtnBox>
            <BoxBtn onClick={() => changeEditModeHandler()}>수정</BoxBtn>
            <BoxSubBtn
              onClick={() => {
                submitDelete(multiBox.multiBoxId, spaceId);
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

export default AdminMultiBoxItem;
