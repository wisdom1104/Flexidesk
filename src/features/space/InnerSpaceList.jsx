import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { __addInnerSpace } from '../../redux/modules/spacesSlice';
import InnerSpaceItem from './InnerSpaceItem';
import { InnerList } from './SpaceStyles';

function InnerSpaceList({ floor, onClickSpaceListHandler }) {
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
    <InnerList>
      <button onClick={onClickAddSpaceHandler}>Space 추가</button>
      {floor.spaceList?.length > 0
        ? floor.spaceList.map(space => (
            <InnerSpaceItem
              key={space.spaceId}
              dispatch={dispatch}
              space={space}
              onClickSpaceListHandler={onClickSpaceListHandler}
            />
          ))
        : null}
    </InnerList>
  );
}

export default InnerSpaceList;
