import React, { useState } from 'react';
import { useDeleteFloor } from '../../hooks/adminSpace/list/useDeleteFloor';
import { Row } from '../../components/Flex';
import MainMintBtn from '../../components/button/MainMintBtn';
import SubMintBtn from '../../components/button/SubMintBtn';
import Text from '../../components/Text';
import {
  StList,
  StListBtnBox,
  Modalbtn,
  StOpenList,
} from '../../pages/space/SpaceStyles';
import AdminInnerList from '../adminSpace/AdminInnerList';

function AdminFloorItem({
  floor,
  onClickSpaceListHandler,
  dragStart,
  onAvailableItemDragEnter,
  onDragOver,
  onDragEnd,
  onChangeEditModeHandler,
}) {
  const [isInner, setIsInner] = useState(false);
  const { onSubmitDeleteFloor } = useDeleteFloor();

  return (
    <>
      {!isInner ? (
        <StList
          key={floor.floorId}
          data-floor-id={floor.floorId}
          onDragEnter={e => onAvailableItemDragEnter(e, floor)}
          onDragEnd={e => onDragEnd(e, floor)}
        >
          <Row data-floor-id={floor.floorId}>
            <Text
              shape="T18_700_22"
              mg="0px 10px"
              data-floor-id={floor.floorId}
              key={floor.floorId}
            >
              {floor.floorName}
            </Text>
            <Modalbtn
              data-floor-id={floor.floorId}
              onClick={() => {
                setIsInner(!isInner);
              }}
            >
              <img
                alt="floor 열기 버튼"
                data-floor-id={floor.floorId}
                src="img/listOpenIcon.png"
              />
            </Modalbtn>
          </Row>
          <StListBtnBox data-floor-id={floor.floorId}>
            <MainMintBtn
              h="23px"
              pd="2px 6px"
              br="4px"
              data-floor-id={floor.floorId}
              onClick={() => onChangeEditModeHandler()}
            >
              <Text shape="T14_700_17" color="var(--white)">
                수정
              </Text>
            </MainMintBtn>
            <SubMintBtn
              h="23px"
              pd="2px 6px"
              br="4px"
              data-floor-id={floor.floorId}
              onClick={() => {
                const confirmDelete = window.confirm('정말 삭제하시겠습니까?');
                if (confirmDelete) {
                  onSubmitDeleteFloor(floor.floorId);
                }
              }}
            >
              <Text shape="T14_700_17" color="var(--mint_002)">
                삭제
              </Text>
            </SubMintBtn>
          </StListBtnBox>
        </StList>
      ) : (
        <div>
          <StOpenList
            key={floor.floorId}
            data-floor-id={floor.floorId}
            onDragEnter={e => onAvailableItemDragEnter(e, floor)}
            onDragEnd={e => onDragEnd(e, floor)}
          >
            <Row data-floor-id={floor.floorId}>
              <Text
                shape="T18_700_22"
                mg="0px 10px"
                data-floor-id={floor.floorId}
                key={floor.floorId}
              >
                {floor.floorName}
              </Text>
              <Modalbtn
                data-floor-id={floor.floorId}
                onClick={() => {
                  setIsInner(!isInner);
                }}
              >
                <img
                  alt="floor 닫기 버튼"
                  data-floor-id={floor.floorId}
                  src="img/listCloseIcon.png"
                />
              </Modalbtn>
            </Row>
            <StListBtnBox data-floor-id={floor.floorId}>
              <MainMintBtn
                h="23px"
                pd="2px 6px"
                br="4px"
                data-floor-id={floor.floorId}
                onClick={() => onChangeEditModeHandler()}
              >
                <Text shape="T14_700_17" color="var(--white)">
                  수정
                </Text>
              </MainMintBtn>
              <SubMintBtn
                h="23px"
                pd="2px 6px"
                br="4px"
                data-floor-id={floor.floorId}
                onClick={() => {
                  const confirmDelete =
                    window.confirm('정말 삭제하시겠습니까?');
                  if (confirmDelete) {
                    onSubmitDeleteFloor(floor.floorId);
                  }
                }}
              >
                <Text shape="T14_700_17" color="var(--mint_002)">
                  삭제
                </Text>
              </SubMintBtn>
            </StListBtnBox>
          </StOpenList>
          <AdminInnerList
            floor={floor}
            onClickSpaceListHandler={onClickSpaceListHandler}
            dragStart={dragStart}
            onAvailableItemDragEnter={onAvailableItemDragEnter}
            onDragOver={onDragOver}
            onDragEnd={onDragEnd}
          />
        </div>
      )}
    </>
  );
}

export default AdminFloorItem;
