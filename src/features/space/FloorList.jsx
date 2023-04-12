import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { __addFloor } from '../../redux/modules/floorsSlice';
import { __deleteFloor, __editFloor } from '../../redux/modules/floorSlice';
import FloorItem from './FloorItem';

function FloorList({ floors, onClickFloorListHandler }) {
  const dispatch = useDispatch();

  // floor 추가
  const onClickAddFloorHandler = async () => {
    const newFloor = {
      floorName: 'New Floor',
    };
    dispatch(__addFloor(newFloor));
  };
  return (
    <>
      Floor List
      <br />
      <button onClick={onClickAddFloorHandler}>floor 추가</button>
      {floors?.map(floor => {
        if (floor)
          return (
            <FloorItem
              key={floor.floorId}
              floor={floor}
              onClickFloorListHandler={onClickFloorListHandler}
              dispatch={dispatch}
            />
          );
      })}
    </>
  );
}

export default FloorList;
