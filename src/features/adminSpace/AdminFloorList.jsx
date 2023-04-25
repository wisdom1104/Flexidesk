import React from 'react';
import AdminFloorItem from './AdminFloorItem';

function AdminFloorList({
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
            <AdminFloorItem
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

export default AdminFloorList;
