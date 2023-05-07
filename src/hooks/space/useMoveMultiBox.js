import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { __editBoxUser } from '../../redux/modules/spaceBoxSlice';

export const useMoveMultiBox = ({ setMoveBox, setIsClicked, spaceId }) => {
  const dispatch = useDispatch();
  const [isMultiModal, setIsMultiModal] = useState(false);
  const onClickMoveMultiHandler = multiBox => {
    setIsMultiModal(!isMultiModal);
    setMoveBox(multiBox);
    setIsClicked(multiBox.multiBoxId);
  };
  const MoveMultiUser = moveBox => {
    const payload = {
      spaceId,
      locationId: moveBox.multiBoxId,
      boxName: moveBox.boxName,
      x: moveBox.x,
      y: moveBox.y,
    };
    dispatch(__editBoxUser(payload));
    setIsMultiModal(!isMultiModal);
    setIsClicked(null);
  };
  return {
    onClickMoveMultiHandler,
    MoveMultiUser,
    isMultiModal,
    setIsMultiModal,
  };
};
