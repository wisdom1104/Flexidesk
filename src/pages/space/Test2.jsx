import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Column, Row } from '../../components/Flex';

function Test2() {
  // const [floor, setFloor] = useState([
  //   {
  //     floorId: 1,
  //     floorName: '1번',
  //     spaceList: [
  //       { floorId: 1, floorName: '1번', spaceId: 1, spaceName: 'space1-1' },
  //       { floorId: 1, floorName: '1번', spaceId: 2, spaceName: 'space1-2' },
  //     ],
  //   },
  //   {
  //     floorId: 2,
  //     floorName: '2번',
  //     spaceList: [
  //       { floorId: 2, floorName: '2번', spaceId: 3, spaceName: 'space2-1' },
  //       { floorId: 2, floorName: '2번', spaceId: 4, spaceName: 'space2-2' },
  //     ],
  //   },
  // ]);
  const [space, setSpace] = useState([
    { floorId: 1, floorName: '1번', spaceId: 1, spaceName: 'space1-1' },
    { floorId: 1, floorName: '1번', spaceId: 2, spaceName: 'space1-2' },
    { floorId: 2, floorName: '2번', spaceId: 3, spaceName: 'space2-1' },
    { floorId: 2, floorName: '2번', spaceId: 4, spaceName: 'space2-2' },
  ]);

  const dragItem = useRef(); // 드래그 시작위치
  const dragOverItem = useRef(); //드래그 중인 요소가 들어가려는 위치

  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
    const copyListItems = [...space];
    console.log('copyListItems', copyListItems);
    e.target.classList.add('grabbing');
  };

  const onAvailableItemDragEnter = (e, index) => {
    dragOverItem.current = index;
    const copyListItems = [...space]; // 1
    const dragItemContent = copyListItems[dragItem.current]; //2
    copyListItems.splice(dragItem.current, 1); //3
    copyListItems.splice(dragOverItem.current, 0, dragItemContent); // 4
    dragItem.current = dragOverItem.current;
    dragOverItem.current = null; //5
    setSpace(copyListItems);
  }; //6

  // 1. 먼저 얄은 복사로 렌더링 시 참조하고 있는 데이터 배열을 복사해준다.
  // 2. 복사된 배열에 useRef객체에 저장된 인덱스값을 참조해 드래그 중인 아이템의 인덱스마다 값을 업데이트 시켜준다.
  // 3. 드래그 된 아이템은 이동 중이기 때문에, 랜더링에 참조할 복사배열에서 값을 제거해준다.
  // 4. 드래그된 아이템을 드래그 오버된 아이템 다음으로 위치할 수 있도록 splice() 메소드를 사용한다.
  // 5. 드래그 오버된 아이템의 인덱스를 참조하기 위해 만들어준 useRef객체의 current값을 초기화해준다.
  // 6. 리스트를 새롭게 렌더링할수 있도록 상태를 업데이트해준다.
  const onDragEnd = e => {
    e.target.classList.remove('grabbing');
  };
  const onDragOver = e => {
    e.preventDefault();
  };

  return (
    <>
      <StList>
        {/* {floor.map(space => (
          <div key={space.floorId}>
            <StFloor key={space.floorId}>{space.floorName}</StFloor>
            {space.spaceList?.length > 0 ? (
              space.spaceList?.map((item, index) => (
                <StSpace
                  key={item.spaceId}
                  onDragStart={e => dragStart(e, index)}
                  onDragOver={e => e.preventDefault()}
                  onDragEnter={e => dragEnter(e, index)}
                  onDragEnd={drop}
                  draggable
                >
                  {item.spaceName} / {item.spaceId}
                </StSpace>
              ))
            ) : (
              <div>null</div>
            )}
          </div>
        ))} */}
        {space.length > 0 ? (
          space?.map((item, index) => (
            <StSpace
              key={item.spaceId}
              draggable
              onDragStart={e => dragStart(e, index)}
              onDragEnter={e => onAvailableItemDragEnter(e, index)}
              onDragOver={onDragOver}
              onDragEnd={onDragEnd}
            >
              {item.spaceName} / {item.spaceId}
            </StSpace>
          ))
        ) : (
          <div>null</div>
        )}
      </StList>
    </>
  );
}

export default Test2;

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
