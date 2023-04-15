import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Column, Row } from '../../components/Flex';

function Test1() {
  const [floor, setFloor] = useState([
    {
      floorId: 1,
      floorName: '1번',
      spaceList: [
        { floorId: 1, floorName: '1번', spaceId: 2, spaceName: 'space1-1' },
        { floorId: 1, floorName: '1번', spaceId: 3, spaceName: 'space1-2' },
      ],
    },
    {
      floorId: 2,
      floorName: '2번',
      spaceList: [
        { floorId: 2, floorName: '2번', spaceId: 3, spaceName: 'space2-1' },
        { floorId: 2, floorName: '2번', spaceId: 4, spaceName: 'space2-2' },
      ],
    },
  ]);

  return (
    <>
      <StList>
        {floor.map(space => (
          <div key={space.floorId}>
            <StFloor key={space.floorId}>{space.floorName}</StFloor>
            {space.spaceList?.length > 0 ? (
              space.spaceList?.map((item, index) => (
                <StSpace key={item.spaceId}>{item.spaceName}</StSpace>
              ))
            ) : (
              <div>null</div>
            )}
          </div>
        ))}
      </StList>
    </>
  );
}

export default Test1;

const StList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const StFloor = styled.div`
  background-color: lightgrey;
`;
const StSpace = styled.div`
  background-color: lightsteelblue;
  margin: 5px 0px;
`;
// const StList = styled.div``;
