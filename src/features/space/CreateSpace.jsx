import React, { useState } from 'react';
import styled from 'styled-components';
import { StList } from '../../pages/space/AdminSpace';
import { useDispatch } from 'react-redux';
import { __addSpace } from '../../redux/modules/spacesSlice';
import { __deleteSpace } from '../../redux/modules/spaceSlice';
import SpaceList from './SpaceList';
import FloorList from './FloorList';

function CreateSpace({
  isModal,
  setIsModal,
  spaces,
  floors,
  onClickSpaceListHandler,
  onClickFloorListHandler,
}) {
  const dispatch = useDispatch();

  // // 그냥 space 추가
  // const onClickAddSpaceHandler = async () => {
  //   const newSpace = {
  //     spaceName: 'New Space',
  //   };
  //   dispatch(__addSpace(newSpace));
  // };
  // // space 삭제
  // const onDeleteSpaceHandler = async spaceId => {
  //   dispatch(__deleteSpace(spaceId));
  // };

  return (
    <>
      {
        isModal == false ? (
          <ModalBackground
            onClick={() => {
              setIsModal(!isModal);
            }}
          >
            <Modal2 onClick={e => e.stopPropagation()}>
              <button
                onClick={() => {
                  setIsModal(!isModal);
                }}
              >
                X
              </button>
              {/* <button onClick={onClickAddSpaceHandler}>Space 추가</button> */}
              <FloorList
                floors={floors}
                onClickFloorListHandler={onClickFloorListHandler}
              />
              <SpaceList
                spaces={spaces}
                onClickSpaceListHandler={onClickSpaceListHandler}
              />
            </Modal2>
          </ModalBackground>
        ) : null //기계역할
      }
    </>
  );
}

export default CreateSpace;
export const ModalBackground = styled.div`
  position: fixed;
  display: flex;
  /* justify-content: center;
  align-items: center; */
  background-color: rgba(255, 255, 255, 0.5);
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: 50;
`;

const Modal2 = styled.div`
  position: absolute;
  top: 134px;
  /* left: 802px; */
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  border-radius: 5px;
  padding: 24px;
  background-color: rgb(134, 173, 245);
  width: 250px;
  height: 700px;
  gap: 20px;

  overflow: scroll;
`;
