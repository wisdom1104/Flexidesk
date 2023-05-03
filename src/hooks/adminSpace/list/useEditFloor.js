import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { __editFloor } from '../../../redux/modules/floorSlice';

// floor 수정
export const useEditFloor = floor => {
  const dispatch = useDispatch();

  //floor name 수정
  const [editFloorName, setEditFloorName] = useState(floor.floorName);
  const [isEditFloor, setIsEditFloor] = useState(false);

  const changeNameHandler = value => {
    setEditFloorName(value);
  };

  const changeEditModeHandler = () => {
    setIsEditFloor(pre => !pre);
  };

  const submitEditFloor = async () => {
    const payload = {
      floorId: floor.floorId,
      floorName: editFloorName,
    };
    dispatch(__editFloor(payload));
    setIsEditFloor(!isEditFloor);
  };
  return {
    submitEditFloor,
    isEditFloor,
    changeEditModeHandler,
    changeNameHandler,
    editFloorName,
  };
};
