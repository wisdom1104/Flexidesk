import React, { useRef } from 'react';
import { useDropBox } from '../../hooks/adminSpace/box/useDropBox';
import { useSelectDropBoxs } from '../../hooks/adminSpace/box/useSelectDropBoxs';
import { useSrchSpaceAndList } from '../../hooks/adminSpace/useSrchSpaceAndList';
import { handleDragOver } from '../../utils/dragOverHandler';
import SpaceBackBoard from '../../components/SpaceBackBoard';
import SpaceMainBoard from '../../components/SpaceMainBoard';
import AdminSubHeader from './AdminSubHeader';
import AdminDropItem from './AdminDropItem';

function AdminSpaceBox({
  spaceId,
  selectedSpace,
  isModal,
  setIsModal,
  spaces,
  id,
}) {
  const { mrBoxes, boxes, multiBoxes } = useSelectDropBoxs();
  const { space, mrList, boxList, multiBoxList } = useSrchSpaceAndList(
    selectedSpace,
    id,
    spaces,
  );

  const { HandleDrop } = useDropBox(
    spaceId,
    mrList,
    boxList,
    multiBoxList,
    mrBoxes,
    boxes,
    multiBoxes,
  );

  const boardEl = useRef(null);

  return (
    <SpaceBackBoard>
      <AdminSubHeader space={space} isModal={isModal} setIsModal={setIsModal} />
      <SpaceMainBoard
        ref={boardEl}
        onDrop={HandleDrop}
        onDragOver={handleDragOver}
      >
        <AdminDropItem
          space={space}
          boardEl={boardEl}
          spaceId={spaceId}
          mrList={mrList}
          boxList={boxList}
          multiBoxList={multiBoxList}
        />
      </SpaceMainBoard>
    </SpaceBackBoard>
  );
}

export default AdminSpaceBox;
