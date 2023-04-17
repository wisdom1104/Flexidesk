import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Column, Row } from '../../components/Flex';

function Test1() {
  const [floor, setFloor] = useState([
    {
      floorId: 1,
      floorName: '1번',
      spaceList: [
        { floorId: 1, floorName: '1번', spaceId: 1, spaceName: 'space1-1' },
        { floorId: 1, floorName: '1번', spaceId: 2, spaceName: 'space1-2' },
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

  const elRef = useRef([]);
  const boardEl = useRef(null);

  const list = floor?.map(item => item.spaceList);

  const handleDragStart = (e, boxId) => {
    e.dataTransfer.setData('boxId', boxId);
  };

  //--------------------------박스 드래그 앤 드롭--------------------------------
  const MouseDownHandler = (e, boxId) => {
    const fromId = boxId;
    const toId = 5;
    console.log('fromId', fromId);
    const currentBox = list.find(item => item.boxId === boxId);

    console.log('currentBox', currentBox);

    // const boxMoveHandler = e => {
    // const currentBox = list.find(item => item.boxId === boxId);
    // console.log('currentBox', currentBox);

    //   const newMouseX = e.clientX;
    //   const newMouseY = e.clientY;

    //   const boxDiffY = mouseY - currentBox.top;
    //   const boxDiffX = mouseX - currentBox.left;

    //   const newLeft = newMouseX - boxDiffX;
    //   const newTop = newMouseY - boxDiffY;

    //   const boardRect = boardEl.current.getBoundingClientRect();

    //   const boxRect = elRef.current[spaceIndex].getBoundingClientRect();

    //   setFloor(prevBoxes => {
    //     const newBoxes = [...prevBoxes];
    //     newBoxes[spaceIndex] = {
    //       ...currentBox,
    //       left: limitedLeft,
    //       top: limitedTop,
    //     };
    //     document.addEventListener('mouseup', spaceMouseUpHandler);
    //     return newBoxes;
    //   });
    // };

    // const spaceMouseUpHandler = e => {
    //   document.removeEventListener('mousemove', boxMoveHandler);
    //   document.removeEventListener('mouseup', spaceMouseUpHandler);
    // };

    // document.addEventListener('mousemove', boxMoveHandler);
    // document.addEventListener('mouseup', spaceMouseUpHandler);
  };

  return (
    <>
      <StList>
        {floor.map(space => (
          <div key={space.floorId}>
            <StFloor key={space.floorId}>{space.floorName}</StFloor>
            {space.spaceList?.length > 0 ? (
              space.spaceList?.map((item, index) => (
                <StSpace
                  key={item.spaceId}
                  ref={el => (elRef.current[index] = el)}
                  onMouseDown={e => MouseDownHandler(e, item.spaceId)}
                  onDragStart={e => handleDragStart(e, item.spaceId)}
                >
                  {item.spaceName} / {item.spaceId}
                </StSpace>
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
  gap: 20px;
`;
const StFloor = styled.div`
  background-color: lightgrey;
`;
const StSpace = styled.div`
  background-color: lightsteelblue;
  margin: 10px 0px;
`;
// const StList = styled.div``;
