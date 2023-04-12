import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getSpaces } from '../../redux/modules/spacesSlice';
import SpaceBox from '../../features/space/SpaceBox';
import useFalseHook from '../../hooks/useFalseHook';
import { StList } from './AdminSpace';
import { Column, Row } from '../../components/Flex';

function Space() {
  // useFalseHook('/adminspace');
  //-------------------------------------------------------------------------------
  const dispatch = useDispatch();
  const { spaces } = useSelector(state => state.spaces);

  useEffect(() => {
    dispatch(__getSpaces());
  }, [dispatch]);

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
    </>
  );
}

export default Space;
