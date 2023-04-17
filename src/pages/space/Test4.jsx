import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { __editSpace } from '../../redux/modules/spaceSlice';

function Test4({ floors, spaces }) {
  return (
    <>
      <StList>
        {/* {floors?.map(floor => {
          if (floor)
            return (
              <>
                <StFloor>
                  {floor.floorName}/{floor.floorId}
                </StFloor>
                {floor.spaceList?.length > 0
                  ? floor.spaceList.map(space => (
                      <StSpace>
                        {space.spaceName}/{space.spaceId}
                      </StSpace>
                    ))
                  : null}
              </>
            );
        })} */}
        {/* {spaces?.map((space, index) => {
          if (space && space.floorId === null)
            return (
              <StSpace
                key={space.spaceId}
                draggable
                onDragStart={e => dragStart(e, space.spaceId)}
                onDragEnter={e => onAvailableItemDragEnter(e, space.spaceId)}
                onDragOver={onDragOver}
                onDragEnd={onDragEnd}
              >
                {space.spaceName}/{space.spaceId}
              </StSpace>
            );
          if (space && space.floorId !== null) return null;
        })} */}
        
        <div>1</div>

      </StList>
    </>
  );
}

export default Test4;

const StList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const StFloor = styled.div`
  background-color: lightgrey;
`;
const StSpace = styled.div`
  background-color: lightsteelblue;
  margin: 10px 0px;
`;
