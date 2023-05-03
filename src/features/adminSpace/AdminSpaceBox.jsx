import React, { useRef } from 'react';
import { handleDragOver } from '../../utils/dragOverHandler';
import { useDropBox } from '../../hooks/adminSpace/box/useDropBox';
import { useSelectDropBoxs } from '../../hooks/adminSpace/box/useSelectDropBoxs';
import { useSrchSpaceAndList } from '../../hooks/adminSpace/useSrchSpaceAndList';
import { StBoard, Stmainspace } from '../../shared/SpaceStyles';
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
    <Stmainspace>
      <AdminSubHeader space={space} isModal={isModal} setIsModal={setIsModal} />
      <StBoard ref={boardEl} onDrop={HandleDrop} onDragOver={handleDragOver}>
        <AdminDropItem
          space={space}
          boardEl={boardEl}
          spaceId={spaceId}
          mrList={mrList}
          boxList={boxList}
          multiBoxList={multiBoxList}
        />
      </StBoard>
    </Stmainspace>
  );
}

export default AdminSpaceBox;
