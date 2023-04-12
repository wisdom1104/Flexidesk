import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { __addInnerSpace } from '../../redux/modules/spacesSlice';
import { __deleteSpace } from '../../redux/modules/spaceSlice';
import { Row } from '../../components/Flex';

function InnerSpaceList({ floor }) {
  const dispatch = useDispatch();

  // 그냥 space 추가
  const onClickAddSpaceHandler = async () => {
    const payload = {
      floorId: floor.floorId,
      spaceName: 'New Space',
    };
    dispatch(__addInnerSpace(payload));
  };

  // space 삭제
  const onDeleteSpaceHandler = async spaceId => {
    dispatch(__deleteSpace(spaceId));
  };

  return (
    <InnerList>
      <button onClick={onClickAddSpaceHandler}>Space 추가</button>
      {floor.spaceList?.length > 0
        ? floor.spaceList.map(space => (
            <Row>
              <div>{space.spaceName}------</div>
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
            </Row>
          ))
        : null}
    </InnerList>
  );
}

export default InnerSpaceList;

const InnerList = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  gap: 20px;
`;
