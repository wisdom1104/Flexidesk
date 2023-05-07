import React from 'react';
import { useEditFloor } from '../../hooks/adminSpace/list/useEditFloor';
import AdminFloorItem from '../adminSpace/AdminFloorItem';
import MainMintBtn from '../../components/button/MainMintBtn';
import SubMintBtn from '../../components/button/SubMintBtn';
import Text from '../../components/Text';
import { Input } from '../../components/Input';
import { StList, StListBtnBox } from '../../pages/space/SpaceStyles';

function AdminFloorList({
  floor,
  onClickSpaceListHandler,
  dragStart,
  onAvailableItemDragEnter,
  onDragOver,
  onDragEnd,
}) {
  const {
    onSubmitEditFloor,
    isEditFloor,
    onChangeEditModeHandler,
    onChangeNameHandler,
    editFloorName,
  } = useEditFloor(floor);

  return (
    <>
      {!isEditFloor ? (
        <AdminFloorItem
          floor={floor}
          onClickSpaceListHandler={onClickSpaceListHandler}
          dragStart={dragStart}
          onAvailableItemDragEnter={onAvailableItemDragEnter}
          onDragOver={onDragOver}
          onDragEnd={onDragEnd}
          floorEdit={isEditFloor}
          onChangeEditModeHandler={onChangeEditModeHandler}
        />
      ) : (
        <StList data-floor-id={floor.floorId}>
          <Input
            w="120px"
            h="25px"
            br="5px"
            maxLength={7}
            data-floor-id={floor.floorId}
            type="text"
            value={editFloorName}
            onChange={e => onChangeNameHandler(e.target.value)}
          />
          <StListBtnBox>
            <MainMintBtn
              h="23px"
              pd="2px 6px"
              br="4px"
              data-floor-id={floor.floorId}
              onClick={onSubmitEditFloor}
            >
              <Text shape="T14_700_17" color="var(--white)">
                완료
              </Text>
            </MainMintBtn>
            <SubMintBtn
              h="23px"
              pd="2px 6px"
              br="4px"
              data-floor-id={floor.floorId}
              onClick={() => onChangeEditModeHandler()}
            >
              <Text shape="T14_700_17" color="var(--mint_002)">
                취소
              </Text>
            </SubMintBtn>
          </StListBtnBox>
        </StList>
      )}
    </>
  );
}

export default AdminFloorList;
