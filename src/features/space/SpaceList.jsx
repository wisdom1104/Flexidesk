import React from 'react';
import SpaceItem from './SpaceItem';

function SpaceList({
  spaces,
  onClickSpaceListHandler,
  dispatch,
  dragStart,
  onAvailableItemDragEnter,
  onDragOver,
  onDragEnd,
}) {
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
              dragStart={dragStart}
              onAvailableItemDragEnter={onAvailableItemDragEnter}
              onDragOver={onDragOver}
              onDragEnd={onDragEnd}
            />
          );
        if (space && space.floorId !== null) return null;
      })}
    </>
  );
}

export default SpaceList;
