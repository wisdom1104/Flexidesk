import React from 'react';
import { useEditFloor } from '../../hooks/adminSpace/list/useEditFloor';
import { StList, StListBtnBox } from '../../pages/space/SpaceStyles';
import AdminFloorItem from '../adminSpace/AdminFloorItem';
import MainMintBtn from '../../components/button/MainMintBtn';
import SubMintBtn from '../../components/button/SubMintBtn';
import Text from '../../components/Text';
import { Input } from '../../components/Input';

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
          changeEditModeHandler={changeEditModeHandler}
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
            onChange={e => changeNameHandler(e.target.value)}
          />
          <StListBtnBox>
            <MainMintBtn
              h="23px"
              pd="2px 6px"
              br="4px"
              data-floor-id={floor.floorId}
              onClick={submitEditFloor}
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
              onClick={() => changeEditModeHandler()}
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
