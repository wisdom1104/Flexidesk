import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getSpaces } from '../../redux/modules/spacesSlice';
import SpaceBox from '../../features/space/SpaceBox';
import useFalseHook from '../../hooks/useFalseHook';
import { StList } from './AdminSpace';
import { Column, Row } from '../../components/Flex';
import { cookies } from '../../shared/cookies';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Space() {
  // useFalseHook('/adminspace');
  //-------------------------------------------------------------------------------
  const dispatch = useDispatch();
  const navi = useNavigate();
  const { spaces } = useSelector(state => state.spaces);

  // token 유무에 따른 가드
  const token = cookies.get('token');
  useEffect(() => {
    token === undefined ? navi('/') : dispatch(__getSpaces());
  }, []);

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
    <StSpace>
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
    </StSpace>
  );
}

export default Space;

const StSpace = styled.div`
  position: relative;
  /* max-width: 1440px; */
  min-width: 1430px;
  min-width: 760px;
  /* height: 810px; */
  background-color: #ffffff;
`;
