import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { __editSpace } from '../../../redux/modules/spaceSlice';

export const useEditSpace = space => {
  const dispatch = useDispatch();
  const [editSpaceName, setEditSpaceName] = useState(space.spaceName);
  const [isEditSpace, setIsEditSpace] = useState(false);

  const onChangeNameHandler = value => {
    setEditSpaceName(value);
  };

  const onChangeEditModeHandler = () => {
    setIsEditSpace(pre => !pre);
  };

  const onSubmitEditSpace = async () => {
    const payload = {
      spaceId: space.spaceId,
      spaceName: editSpaceName,
      floorId: space.floorId,
    };
    dispatch(__editSpace(payload));
    setIsEditSpace(!isEditSpace);
  };
  return {
    onSubmitEditSpace,
    isEditSpace,
    onChangeEditModeHandler,
    onChangeNameHandler,
    editSpaceName,
  };
};
