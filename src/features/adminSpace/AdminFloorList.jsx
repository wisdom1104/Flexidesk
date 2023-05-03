import React from 'react';
import AdminFloorItem from '../adminSpace/AdminFloorItem';
import {
  BoxBtn,
  BoxSubBtn,
  EditInput,
  StList,
  StListBtnBox,
} from '../../shared/SpaceStyles';
import { useEditFloor } from '../../hooks/adminSpace/list/useEditFloor';

function AdminFloorList({
  floor,
  onClickSpaceListHandler,
  dragStart,
  onAvailableItemDragEnter,
  onDragOver,
  onDragEnd,
}) {
  const {
    submitEditFloor,
    isEditFloor,
    changeEditModeHandler,
    changeNameHandler,
    editFloorName,
  } = useEditFloor(floor);

  return (
    <div>
      {!isEditFloor ? (
        <AdminFloorItem
          floor={floor}
          onClickSpaceListHandler={onClickSpaceListHandler}
          dragStart={dragStart}
          onAvailableItemDragEnter={onAvailableItemDragEnter}
          onDragOver={onDragOver}
          onDragEnd={onDragEnd}
          floorEdit={isEditFloor}
          changeEditModeHandler={changeEditModeHandler}
        />
      ) : (
        <StList data-floor-id={floor.floorId}>
          <EditInput
            maxLength={7}
            data-floor-id={floor.floorId}
            type="text"
            value={editFloorName}
            onChange={e => changeNameHandler(e.target.value)}
          />
          <StListBtnBox>
            <BoxBtn data-floor-id={floor.floorId} onClick={submitEditFloor}>
              완료
            </BoxBtn>
            <BoxSubBtn
              data-floor-id={floor.floorId}
              onClick={() => changeEditModeHandler()}
            >
              취소
            </BoxSubBtn>
          </StListBtnBox>
        </StList>
      )}
    </div>
  );
}

export default AdminFloorList;
