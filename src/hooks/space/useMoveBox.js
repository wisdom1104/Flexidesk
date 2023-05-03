import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { __editBoxUser } from '../../redux/modules/spaceBoxSlice';

export const useMoveBox = (setMoveBox, setIsClicked, spaceId) => {
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);
  const onClickMoveUserHandler = box => {
    setIsModal(!isModal);
    setMoveBox(box);
    setIsClicked(box.boxId);
  };
  const MoveUser = moveBox => {
    const payload = {
      spaceId,
      locationId: moveBox.boxId,
      boxName: moveBox.boxName,
      x: moveBox.x,
      y: moveBox.y,
    };
    dispatch(__editBoxUser(payload));
    setIsModal(!isModal);
    setIsClicked(null);
  };
  return {
    onClickMoveUserHandler,
    MoveUser,
    isModal,
    setIsModal,
  };
};
