import React from 'react';
import { useAddFloor } from '../../hooks/adminSpace/list/useAddFloor';
import { useAddSpace } from '../../hooks/adminSpace/list/useAddSpace';
import { useListDragAndDrop } from '../../hooks/adminSpace/list/useListDragAndDrop';
import Text from '../../components/Text';
import MainMintBtn from '../../components/button/MainMintBtn';
import {
  ModalContain,
  ModalBackground,
  ModalHeader,
  ModalList,
  Modalbtn,
  StBtnBox,
} from '../../pages/space/SpaceStyles';
import AdminFloorList from './AdminFloorList';
import AdminSpaceList from './AdminSpaceList';

function AdminList({
  isModal,
  setIsModal,
  spaces,
  floors,
  onClickSpaceListHandler,
}) {
  const { onSubmitAddFloor } = useAddFloor();
  const { onSubmitAddSpace } = useAddSpace();

  //리스트 드래그 앤 드롭
  const { dragStart, onAvailableItemDragEnter, onDragEnd, onDragOver } =
    useListDragAndDrop();

  return (
    <>
      {isModal && (
        <ModalBackground>
          <ModalContain>
            <ModalList>
              <ModalHeader>
                <Text shape="T18_700_22" color="var(--blue_003)">
                  관리하기
                </Text>
                <Modalbtn
                  onClick={() => {
                    setIsModal(!isModal);
                  }}
                >
                  <img alt="모달 닫기 버튼" src="img/modalBtnIcon.png" />
                </Modalbtn>
              </ModalHeader>
              <StBtnBox>
                <MainMintBtn
                  w="131px"
                  h="43px"
                  onClick={() => onSubmitAddFloor()}
                >
                  <Text shape="T16_700_19" color="var(--white)">
                    층 추가
                  </Text>
                </MainMintBtn>
                <MainMintBtn
                  w="131px"
                  h="43px"
                  onClick={() => onSubmitAddSpace()}
                >
                  <Text shape="T16_700_19" color="var(--white)">
                    스페이스 추가
                  </Text>
                </MainMintBtn>
              </StBtnBox>
              {floors?.map(floor => (
                <>
                  {floor && (
                    <AdminFloorList
                      key={floor.floorId}
                      floor={floor}
                      onClickSpaceListHandler={onClickSpaceListHandler}
                      dragStart={dragStart}
                      onAvailableItemDragEnter={onAvailableItemDragEnter}
                      onDragOver={onDragOver}
                      onDragEnd={onDragEnd}
                    />
                  )}
                </>
              ))}
              {spaces?.map(space => (
                <>
                  {space && space.floorId === null && (
                    <AdminSpaceList
                      key={space.spaceId}
                      space={space}
                      onClickSpaceListHandler={onClickSpaceListHandler}
                      dragStart={dragStart}
                      onAvailableItemDragEnter={onAvailableItemDragEnter}
                      onDragOver={onDragOver}
                      onDragEnd={onDragEnd}
                    />
                  )}
                  {space && space.floorId !== null && null}
                </>
              ))}
            </ModalList>
          </ModalContain>
        </ModalBackground>
      )}
    </>
  );
}

export default AdminList;
