import React, { useState } from 'react';
import { __deleteFloor, __editFloor } from '../../redux/modules/floorSlice';
import AdminFloorItem from '../adminSpace/AdminFloorItem';
import {
  BoxBtn,
  BoxSubBtn,
  EditInput,
  StList,
  StListBtnBox,
} from '../../shared/SpaceStyles';
import { useFloorDeleteAndEdit } from '../../hooks/adminSpace/useAdminListHook';

function AdminFloorList({
  floor,
  dispatch,
  onClickSpaceListHandler,
  dragStart,
  onAvailableItemDragEnter,
  onDragOver,
  onDragEnd,
}) {
  const {
    onDeleteFloorHandler,
    onEditFloorNameHandler,
    isInner,
    setIsInner,
    floorEdit,
    setFloorEdit,
    editFloorName,
    setEditFloorName,
  } = useFloorDeleteAndEdit(dispatch, floor);

  return (
    <>
      <div>
        {!floorEdit ? (
          <AdminFloorItem
            floor={floor}
            onClickSpaceListHandler={onClickSpaceListHandler}
            dragStart={dragStart}
            onAvailableItemDragEnter={onAvailableItemDragEnter}
            onDragOver={onDragOver}
            onDragEnd={onDragEnd}
            onDeleteFloorHandler={onDeleteFloorHandler}
            floorEdit={floorEdit}
            setFloorEdit={setFloorEdit}
            isInner={isInner}
            setIsInner={setIsInner}
          />
        ) : (
          <StList data-floor-id={floor.floorId}>
            <EditInput
              maxLength={7}
              data-floor-id={floor.floorId}
              type="text"
              value={editFloorName}
              onChange={e => {
                setEditFloorName(e.target.value);
              }}
            />
            <StListBtnBox>
              <BoxBtn
                data-floor-id={floor.floorId}
                onClick={() => {
                  onEditFloorNameHandler(floor.floorId);
                }}
              >
                완료
              </BoxBtn>
              <BoxSubBtn
                data-floor-id={floor.floorId}
                onClick={() => {
                  setFloorEdit(!floorEdit);
                }}
              >
                취소
              </BoxSubBtn>
            </StListBtnBox>
          </StList>
        )}
      </div>
    </>
  );
}

export default AdminFloorList;
