import React, { useEffect } from 'react';
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
import Test2 from '../../pages/space/Test2';
import Test4 from '../../pages/space/Test4';
import { useDispatch } from 'react-redux';
import { __addFloor } from '../../redux/modules/floorsSlice';
import { __addSpace } from '../../redux/modules/spacesSlice';

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
                />
                <SpaceList
                  spaces={spaces}
                  dispatch={dispatch}
                  onClickSpaceListHandler={onClickSpaceListHandler}
                />
                <Test4 floors={floors} spaces={spaces} />
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
