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

function InnerSpaceItem({ dispatch, space, onClickSpaceListHandler }) {
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
  console.log('space', space);
  return (
    <>
      {!spaceEdit ? (
        <StInner key={space.spaceId}>
          <StInnerItem onClick={() => onClickSpaceListHandler(space.spaceId)}>
            {space.spaceName}
          </StInnerItem>
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
        <Row>
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
                onEditSpaceNameHandler(space);
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
        </Row>
      )}
    </>
  );
}

export default InnerSpaceItem;
