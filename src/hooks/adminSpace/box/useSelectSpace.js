import { useEffect, useState } from 'react';

export const useSelectSpace = (spaces, selectedSpace, setSelectedSpace) => {
  const [isModal, setIsModal] = useState(false);
  const [clickedSpaceId, setClickedSpaceId] = useState(null);

  // 초기 space 설정
  useEffect(() => {
    setSelectedSpace(spaces[0]);
  }, [spaces]);

  //space 선택 핸들러
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
