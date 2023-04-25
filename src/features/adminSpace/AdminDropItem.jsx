import React from 'react';
import AdminMrItem from './AdminMrItem';
import AdminBoxItem from './AdminBoxItem';
import AdminMultiBoxItem from './AdminMultiBoxItem';

function AdminDropItem({
  space,
  HandleDrop,
  handleDragOver,
  elRef,
  handleDragStart,
  spaceId,
  mrBoxMouseDownHandler,
  boxMouseDownHandler,
  multiBoxMouseDownHandler,
}) {
  return (
    <>
      {/* 회의실 */}
      {space?.map(item =>
        item.mrList?.length > 0
          ? item.mrList?.map(mr => (
              <AdminMrItem
                key={mr.mrId}
                mr={mr}
                HandleDrop={HandleDrop}
                handleDragOver={handleDragOver}
                elRef={elRef}
                mrBoxMouseDownHandler={mrBoxMouseDownHandler}
                handleDragStart={handleDragStart}
                spaceId={spaceId}
              />
            ))
          : null,
      )}
      {/* 박스 */}
      {space?.map(item =>
        item.boxList?.length > 0
          ? item.boxList?.map(box => (
              <AdminBoxItem
                key={box.boxId}
                box={box}
                HandleDrop={HandleDrop}
                handleDragOver={handleDragOver}
                elRef={elRef}
                boxMouseDownHandler={boxMouseDownHandler}
                handleDragStart={handleDragStart}
                spaceId={spaceId}
              />
            ))
          : null,
      )}
      {/* 공용공간 */}
      {space?.map(item =>
        item.multiBoxList?.length > 0
          ? item.multiBoxList?.map(multiBox => (
              <AdminMultiBoxItem
                key={multiBox.multiBoxId}
                multiBox={multiBox}
                HandleDrop={HandleDrop}
                handleDragOver={handleDragOver}
                elRef={elRef}
                multiBoxMouseDownHandler={multiBoxMouseDownHandler}
                handleDragStart={handleDragStart}
                spaceId={spaceId}
              />
            ))
          : null,
      )}
    </>
  );
}

export default AdminDropItem;
