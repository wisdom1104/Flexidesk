import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { __editSpace } from '../../redux/modules/spaceSlice';

function Test4({ floors, spaces }) {
  console.log('spaces', spaces);
  const dispatch = useDispatch();

  const dragItem = useRef(); // 드래그 시작위치
  const dragOverItem = useRef(); //드래그 중인 요소가 들어가려는 위치

  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
    console.log('dragItem.current', dragItem.current);
    e.target.classList.add('grabbing');
  };

  const onAvailableItemDragEnter = (e, index) => {
    dragOverItem.current = index;
    const copyListItems = [...spaces];
    const dragItemContent = copyListItems[dragItem.current];
    dragItemContent.floorId = 1; // 변경할 floorId 값인 1로 설정
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = dragOverItem.current;
    dragOverItem.current = null;
    console.log('set', dragItemContent);
    const payload = {};
    // dispatch(__editSpace(copyListItems));
  };

  const onDragEnd = e => {
    e.target.classList.remove('grabbing');
  };
  const onDragOver = e => {
    e.preventDefault();
  };

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
        })}
        {spaces?.map((space, index) => {
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
