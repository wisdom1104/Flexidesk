import React from 'react';
import FloorItem from './FloorItem';

function FloorList({ floors, onClickSpaceListHandler, dispatch }) {
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
            />
          );
      })}
    </>
  );
}

export default FloorList;
