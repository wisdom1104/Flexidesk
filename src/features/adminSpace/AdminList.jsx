import React from 'react';
import {
  Modal,
  ModalBackground,
  ModalHeader,
  ModalList,
  ModalTitle,
  Modalbtn,
  StAddBtn,
  StAddBtnBox,
} from '../../shared/SpaceStyles';
import { useDispatch } from 'react-redux';
import AdminFloorList from './AdminFloorList';
import AdminSpaceList from './AdminSpaceList';
import { useListDragAndDrop } from '../../hooks/adminSpace/useListDragAndDropHook';
import { useFloorAndSpaceAdd } from '../../hooks/adminSpace/useAdminListHook';

function AdminList({
  isModal,
  setIsModal,
  spaces,
  floors,
  onClickSpaceListHandler,
}) {
  const dispatch = useDispatch();

  const { onClickAddFloorHandler, onClickAddSpaceHandler } =
    useFloorAndSpaceAdd(dispatch);

  //리스트 드래그 앤 드롭
  const { dragStart, onAvailableItemDragEnter, onDragEnd, onDragOver } =
    useListDragAndDrop(dispatch);

  return (
    <>
      {isModal ? (
        <ModalBackground>
          <Modal>
            <ModalList>
              <ModalHeader>
                <ModalTitle>관리하기</ModalTitle>
                <Modalbtn
                  onClick={() => {
                    setIsModal(!isModal);
                  }}
                >
                  <img alt="모달 닫기 버튼" src="img/modalBtnIcon.png" />
                </Modalbtn>
              </ModalHeader>
              <StAddBtnBox>
                <StAddBtn onClick={onClickAddFloorHandler}>층 추가</StAddBtn>
                <StAddBtn onClick={onClickAddSpaceHandler}>
                  스페이스 추가
                </StAddBtn>
              </StAddBtnBox>
              {floors?.map(floor => {
                if (floor)
                  return (
                    <AdminFloorList
                      key={floor.floorId}
                      floor={floor}
                      onClickSpaceListHandler={onClickSpaceListHandler}
                      dispatch={dispatch}
                      dragStart={dragStart}
                      onAvailableItemDragEnter={onAvailableItemDragEnter}
                      onDragOver={onDragOver}
                      onDragEnd={onDragEnd}
                    />
                  );
              })}
              {spaces?.map(space => {
                if (space && space.floorId === null)
                  return (
                    <AdminSpaceList
                      key={space.spaceId}
                      space={space}
                      onClickSpaceListHandler={onClickSpaceListHandler}
                      dispatch={dispatch}
                      dragStart={dragStart}
                      onAvailableItemDragEnter={onAvailableItemDragEnter}
                      onDragOver={onDragOver}
                      onDragEnd={onDragEnd}
                    />
                  );
                if (space && space.floorId !== null) return null;
              })}
            </ModalList>
          </Modal>
        </ModalBackground>
      ) : null}
    </>
  );
}

export default AdminList;
