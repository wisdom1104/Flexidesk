import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Column, Row } from '../../components/Flex';

function Test1() {
  const [floor, setFloor] = useState([
    {
      floorId: 1,
      floorName: '1번',
      list: [
        { floorId: 1, floorName: '1번', spaceId: 2, spaceName: 'space1-1' },
        { floorId: 1, floorName: '1번', spaceId: 3, spaceName: 'space1-2' },
      ],
    },
    {
      floorId: 2,
      floorName: '2번',
      list: [
        { floorId: 2, floorName: '2번', spaceId: 3, spaceName: 'space2-1' },
        { floorId: 2, floorName: '2번', spaceId: 4, spaceName: 'space2-2' },
      ],
    },
  ]);

  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
    dragItem.current = position;
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };

  const drop = e => {
    const copyListItems = [...floor];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setFloor(copyListItems);
  };

  return (
    <>
      <StList>
        {floor.map(space => (
          <>
            <StFloor>{space.floorName}</StFloor>

            {space.list?.length > 0 ? (
              space.list?.map(item => (
                <StSpace
                  key={item.spaceId}
                  onDragStart={e => dragStart(e, item.spaceId)}
                  onDragOver={e => e.preventDefault()}
                  onDragEnter={e => dragEnter(e, item.spaceId)}
                  onDragEnd={drop}
                  draggable
                >
                  <div>{item.spaceName}</div>
                </StSpace>
              ))
            ) : (
              <div>null</div>
            )}
          </>
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
`;
// const StList = styled.div``;
