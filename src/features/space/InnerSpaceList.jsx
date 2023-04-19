import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { __addInnerSpace } from '../../redux/modules/spacesSlice';
import InnerSpaceItem from './InnerSpaceItem';
import { InnerList, StAddInnerBtn, StInnerList } from './SpaceStyles';

function InnerSpaceList({
  floor,
  onClickSpaceListHandler,
  dragStart,
  onAvailableItemDragEnter,
  onDragOver,
  onDragEnd,
}) {
  const dispatch = useDispatch();

  // 그냥 space 추가
  const onClickAddSpaceHandler = async () => {
    const newSpace = {
      floorId: floor.floorId,
      spaceName: 'New Space',
    };
    // console.log('newSpace', newSpace);
    dispatch(__addInnerSpace(newSpace));
  };

  return (
    <StInnerList>
      <StAddInnerBtn onClick={onClickAddSpaceHandler}>
        스페이스 추가
      </StAddInnerBtn>
      {floor.spaceList?.length > 0
        ? floor.spaceList.map(space => (
            <InnerSpaceItem
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

export default InnerSpaceList;
