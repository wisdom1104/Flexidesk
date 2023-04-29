import React from 'react';
import { useDispatch } from 'react-redux';
import { StBoard, Stmainspace } from '../../shared/SpaceStyles';
import AdminSubHeader from './AdminSubHeader';
import AdminShadowItem from './AdminShadowItem';
import AdminDropItem from './AdminDropItem';
import { useSpace } from '../../hooks/adminSpace/useAdminSpaceHook';
import { useBoxDrop } from '../../hooks/adminSpace/useBoxDrop';
import { useBoxDragAndDrop } from '../../hooks/adminSpace/useBoxDragAndDropHook';

function AdminSpaceBox({
  spaceId,
  selectedSpace,
  handleDragStart,
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

  const {
    elRef,
    boardEl,
    newMrBoxes,
    newBoxes,
    newMultiBoxes,
    mrBoxMouseDownHandler,
    boxMouseDownHandler,
    multiBoxMouseDownHandler,
  } = useBoxDragAndDrop(dispatch, spaceId, mrList, boxList, multiBoxList);

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

  return (
    <Stmainspace>
      <AdminSubHeader space={space} isModal={isModal} setIsModal={setIsModal} />
      <StBoard ref={boardEl} onDrop={HandleDrop} onDragOver={handleDragOver}>
        {/* <AdminShadowItem
          newMrBoxes={newMrBoxes}
          newBoxes={newBoxes}
          newMultiBoxes={newMultiBoxes}
          elRef={elRef}
        /> */}
        <AdminDropItem
          space={space}
          HandleDrop={HandleDrop}
          handleDragOver={handleDragOver}
          elRef={elRef}
          handleDragStart={handleDragStart}
          spaceId={spaceId}
          mrBoxMouseDownHandler={mrBoxMouseDownHandler}
          boxMouseDownHandler={boxMouseDownHandler}
          multiBoxMouseDownHandler={multiBoxMouseDownHandler}
        />
      </StBoard>
    </Stmainspace>
  );
}

export default AdminSpaceBox;
