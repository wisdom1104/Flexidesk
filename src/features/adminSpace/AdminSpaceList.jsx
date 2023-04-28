import React from 'react';
import {
  BoxBtn,
  BoxSubBtn,
  EditInput,
  StList,
  StListBtnBox,
  StListItem,
} from '../../shared/SpaceStyles';
import { useSpaceDeleteAndEdit } from '../../hooks/adminSpace/useAdminListHook';

function AdminSpaceList({
  space,
  onClickSpaceListHandler,
  dispatch,
  dragStart,
  onAvailableItemDragEnter,
  onDragOver,
  onDragEnd,
}) {
  const {
    onDeleteSpaceHandler,
    onEditSpaceNameHandler,
    spaceEdit,
    setSpaceEdit,
    editSpaceName,
    setEditSpaceName,
  } = useSpaceDeleteAndEdit(dispatch, space);

  return (
    <>
      <>
        {!spaceEdit ? (
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
              <BoxBtn
                onClick={() => {
                  setSpaceEdit(!spaceEdit);
                }}
              >
                수정
              </BoxBtn>
              <BoxSubBtn
                onClick={() => {
                  const confirmDelete =
                    window.confirm('정말 삭제하시겠습니까?');
                  if (confirmDelete) {
                    onDeleteSpaceHandler(space.spaceId);
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
              type="text"
              value={editSpaceName}
              onChange={e => {
                setEditSpaceName(e.target.value);
              }}
            />
            <StListBtnBox>
              <BoxBtn
                onClick={() => {
                  onEditSpaceNameHandler(space);
                }}
              >
                완료
              </BoxBtn>
              <BoxSubBtn
                onClick={() => {
                  setSpaceEdit(!spaceEdit);
                }}
              >
                취소
              </BoxSubBtn>
            </StListBtnBox>
          </StList>
        )}
      </>
    </>
  );
}

export default AdminSpaceList;
