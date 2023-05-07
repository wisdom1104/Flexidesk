import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { __editFloor } from '../../../redux/modules/floorSlice';

export const useEditFloor = floor => {
  const dispatch = useDispatch();

  const [editFloorName, setEditFloorName] = useState(floor.floorName);
  const [isEditFloor, setIsEditFloor] = useState(false);

  const onChangeNameHandler = value => {
    setEditFloorName(value);
  };

  const onChangeEditModeHandler = () => {
    setIsEditFloor(pre => !pre);
  };

  const onSubmitEditFloor = async () => {
    const payload = {
      floorId: floor.floorId,
      floorName: editFloorName,
    };
    dispatch(__editFloor(payload));
    setIsEditFloor(!isEditFloor);
  };
  return {
    onSubmitEditFloor,
    isEditFloor,
    onChangeEditModeHandler,
    onChangeNameHandler,
    editFloorName,
  };
};
