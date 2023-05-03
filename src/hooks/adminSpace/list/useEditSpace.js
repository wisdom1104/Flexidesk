import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { __editSpace } from '../../../redux/modules/spaceSlice';

export const useEditSpace = space => {
  const dispatch = useDispatch();
  //space name 수정
  const [editSpaceName, setEditSpaceName] = useState(space.spaceName);
  const [isEditSpace, setIsEditSpace] = useState(false);

  const changeNameHandler = value => {
    setEditSpaceName(value);
  };

  const changeEditModeHandler = () => {
    setIsEditSpace(pre => !pre);
  };

  //space name 수정 핸들러
  const submitEditSpace = async () => {
    const payload = {
      spaceId: space.spaceId,
      spaceName: editSpaceName,
      floorId: space.floorId,
    };
    dispatch(__editSpace(payload));
    setIsEditSpace(!isEditSpace);
  };
  return {
    submitEditSpace,
    isEditSpace,
    changeEditModeHandler,
    changeNameHandler,
    editSpaceName,
  };
};
