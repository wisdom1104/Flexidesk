import React, { useState } from 'react';
import { useDeleteFloor } from '../../hooks/adminSpace/list/useDeleteFloor';
import { Row } from '../../components/Flex';
import {
  BoxBtn,
  BoxSubBtn,
  StList,
  StListBtnBox,
  StListItem,
  StOpenBtn,
  StOpenList,
} from '../../shared/SpaceStyles';
import AdminInnerList from '../adminSpace/AdminInnerList';
function AdminFloorItem({
  floor,
  onClickSpaceListHandler,
  dragStart,
  onAvailableItemDragEnter,
  onDragOver,
  onDragEnd,
  changeEditModeHandler,
}) {
  const [isInner, setIsInner] = useState(false);
  const { submitDeleteFloor } = useDeleteFloor();

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
            <StListItem data-floor-id={floor.floorId} key={floor.floorId}>
              {floor.floorName}
            </StListItem>
            <StOpenBtn
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
            </StOpenBtn>
          </Row>
          <StListBtnBox data-floor-id={floor.floorId}>
            <BoxBtn
              data-floor-id={floor.floorId}
              onClick={() => changeEditModeHandler()}
            >
              수정
            </BoxBtn>
            <BoxSubBtn
              data-floor-id={floor.floorId}
              onClick={() => {
                const confirmDelete = window.confirm('정말 삭제하시겠습니까?');
                if (confirmDelete) {
                  submitDeleteFloor(floor.floorId);
                }
              }}
            >
              삭제
            </BoxSubBtn>
          </StListBtnBox>
        </StList>
      ) : (
        <>
          <StOpenList
            key={floor.floorId}
            data-floor-id={floor.floorId}
            onDragEnter={e => onAvailableItemDragEnter(e, floor)}
            onDragEnd={e => onDragEnd(e, floor)}
          >
            <Row data-floor-id={floor.floorId}>
              <StListItem data-floor-id={floor.floorId} key={floor.floorId}>
                {floor.floorName}
              </StListItem>
              <StOpenBtn
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
              </StOpenBtn>
            </Row>
            <StListBtnBox data-floor-id={floor.floorId}>
              <BoxBtn
                data-floor-id={floor.floorId}
                onClick={() => changeEditModeHandler()}
              >
                수정
              </BoxBtn>
              <BoxSubBtn
                data-floor-id={floor.floorId}
                onClick={() => {
                  const confirmDelete =
                    window.confirm('정말 삭제하시겠습니까?');
                  if (confirmDelete) {
                    submitDeleteFloor(floor.floorId);
                  }
                }}
              >
                삭제
              </BoxSubBtn>
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
        </>
      )}
    </>
  );
}

export default AdminFloorItem;
