import { useEffect, useState } from 'react';

export const useSelectSpace = (spaces, selectedSpace, setSelectedSpace) => {
  const [isModal, setIsModal] = useState(false);
  const [clickedSpaceId, setClickedSpaceId] = useState(null);

  useEffect(() => {
    setSelectedSpace(spaces[0]);
  }, [spaces]);

  const onClickSpaceListHandler = id => {
    const space = spaces.find(space => space.spaceId === id);
    setSelectedSpace(space);
    setIsModal(!isModal);
    setClickedSpaceId(id);
  };

  return {
    selectedSpace,
    setSelectedSpace,
    onClickSpaceListHandler,
    isModal,
    setIsModal,
    clickedSpaceId,
  };
};
