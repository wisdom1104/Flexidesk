import React, { useState } from 'react';
import { __deleteSpace, __editSpace } from '../../redux/modules/spaceSlice';
import { Row } from '../../components/Flex';
import {
  BoxBtn,
  BoxSubBtn,
  EditInput,
  ListItem,
  StList,
  StListBtnBox,
  StListItem,
} from '../../shared/SpaceStyles';

function AdminSpaceItem({
  space,
  onClickSpaceListHandler,
  dispatch,
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
  const onEditSpaceNameHandler = async spaceId => {
    const payload = {
      spaceId,
      spaceName: editSpaceName,
    };
    dispatch(__editSpace(payload));
    setSpaceEdit(!spaceEdit);
  };

  return (
    <>
      <>
        {!spaceEdit ? (
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
            <StListItem
              data-floor-id={space.floorId}
              onClick={() => onClickSpaceListHandler(space.spaceId)}
            >
              {space.spaceName}
            </StListItem>
            <StListBtnBox>
              <BoxBtn
                onClick={() => {
                  setSpaceEdit(!spaceEdit);
                }}
              >
                수정
              </BoxBtn>
              <BoxSubBtn
                onClick={() => {
                  const confirmDelete =
                    window.confirm('정말 삭제하시겠습니까?');
                  if (confirmDelete) {
                    onDeleteSpaceHandler(space.spaceId);
                  }
                }}
              >
                삭제
              </BoxSubBtn>
            </StListBtnBox>
          </StList>
        ) : (
          <StList>
            <EditInput
              type="text"
              value={editSpaceName}
              onChange={e => {
                setEditSpaceName(e.target.value);
              }}
            />
            <StListBtnBox>
              <BoxBtn
                onClick={() => {
                  onEditSpaceNameHandler(space.spaceId);
                }}
              >
                완료
              </BoxBtn>
              <BoxSubBtn
                onClick={() => {
                  setSpaceEdit(!spaceEdit);
                }}
              >
                취소
              </BoxSubBtn>
            </StListBtnBox>
          </StList>
        )}
      </>
    </>
  );
}

export default AdminSpaceItem;
