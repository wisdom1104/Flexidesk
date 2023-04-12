import React from 'react';
import { useDispatch } from 'react-redux';
import { __addSpace } from '../../redux/modules/spacesSlice';
import { __deleteSpace } from '../../redux/modules/spaceSlice';

function SpaceList({ spaces, onClickSpaceListHandler }) {
  const dispatch = useDispatch();

  // 그냥 space 추가
  const onClickAddSpaceHandler = async () => {
    const newSpace = {
      spaceName: 'New Space',
    };
    dispatch(__addSpace(newSpace));
  };
  // space 삭제
  const onDeleteSpaceHandler = async spaceId => {
    dispatch(__deleteSpace(spaceId));
  };

  return (
    <>
      Space List
      <br />
      <button onClick={onClickAddSpaceHandler}>Space 추가</button>
      {spaces?.map(space => {
        if (space)
          return (
            <span
              style={{ cursor: 'pointer' }}
              key={space.spaceId}
              onClick={() => onClickSpaceListHandler(space.spaceId)}
            >
              {space.spaceName}/{space.spaceId}-----
              <button
                onClick={() => {
                  const confirmDelete =
                    window.confirm('정말 삭제하시겠습니까?');
                  if (confirmDelete) {
                    onDeleteSpaceHandler(space.spaceId);
                  }
                }}
              >
                X
              </button>
            </span>
          );
      })}
    </>
  );
}

export default SpaceList;
