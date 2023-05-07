import React, { useState } from 'react';
import { useSrchSpaceAndList } from '../../hooks/adminSpace/useSrchSpaceAndList';
import { useMoveMultiBox } from '../../hooks/space/useMoveMultiBox';
import { useMoveBox } from '../../hooks/space/useMoveBox';
import SpaceBackBoard from '../../components/SpaceBackBoard';
import SpaceMainBoard from '../../components/SpaceMainBoard';
import SpaceBoxModal from './SpaceBoxModal';
import SpaceMultiBoxModal from './SpaceMultiBoxModal';
import SpaceSubHeader from './SpaceSubHeader';
import SpaceDropItem from './SpaceDropItem';

function SpaceBox({ spaces, spaceId, selectedSpace }) {
  const { space } = useSrchSpaceAndList(selectedSpace, spaceId, spaces);
  const [moveBox, setMoveBox] = useState(null);
  const [isClicked, setIsClicked] = useState(null);

  const { onClickMoveUserHandler, MoveUser, isModal, setIsModal } = useMoveBox(
    setMoveBox,
    setIsClicked,
    spaceId,
  );

  const {
    onClickMoveMultiHandler,
    MoveMultiUser,
    isMultiModal,
    setIsMultiModal,
  } = useMoveMultiBox({ setMoveBox, setIsClicked, spaceId });

  return (
    <SpaceBackBoard>
      <SpaceSubHeader space={space} />
      <SpaceMainBoard>
        <SpaceBoxModal
          moveBox={moveBox}
          isModal={isModal}
          MoveUser={MoveUser}
          setIsModal={setIsModal}
          setIsClicked={setIsClicked}
        />
        <SpaceMultiBoxModal
          moveBox={moveBox}
          isMultiModal={isMultiModal}
          MoveMultiUser={MoveMultiUser}
          setIsMultiModal={setIsMultiModal}
          setIsClicked={setIsClicked}
        />
        <SpaceDropItem
          space={space}
          isClicked={isClicked}
          onClickMoveUserHandler={onClickMoveUserHandler}
          onClickMoveMultiHandler={onClickMoveMultiHandler}
        />
      </SpaceMainBoard>
    </SpaceBackBoard>
  );
}

export default SpaceBox;
