import React from 'react';
import {
  BoxBtn,
  BoxSubBtn,
  EditInput,
  StInner,
  StInnerItem,
  StListBtnBox,
} from '../../shared/SpaceStyles';
import { useDeleteSpace } from '../../hooks/adminSpace/list/useDeleteSpace';
import { useEditSpace } from '../../hooks/adminSpace/list/useEditSpace';

function AdminInnerItem({
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
              onClick={() => changeEditModeHandler()}
            >
              수정
            </BoxBtn>
            <BoxSubBtn
              data-floor-id={space.floorId}
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
        </StInner>
      ) : (
        <StInner data-floor-id={space.floorId}>
          <EditInput
            maxLength={10}
            data-floor-id={space.floorId}
            style={{ marginLeft: '25px' }}
            type="text"
            value={editSpaceName}
            onChange={e => changeNameHandler(e.target.value)}
          />
          <StListBtnBox data-floor-id={space.floorId}>
            <BoxBtn data-floor-id={space.floorId} onClick={submitEditSpace}>
              완료
            </BoxBtn>
            <BoxSubBtn
              data-floor-id={space.floorId}
              onClick={() => changeEditModeHandler()}
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
