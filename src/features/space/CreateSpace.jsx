import React, { useRef, useState } from 'react';
import SpaceList from './SpaceList';
import FloorList from './FloorList';
import {
  Modal,
  ModalBackground,
  ModalHeader,
  ModalList,
  ModalTitle,
  Modalbtn,
  StAddBtn,
  StAddBtnBox,
} from './SpaceStyles';
import Test4 from '../../pages/space/Test4';
import { useDispatch } from 'react-redux';
import { __addFloor } from '../../redux/modules/floorsSlice';
import { __addSpace } from '../../redux/modules/spacesSlice';
import { __editSpace } from '../../redux/modules/spaceSlice';

function CreateSpace({
  isModal,
  setIsModal,
  spaces,
  floors,
  onClickSpaceListHandler,
}) {
  const dispatch = useDispatch();

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
    console.log('newSpace', newSpace);
    dispatch(__addSpace(newSpace));
  };

  //리스트 드래그 앤 드롭
  const dragSpace = useRef(); // 드래그 시작위치
  const dragName = useRef(); // 드래그 시작위치
  const dragFloor = useRef(); // 드래그 시작위치
  const dragOverSpace = useRef(); //드래그 중인 요소가 들어가려는 위치
  const dragOverFloor = useRef(); //드래그 중인 요소가 들어가려는 위치

  const [moveSpace, setMoveSpace] = useState({
    spaceId: null,
    spaceName: '',
    floorId: 0,
  });

  const dragStart = (e, space) => {
    // console.log('1');
    dragSpace.current = space.spaceId;
    dragName.current = space.spaceName;
    dragFloor.current = space.floorId;
    e.target.classList.add('grabbing');
  };

  const onAvailableItemDragEnter = (e, space) => {
    // console.log('2');

    // console.log('space', space);
    const draggedOverSpace = e.target;
    console.log('taget', draggedOverSpace);
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
    // console.log('name', payload.spaceName);
    // console.log('id', payload.spaceId);
    console.log('Floor', payload.floorId);
    setMoveSpace(payload);
  };

  const onDragEnd = e => {
    // console.log('3');

    e.target.classList.remove('grabbing');
    console.log('moveSpace', moveSpace);
    dispatch(__editSpace(moveSpace));
  };

  const onDragOver = e => {
    e.preventDefault();
  };

  return (
    <>
      {
        isModal == false ? (
          <ModalBackground
            onClick={() => {
              setIsModal(!isModal);
            }}
          >
            <Modal onClick={e => e.stopPropagation()}>
              <ModalList>
                <ModalHeader>
                  <ModalTitle>관리하기</ModalTitle>
                  <Modalbtn
                    onClick={() => {
                      setIsModal(!isModal);
                    }}
                  >
                    <img src="img/modalBtnIcon.png" />
                  </Modalbtn>
                </ModalHeader>
                <StAddBtnBox>
                  <StAddBtn onClick={onClickAddFloorHandler}>층 추가</StAddBtn>
                  <StAddBtn onClick={onClickAddSpaceHandler}>
                    스페이스 추가
                  </StAddBtn>
                </StAddBtnBox>
                <FloorList
                  floors={floors}
                  dispatch={dispatch}
                  onClickSpaceListHandler={onClickSpaceListHandler}
                  dragStart={dragStart}
                  onAvailableItemDragEnter={onAvailableItemDragEnter}
                  onDragOver={onDragOver}
                  onDragEnd={onDragEnd}
                />
                <SpaceList
                  spaces={spaces}
                  dispatch={dispatch}
                  onClickSpaceListHandler={onClickSpaceListHandler}
                  dragStart={dragStart}
                  onAvailableItemDragEnter={onAvailableItemDragEnter}
                  onDragOver={onDragOver}
                  onDragEnd={onDragEnd}
                />
                {/* <Test4 floors={floors} spaces={spaces} /> */}
                {/* <Test2 /> */}
              </ModalList>
            </Modal>
          </ModalBackground>
        ) : null //기계역할
      }
    </>
  );
}

export default CreateSpace;
