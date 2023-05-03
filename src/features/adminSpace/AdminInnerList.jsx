import React from 'react';
import { useAddInnerSpace } from '../../hooks/adminSpace/list/useAddInnerSpace';
import { StAddInnerBtn, StInnerList } from '../../shared/SpaceStyles';
import AdminInnerItem from './AdminInnerItem';
function AdminInnerList({
  floor,
  onClickSpaceListHandler,
  dragStart,
  onAvailableItemDragEnter,
  onDragOver,
  onDragEnd,
}) {
  const { submitAddInnerSpace } = useAddInnerSpace();

  return (
    <StInnerList>
      <StAddInnerBtn onClick={() => submitAddInnerSpace(floor)}>
        스페이스 추가
      </StAddInnerBtn>
      {floor.spaceList?.length > 0
        ? floor.spaceList.map(space => (
            <AdminInnerItem
              key={space.spaceId}
              space={space}
              onClickSpaceListHandler={onClickSpaceListHandler}
              dragStart={dragStart}
              onAvailableItemDragEnter={onAvailableItemDragEnter}
              onDragOver={onDragOver}
              onDragEnd={onDragEnd}
            />
          ))
        : null}
    </StInnerList>
  );
}

export default AdminInnerList;
