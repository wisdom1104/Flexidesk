import React, { useState } from 'react';
import { __deleteSpace, __editSpace } from '../../redux/modules/spaceSlice';
import { Row } from '../../components/Flex';

function SpaceItem({ space, onClickSpaceListHandler, dispatch }) {
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
  // console.log('space', space);
  // console.log('spaceList', space.spaceList);

  return (
    <>
      <div>
        {!spaceEdit ? (
          <Row>
            {' '}
            <span
              style={{ cursor: 'pointer' }}
              key={space.spaceId}
              onClick={() => onClickSpaceListHandler(space.spaceId)}
            >
              {space.spaceName}/{space.spaceId}-----
            </span>
            <div>
              <button
                onClick={() => {
                  setSpaceEdit(!spaceEdit);
                }}
              >
                수정
              </button>
              <button
                onClick={() => {
                  const confirmDelete =
                    window.confirm('정말 삭제하시겠습니까?');
                  if (confirmDelete) {
                    onDeleteSpaceHandler(space.spaceId);
                  }
                }}
              >
                삭제
              </button>
            </div>
          </Row>
        ) : (
          <Row>
            {' '}
            <input
              style={{ padding: '10px' }}
              type="text"
              value={editSpaceName}
              onChange={e => {
                setEditSpaceName(e.target.value);
              }}
            />
            <div>
              <button
                onClick={() => {
                  onEditSpaceNameHandler(space.spaceId);
                }}
              >
                완료
              </button>
              <button
                onClick={() => {
                  setSpaceEdit(!spaceEdit);
                }}
              >
                취소
              </button>
            </div>
          </Row>
        )}
      </div>
    </>
  );
}

export default SpaceItem;
