import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { StBoard, Stmainspace } from '../../shared/SpaceStyles';
import AdminSubHeader from './AdminSubHeader';
import AdminDropItem from './AdminDropItem';
import { useSpace } from '../../hooks/adminSpace/useAdminSpaceHook';
import { useBoxDrop } from '../../hooks/adminSpace/useBoxDrop';

function AdminSpaceBox({
  spaceId,
  selectedSpace,
  isModal,
  setIsModal,
  spaces,
  id,
  mrBoxes,
  boxes,
  multiBoxes,
}) {
  const dispatch = useDispatch();

  const { space, mrList, boxList, multiBoxList } = useSpace(
    dispatch,
    selectedSpace,
    id,
    spaces,
  );

  // 요소 드롭
  const { HandleDrop, handleDragOver } = useBoxDrop(
    dispatch,
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
