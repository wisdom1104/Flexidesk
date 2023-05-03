import React from 'react';
import {
  ModalContain,
  ModalBackground,
  ModalHeader,
  ModalList,
  ModalTitle,
  Modalbtn,
  StAddBtn,
  StAddBtnBox,
} from '../../shared/SpaceStyles';
import AdminFloorList from './AdminFloorList';
import AdminSpaceList from './AdminSpaceList';
import { useAddFloor } from '../../hooks/adminSpace/list/useAddFloor';
import { useAddSpace } from '../../hooks/adminSpace/list/useAddSpace';
import { useListDragAndDrop } from '../../hooks/adminSpace/list/useListDragAndDrop';

function AdminList({
  isModal,
  setIsModal,
  spaces,
  floors,
  onClickSpaceListHandler,
}) {
  const { submitAddFloor } = useAddFloor();
  const { submitAddSpace } = useAddSpace();

  //리스트 드래그 앤 드롭
  const { dragStart, onAvailableItemDragEnter, onDragEnd, onDragOver } =
    useListDragAndDrop();

  return (
    <>
      {isModal ? (
        <ModalBackground>
          <ModalContain>
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
                <StAddBtn onClick={() => submitAddFloor()}>층 추가</StAddBtn>
                <StAddBtn onClick={() => submitAddSpace()}>
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
                      dragStart={dragStart}
                      onAvailableItemDragEnter={onAvailableItemDragEnter}
                      onDragOver={onDragOver}
                      onDragEnd={onDragEnd}
                    />
                  );
                if (space && space.floorId !== null) return null;
              })}
            </ModalList>
          </ModalContain>
        </ModalBackground>
      ) : null}
    </>
  );
}

export default AdminList;
