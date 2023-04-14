import React from 'react';
import { useDispatch } from 'react-redux';
import { __addSpace } from '../../redux/modules/spacesSlice';
import { __deleteSpace } from '../../redux/modules/spaceSlice';
import SpaceItem from './SpaceItem';

function SpaceList({ spaces, onClickSpaceListHandler }) {
  const dispatch = useDispatch();

  // 그냥 space 추가
  const onClickAddSpaceHandler = async () => {
    const newSpace = {
      spaceName: 'New Space',
    };
    dispatch(__addSpace(newSpace));
  };

  return (
    <>
      Space List
      <br />
      <button onClick={onClickAddSpaceHandler}>Space 추가</button>
      {spaces?.map(space => {
        if (space && space.floorId === null)
          return (
            <SpaceItem
              key={space.spaceId}
              space={space}
              onClickSpaceListHandler={onClickSpaceListHandler}
              dispatch={dispatch}
            />
          );
        if (space && space.floorId !== null) return null;
      })}
    </>
  );
}

export default SpaceList;
