import React from 'react';
import { useDispatch } from 'react-redux';
import { __addInnerSpace } from '../../redux/modules/spacesSlice';
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
  const dispatch = useDispatch();

  // inner space 추가
  const onClickAddSpaceHandler = async () => {
    const newSpace = {
      floorId: floor.floorId,
      spaceName: 'New 스페이스',
    };
    dispatch(__addInnerSpace(newSpace));
  };

  return (
    <StInnerList>
      <StAddInnerBtn onClick={onClickAddSpaceHandler}>
        스페이스 추가
      </StAddInnerBtn>
      {floor.spaceList?.length > 0
        ? floor.spaceList.map(space => (
            <AdminInnerItem
              key={space.spaceId}
              dispatch={dispatch}
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
