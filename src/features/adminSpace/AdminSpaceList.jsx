import React from 'react';
import { useEditSpace } from '../../hooks/adminSpace/list/useEditSpace';
import { useDeleteSpace } from '../../hooks/adminSpace/list/useDeleteSpace';
import Text from '../../components/Text';
import MainMintBtn from '../../components/button/MainMintBtn';
import SubMintBtn from '../../components/button/SubMintBtn';
import { Input } from '../../components/Input';
import { StList, StListBtnBox } from '../../pages/space/SpaceStyles';

function AdminSpaceList({
  space,
  onClickSpaceListHandler,
  dragStart,
  onAvailableItemDragEnter,
  onDragOver,
  onDragEnd,
}) {
  const {
    onSubmitEditSpace,
    isEditSpace,
    onChangeEditModeHandler,
    onChangeNameHandler,
    editSpaceName,
  } = useEditSpace(space);

  const { onSubmitDeleteSpace } = useDeleteSpace();

  return (
    <>
      {!isEditSpace ? (
        <StList
          key={space.spaceId}
          draggable
          data-space-id={space.spaceId}
          data-space-name={space.spaceName}
          data-floor-id={space.floorId}
          onDragStart={e => dragStart(e, space)}
          onDragEnter={e => onAvailableItemDragEnter(e, space)}
          onDragOver={onDragOver}
          onDragEnd={e => onDragEnd(e, space)}
        >
          <Text
            shape="T18_700_22"
            mg="0px 10px"
            data-floor-id={space.floorId}
            onClick={() => onClickSpaceListHandler(space.spaceId)}
          >
            {space.spaceName}
          </Text>
          <StListBtnBox>
            <MainMintBtn
              h="23px"
              pd="2px 6px"
              br="4px"
              onClick={() => onChangeEditModeHandler()}
            >
              <Text shape="T14_700_17" color="var(--white)">
                수정
              </Text>
            </MainMintBtn>
            <SubMintBtn
              h="23px"
              pd="2px 6px"
              br="4px"
              onClick={() => {
                const confirmDelete = window.confirm('정말 삭제하시겠습니까?');
                if (confirmDelete) {
                  onSubmitDeleteSpace(space.spaceId);
                }
              }}
            >
              <Text shape="T14_700_17" color="var(--mint_002)">
                삭제
              </Text>
            </SubMintBtn>
          </StListBtnBox>
        </StList>
      ) : (
        <StList>
          <Input
            w="120px"
            h="25px"
            br="5px"
            maxLength={9}
            type="text"
            value={editSpaceName}
            onChange={e => onChangeNameHandler(e.target.value)}
          />
          <StListBtnBox>
            <MainMintBtn
              h="23px"
              pd="2px 6px"
              br="4px"
              onClick={onSubmitEditSpace}
            >
              <Text shape="T14_700_17" color="var(--white)">
                완료
              </Text>
            </MainMintBtn>
            <SubMintBtn
              h="23px"
              pd="2px 6px"
              br="4px"
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

export default AdminSpaceList;
