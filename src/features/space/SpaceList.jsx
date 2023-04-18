import React from 'react';
import SpaceItem from './SpaceItem';

function SpaceList({ spaces, onClickSpaceListHandler, dispatch }) {
  return (
    <>
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
