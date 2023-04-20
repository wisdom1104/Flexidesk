import React, { useState } from 'react';
import { Row } from '../../components/Flex';
import { __deleteSpace, __editSpace } from '../../redux/modules/spaceSlice';
import {
  BoxBtn,
  BoxSubBtn,
  EditInput,
  ListItem,
  StInner,
  StInnerItem,
  StListBtnBox,
} from './SpaceStyles';

function InnerSpaceItem({
  dispatch,
  space,
  onClickSpaceListHandler,
  dragStart,
  onAvailableItemDragEnter,
  onDragOver,
  onDragEnd,
}) {
  // space 삭제
  const onDeleteSpaceHandler = async spaceId => {
    dispatch(__deleteSpace(spaceId));
  };
  //space name 수정
  const [editSpaceName, setEditSpaceName] = useState(space.spaceName);
  const [spaceEdit, setSpaceEdit] = useState(false);

  //space name 수정 핸들러
  const onEditSpaceNameHandler = async space => {
    const payload = {
      spaceId: space.spaceId,
      spaceName: editSpaceName,
      floorId: space.floorId,
    };
    dispatch(__editSpace(payload));
    setSpaceEdit(!spaceEdit);
  };

  return (
    <>
      {!spaceEdit ? (
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
          <StInnerItem
            data-floor-id={space.floorId}
            onClick={() => onClickSpaceListHandler(space.spaceId)}
          >
            {space.spaceName}
          </StInnerItem>
          <StListBtnBox data-floor-id={space.floorId}>
            <BoxBtn
              data-floor-id={space.floorId}
              onClick={() => {
                setSpaceEdit(!spaceEdit);
              }}
            >
              수정
            </BoxBtn>
            <BoxSubBtn
              data-floor-id={space.floorId}
              onClick={() => {
                const confirmDelete = window.confirm('정말 삭제하시겠습니까?');
                if (confirmDelete) {
                  onDeleteSpaceHandler(space.spaceId);
                }
              }}
            >
              삭제
            </BoxSubBtn>
          </StListBtnBox>
        </StInner>
      ) : (
        <StInner data-floor-id={space.floorId}>
          <EditInput
            data-floor-id={space.floorId}
            style={{ marginLeft: '25px' }}
            type="text"
            value={editSpaceName}
            onChange={e => {
              setEditSpaceName(e.target.value);
            }}
          />
          <StListBtnBox data-floor-id={space.floorId}>
            <BoxBtn
              data-floor-id={space.floorId}
              onClick={() => {
                onEditSpaceNameHandler(space);
              }}
            >
              완료
            </BoxBtn>
            <BoxSubBtn
              data-floor-id={space.floorId}
              onClick={() => {
                setSpaceEdit(!spaceEdit);
              }}
            >
              취소
            </BoxSubBtn>
          </StListBtnBox>
        </StInner>
      )}
    </>
  );
}

export default InnerSpaceItem;
