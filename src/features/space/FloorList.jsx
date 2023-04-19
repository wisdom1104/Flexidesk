import React from 'react';
import FloorItem from './FloorItem';

function FloorList({
  floors,
  onClickSpaceListHandler,
  dispatch,
  dragStart,
  onAvailableItemDragEnter,
  onDragOver,
  onDragEnd,
}) {
  return (
    <>
      {floors?.map(floor => {
        if (floor)
          return (
            <FloorItem
              key={floor.floorId}
              floor={floor}
              onClickSpaceListHandler={onClickSpaceListHandler}
              dispatch={dispatch}
              dragStart={dragStart}
              onAvailableItemDragEnter={onAvailableItemDragEnter}
              onDragOver={onDragOver}
              onDragEnd={onDragEnd}
            />
          );
      })}
    </>
  );
}

export default FloorList;
