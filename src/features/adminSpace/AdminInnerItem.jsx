import React from 'react';
import {
  BoxBtn,
  BoxSubBtn,
  EditInput,
  StInner,
  StInnerItem,
  StListBtnBox,
} from '../../shared/SpaceStyles';
import { useSpaceDeleteAndEdit } from '../../hooks/adminSpace/useAdminListHook';

function AdminInnerItem({
  dispatch,
  space,
  onClickSpaceListHandler,
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
      {!spaceEdit ? (
        <StInner
          key={space.spaceId}
          draggable
          data-space-id={space.spaceId}
          data-floor-id={space.floorId}
          onDragStart={e => dragStart(e, space)}
          onDragEnter={e => onAvailableItemDragEnter(e, space)}
          onDragOver={onDragOver}
          onDragEnd={e => onDragEnd(e, space)}
        >
          <StInnerItem
            data-floor-id={space.floorId}
            onClick={() => onClickSpaceListHandler(space.spaceId)}
          >
            {space.spaceName}
          </StInnerItem>
          <StListBtnBox data-floor-id={space.floorId}>
            <BoxBtn
              data-floor-id={space.floorId}
              onClick={() => {
                setSpaceEdit(!spaceEdit);
              }}
            >
              수정
            </BoxBtn>
            <BoxSubBtn
              data-floor-id={space.floorId}
              onClick={() => {
                const confirmDelete = window.confirm('정말 삭제하시겠습니까?');
                if (confirmDelete) {
                  onDeleteSpaceHandler(space.spaceId);
                }
              }}
            >
              삭제
            </BoxSubBtn>
          </StListBtnBox>
        </StInner>
      ) : (
        <StInner data-floor-id={space.floorId}>
          <EditInput
            data-floor-id={space.floorId}
            style={{ marginLeft: '25px' }}
            type="text"
            value={editSpaceName}
            onChange={e => {
              setEditSpaceName(e.target.value);
            }}
          />
          <StListBtnBox data-floor-id={space.floorId}>
            <BoxBtn
              data-floor-id={space.floorId}
              onClick={() => {
                onEditSpaceNameHandler(space);
              }}
            >
              완료
            </BoxBtn>
            <BoxSubBtn
              data-floor-id={space.floorId}
              onClick={() => {
                setSpaceEdit(!spaceEdit);
              }}
            >
              취소
            </BoxSubBtn>
          </StListBtnBox>
        </StInner>
      )}
    </>
  );
}

export default AdminInnerItem;
