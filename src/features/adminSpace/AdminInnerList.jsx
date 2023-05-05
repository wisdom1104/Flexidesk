import React from 'react';
import { useAddInnerSpace } from '../../hooks/adminSpace/list/useAddInnerSpace';
import { StInnerList } from '../../shared/SpaceStyles';
import AdminInnerItem from './AdminInnerItem';
import SubMintBtn from '../../components/button/SubMintBtn';
import Text from '../../components/Text';

function AdminInnerList({
  floor,
  onClickSpaceListHandler,
  dragStart,
  onAvailableItemDragEnter,
  onDragOver,
  onDragEnd,
}) {
  const { submitAddInnerSpace } = useAddInnerSpace();

  return (
    <StInnerList>
      <SubMintBtn
        w="274px"
        h="35px"
        mg="11px"
        onClick={() => submitAddInnerSpace(floor)}
      >
        <Text shape="T16_700_19" color="var(--mint_002)">
          스페이스 추가
        </Text>
      </SubMintBtn>
      {floor.spaceList?.length > 0
        ? floor.spaceList.map(space => (
            <AdminInnerItem
              key={space.spaceId}
              space={space}
              onClickSpaceListHandler={onClickSpaceListHandler}
              dragStart={dragStart}
              onAvailableItemDragEnter={onAvailableItemDragEnter}
              onDragOver={onDragOver}
              onDragEnd={onDragEnd}
            />
          ))
        : null}
    </StInnerList>
  );
}

export default AdminInnerList;
