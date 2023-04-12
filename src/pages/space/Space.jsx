import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { __getSpaces } from '../../redux/modules/spacesSlice';
import SpaceBox from '../../features/space/SpaceBox';
import useFalseHook from '../../hooks/useFalseHook';

function Space() {
  // useFalseHook('/adminspace');
  //-------------------------------------------------------------------------------
  const dispatch = useDispatch();

  const { spaces } = useSelector(state => state.spaces);

  useEffect(() => {
    dispatch(__getSpaces());
  }, [dispatch]);

  // const onClickSpaceListHandler = id => {
  //   dispatch(__getSpace(id));
  //   alert(id);
  // };

  // console.log('spaces', spaces[0].spaceId);

  const [selectedSpace, setSelectedSpace] = useState(null);

  useEffect(() => {
    setSelectedSpace(spaces[0]);
  }, [spaces]);

  const onClickSpaceListHandler = spaceId => {
    const space = spaces.find(space => space.spaceId === spaceId);
    setSelectedSpace(space);
    // dispatch(__getSpace(spaceId));
  };

  return (
    <>
      <Row>
        {/* ------------------------리스트 영역--------------------------------- */}
        <StList>
          Space List
          <br />
          {spaces?.map(space => {
            if (space)
              return (
                <span
                  style={{ cursor: 'pointer' }}
                  key={space.spaceId}
                  onClick={() => onClickSpaceListHandler(space.spaceId)}
                >
                  {space.spaceName}
                </span>
              );
          })}
        </StList>
        <Column>
          {selectedSpace && (
            <SpaceBox
              spaceId={selectedSpace.spaceId}
              selectedSpace={selectedSpace}
            />
          )}
        </Column>
      </Row>
      {/* ------------------------스페이스 추가/완료 버튼--------------------------------- */}
      <StBtn>
        <button>Space 추가</button>
        <button>완료</button>
      </StBtn>
    </>
  );
}

export default Space;

const StList = styled.div`
  background: #80b166;
  width: 150px;
  height: 725px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: scroll;
`;

const StBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #867395;
  width: 700px;
  height: 700px;
  margin: 10px;
  position: relative;
  overflow: hidden;
`;
const StBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
