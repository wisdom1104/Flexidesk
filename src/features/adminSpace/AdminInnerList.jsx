import React from 'react';
import { useAddInnerSpace } from '../../hooks/adminSpace/list/useAddInnerSpace';
import SubMintBtn from '../../components/button/SubMintBtn';
import Text from '../../components/Text';
import { StInnerList } from '../../pages/space/SpaceStyles';
import AdminInnerItem from './AdminInnerItem';

function AdminInnerList({
  floor,
  onClickSpaceListHandler,
  dragStart,
  onAvailableItemDragEnter,
  onDragOver,
  onDragEnd,
}) {
  const { onSubmitAddInnerSpace } = useAddInnerSpace();

  return (
    <StInnerList>
      <SubMintBtn
        w="274px"
        h="35px"
        mg="11px"
        onClick={() => onSubmitAddInnerSpace(floor)}
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
