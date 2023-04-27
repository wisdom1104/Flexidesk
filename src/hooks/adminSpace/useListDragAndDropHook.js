import { useRef, useState } from 'react';
import { __editSpace } from '../../redux/modules/spaceSlice';

export function useListDragAndDrop(dispatch) {
  const dragSpace = useRef(); // space 드래그 시작위치
  const dragName = useRef(); // 드래그 되는 Space 이름
  const dragFloor = useRef(); // floor 드래그 시작위치
  const dragOverSpace = useRef(); //드래그 중인 space가 들어가려는 위치
  const dragOverFloor = useRef(); //드래그 중인 floor가 들어가려는 위치

  const [moveSpace, setMoveSpace] = useState({
    spaceId: null,
    spaceName: '',
    floorId: 0,
  });

  const dragStart = (e, space) => {
    dragSpace.current = space.spaceId;
    dragName.current = space.spaceName;
    dragFloor.current = space.floorId;
    e.target.classList.add('grabbing');
  };

  const onAvailableItemDragEnter = (e, space) => {
    const draggedOverSpace = e.target;
    dragOverSpace.current = draggedOverSpace.dataset.spaceId;
    dragOverFloor.current = draggedOverSpace.dataset.floorId;
    if (dragOverFloor.current === undefined) {
      dragOverFloor.current = null;
    }
    const payload = {
      spaceId: dragSpace.current,
      spaceName: dragName.current,
      floorId: dragOverFloor.current,
    };
    setMoveSpace(payload);
  };

  const onDragEnd = e => {
    e.target.classList.remove('grabbing');
    dispatch(__editSpace(moveSpace));
  };

  const onDragOver = e => {
    e.preventDefault();
  };

  return { dragStart, onAvailableItemDragEnter, onDragEnd, onDragOver };
}
