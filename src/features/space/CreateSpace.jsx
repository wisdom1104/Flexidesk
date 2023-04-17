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
} from './SpaceStyles';
import Test3 from '../../pages/space/Test3';
import Test1 from '../../pages/space/Test1';
import Test2 from '../../pages/space/Test2';
import Test4 from '../../pages/space/Test4';
import { useDispatch, useSelector } from 'react-redux';
import { __getSpace } from '../../redux/modules/spaceSlice';

function CreateSpace({
  isModal,
  setIsModal,
  spaces,
  floors,
  onClickSpaceListHandler,
}) {
  const dispatch = useDispatch();
  // const { space } = useSelector(state => state.space);

  // useEffect(() => {
  //   dispatch(__getSpace());
  // }, [dispatch]);

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
                {/* <FloorList
                  floors={floors}
                  onClickSpaceListHandler={onClickSpaceListHandler}
                />
                <SpaceList
                  spaces={spaces}
                  onClickSpaceListHandler={onClickSpaceListHandler}
                /> */}
                {/* <Test1 /> */}
                <Test4 floors={floors} spaces={spaces} />
                {/* <Test2 /> */}
                {/* <Test3 /> */}
              </ModalList>
            </Modal>
          </ModalBackground>
        ) : null //기계역할
      }
    </>
  );
}

export default CreateSpace;
