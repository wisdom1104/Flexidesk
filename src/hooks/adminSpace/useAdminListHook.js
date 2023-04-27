import { useState } from 'react';
import { __deleteFloor, __editFloor } from '../../redux/modules/floorSlice';
import { __addFloor } from '../../redux/modules/floorsSlice';
import { __addSpace } from '../../redux/modules/spacesSlice';
import { __deleteSpace, __editSpace } from '../../redux/modules/spaceSlice';

//space & floor 추가
export function useFloorAndSpaceAdd(dispatch) {
  // floor 추가
  const onClickAddFloorHandler = async () => {
    const newFloor = {
      floorName: 'New 층',
    };
    dispatch(__addFloor(newFloor));
  };

  // 그냥 space 추가
  const onClickAddSpaceHandler = async () => {
    const newSpace = {
      spaceName: 'New 스페이스',
    };
    dispatch(__addSpace(newSpace));
  };
  return { onClickAddFloorHandler, onClickAddSpaceHandler };
}

// floor 수정 & 삭제
export function useFloorDeleteAndEdit(dispatch, floor) {
  // floor 삭제
  const onDeleteFloorHandler = async floorId => {
    dispatch(__deleteFloor(floorId));
  };
  //floor name 수정
  const [editFloorName, setEditFloorName] = useState(floor.floorName);
  const [floorEdit, setFloorEdit] = useState(false);

  //floor name 수정 핸들러
  const onEditFloorNameHandler = async floorId => {
    const payload = {
      floorId,
      floorName: editFloorName,
    };
    dispatch(__editFloor(payload));
    setFloorEdit(!floorEdit);
  };
  const [isInner, setIsInner] = useState(false);

  return {
    onDeleteFloorHandler,
    onEditFloorNameHandler,
    isInner,
    setIsInner,
    floorEdit,
    setFloorEdit,
    editFloorName,
    setEditFloorName,
  };
}

// space 수정 & 삭제
export function useSpaceDeleteAndEdit(dispatch, space) {
  // space 삭제
  const onDeleteSpaceHandler = async spaceId => {
    dispatch(__deleteSpace(spaceId));
  };
  //space name 수정
  const [editSpaceName, setEditSpaceName] = useState(space.spaceName);
  const [spaceEdit, setSpaceEdit] = useState(false);

  //space name 수정 핸들러
  const onEditSpaceNameHandler = async space => {
    const payload = {
      spaceId: space.spaceId,
      spaceName: editSpaceName,
      floorId: space.floorId,
    };
    dispatch(__editSpace(payload));
    setSpaceEdit(!spaceEdit);
  };

  return {
    onDeleteSpaceHandler,
    onEditSpaceNameHandler,
    spaceEdit,
    setSpaceEdit,
    editSpaceName,
    setEditSpaceName,
  };
}
