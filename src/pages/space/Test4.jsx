import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { __editSpace } from '../../redux/modules/spaceSlice';

function Test4({ floors, spaces }) {
  console.log('spaces', spaces);
  const dispatch = useDispatch();

  const dragSpace = useRef(); // 드래그 시작위치
  const dragFloor = useRef(); // 드래그 시작위치
  const dragOverSpace = useRef(); //드래그 중인 요소가 들어가려는 위치
  const dragOverFloor = useRef(); //드래그 중인 요소가 들어가려는 위치

  const dragStart = (e, space) => {
    dragSpace.current = space.spaceId;
    dragFloor.current = space.floorId;
    console.log('space', space);
    // console.log(e.target.innerHTML);
    // console.log('dragItem.current', dragItem.current);
    e.target.classList.add('grabbing');
  };

  const onAvailableItemDragEnter = (e, index) => {
    const draggedOverSpace = e.target;
    dragOverSpace.current = draggedOverSpace.dataset.spaceId;
    dragOverFloor.current = draggedOverSpace.dataset.floorId;
    if (dragOverFloor.current === undefined) {
      dragOverFloor.current = null;
    }
    console.log('dragOverSpace.current', dragOverSpace.current);
    console.log('dragOverFloor.current', dragOverFloor.current);
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
        {floors?.map(floor => {
          if (floor)
            return (
              <>
                <StFloor>
                  {floor.floorName}/{floor.floorId}
                </StFloor>
                {floor.spaceList?.length > 0
                  ? floor.spaceList.map((space, index) => (
                      <StSpace
                        key={space.spaceId}
                        draggable
                        data-space-id={space.spaceId}
                        data-floor-id={space.floorId}
                        onDragStart={e => dragStart(e, space)}
                        onDragEnter={e => onAvailableItemDragEnter(e, index)}
                        onDragOver={onDragOver}
                        onDragEnd={onDragEnd}
                      >
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
                data-space-id={space.spaceId}
                data-floor-id={space.floorId}
                onDragStart={e => dragStart(e, space)}
                onDragEnter={e => onAvailableItemDragEnter(e, index)}
                onDragOver={onDragOver}
                onDragEnd={onDragEnd}
              >
                {space.spaceName}/{space.spaceId}
              </StSpace>
            );
          if (space && space.floorId !== null) return null;
        })}
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
