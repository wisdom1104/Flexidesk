import React from 'react';
import { useDeleteSpace } from '../../hooks/adminSpace/list/useDeleteSpace';
import { useEditSpace } from '../../hooks/adminSpace/list/useEditSpace';
import { StInner, StListBtnBox } from '../../pages/space/SpaceStyles';
import MainMintBtn from '../../components/button/MainMintBtn';
import Text from '../../components/Text';
import SubMintBtn from '../../components/button/SubMintBtn';
import { Input } from '../../components/Input';

function AdminInnerItem({
  space,
  onClickSpaceListHandler,
  dragStart,
  onAvailableItemDragEnter,
  onDragOver,
  onDragEnd,
}) {
  const {
    submitEditSpace,
    isEditSpace,
    changeEditModeHandler,
    changeNameHandler,
    editSpaceName,
  } = useEditSpace(space);

  const { submitDeleteSpace } = useDeleteSpace();

  return (
    <>
      {!isEditSpace ? (
        <StInner
          key={space.spaceId}
          draggable
          data-space-id={space.spaceId}
          data-floor-id={space.floorId}
          onDragStart={e => dragStart(e, space)}
          onDragEnter={e => onAvailableItemDragEnter(e, space)}
          onDragOver={onDragOver}
          onDragEnd={e => onDragEnd(e, space)}
        >
          <Text
            shape="T16_400"
            mg="0px 10px 0px 20px"
            data-floor-id={space.floorId}
            onClick={() => onClickSpaceListHandler(space.spaceId)}
          >
            {space.spaceName}
          </Text>
          <StListBtnBox data-floor-id={space.floorId}>
            <MainMintBtn
              h="23px"
              pd="2px 6px"
              br="4px"
              data-floor-id={space.floorId}
              onClick={() => changeEditModeHandler()}
            >
              <Text shape="T14_700_17" color="var(--white)">
                수정
              </Text>
            </MainMintBtn>
            <SubMintBtn
              h="23px"
              pd="2px 6px"
              br="4px"
              data-floor-id={space.floorId}
              onClick={() => {
                const confirmDelete = window.confirm('정말 삭제하시겠습니까?');
                if (confirmDelete) {
                  submitDeleteSpace(space.spaceId);
                }
              }}
            >
              <Text shape="T14_700_17" color="var(--mint_002)">
                삭제
              </Text>
            </SubMintBtn>
          </StListBtnBox>
        </StInner>
      ) : (
        <StInner data-floor-id={space.floorId}>
          <Input
            w="120px"
            h="25px"
            br="5px"
            mg="0px 0px 0px 15px"
            maxLength={10}
            data-floor-id={space.floorId}
            type="text"
            value={editSpaceName}
            onChange={e => changeNameHandler(e.target.value)}
          />
          <StListBtnBox data-floor-id={space.floorId}>
            <MainMintBtn
              h="23px"
              pd="2px 6px"
              br="4px"
              data-floor-id={space.floorId}
              onClick={submitEditSpace}
            >
              <Text shape="T14_700_17" color="var(--white)">
                완료
              </Text>
            </MainMintBtn>
            <SubMintBtn
              h="23px"
              pd="2px 6px"
              br="4px"
              data-floor-id={space.floorId}
              onClick={() => changeEditModeHandler()}
            >
              <Text shape="T14_700_17" color="var(--mint_002)">
                취소
              </Text>
            </SubMintBtn>
          </StListBtnBox>
        </StInner>
      )}
    </>
  );
}

export default AdminInnerItem;
