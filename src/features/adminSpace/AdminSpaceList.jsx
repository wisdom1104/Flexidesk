import React from 'react';
import {
  BoxBtn,
  BoxSubBtn,
  EditInput,
  StList,
  StListBtnBox,
  StListItem,
} from '../../shared/SpaceStyles';
import { useEditSpace } from '../../hooks/adminSpace/list/useEditSpace';
import { useDeleteSpace } from '../../hooks/adminSpace/list/useDeleteSpace';

function AdminSpaceList({
  space,
  onClickSpaceListHandler,
  dragStart,
  onAvailableItemDragEnter,
  onDragOver,
  onDragEnd,
}) {
  const {
    submitEditSpace,
    isEditSpace,
    changeEditModeHandler,
    changeNameHandler,
    editSpaceName,
  } = useEditSpace(space);

  const { submitDeleteSpace } = useDeleteSpace();

  return (
    <>
      {!isEditSpace ? (
        <StList
          key={space.spaceId}
          draggable
          data-space-id={space.spaceId}
          data-space-name={space.spaceName}
          data-floor-id={space.floorId}
          onDragStart={e => dragStart(e, space)}
          onDragEnter={e => onAvailableItemDragEnter(e, space)}
          onDragOver={onDragOver}
          onDragEnd={e => onDragEnd(e, space)}
        >
          <StListItem
            data-floor-id={space.floorId}
            onClick={() => onClickSpaceListHandler(space.spaceId)}
          >
            {space.spaceName}
          </StListItem>
          <StListBtnBox>
            <BoxBtn onClick={() => changeEditModeHandler()}>수정</BoxBtn>
            <BoxSubBtn
              onClick={() => {
                const confirmDelete = window.confirm('정말 삭제하시겠습니까?');
                if (confirmDelete) {
                  submitDeleteSpace(space.spaceId);
                }
              }}
            >
              삭제
            </BoxSubBtn>
          </StListBtnBox>
        </StList>
      ) : (
        <StList>
          <EditInput
            maxLength={9}
            type="text"
            value={editSpaceName}
            onChange={e => changeNameHandler(e.target.value)}
          />
          <StListBtnBox>
            <BoxBtn onClick={submitEditSpace}>완료</BoxBtn>
            <BoxSubBtn onClick={() => changeEditModeHandler()}>취소</BoxSubBtn>
          </StListBtnBox>
        </StList>
      )}
    </>
  );
}

export default AdminSpaceList;
