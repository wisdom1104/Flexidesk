import React, { useState } from 'react';
import { __deleteFloor, __editFloor } from '../../redux/modules/floorSlice';
import { Row } from '../../components/Flex';
import InnerSpaceList from './InnerSpaceList';
import {
  BoxBtn,
  BoxSubBtn,
  EditInput,
  ListItem,
  StList,
  StListBtnBox,
  StListItem,
  StOpenBtn,
  StOpenList,
} from './SpaceStyles';

function FloorItem({
  floor,
  dispatch,
  onClickSpaceListHandler,
  dragStart,
  onAvailableItemDragEnter,
  onDragOver,
  onDragEnd,
}) {
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
  const [isMd, setIsMd] = useState(false);

  return (
    <>
      <div>
        {!floorEdit ? (
          <>
            {!isMd ? (
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
                      setIsMd(!isMd);
                    }}
                  >
                    <img
                      data-floor-id={floor.floorId}
                      src="img/listOpenIcon.png"
                    />
                  </StOpenBtn>
                </Row>
                <StListBtnBox data-floor-id={floor.floorId}>
                  <BoxBtn
                    data-floor-id={floor.floorId}
                    onClick={() => {
                      setFloorEdit(!floorEdit);
                    }}
                  >
                    수정
                  </BoxBtn>
                  <BoxSubBtn
                    data-floor-id={floor.floorId}
                    onClick={() => {
                      const confirmDelete =
                        window.confirm('정말 삭제하시겠습니까?');
                      if (confirmDelete) {
                        onDeleteFloorHandler(floor.floorId);
                      }
                    }}
                  >
                    삭제
                  </BoxSubBtn>
                </StListBtnBox>
              </StList>
            ) : (
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
                      setIsMd(!isMd);
                    }}
                  >
                    <img
                      data-floor-id={floor.floorId}
                      src="img/listCloseIcon.png"
                    />
                  </StOpenBtn>
                </Row>
                <StListBtnBox data-floor-id={floor.floorId}>
                  <BoxBtn
                    data-floor-id={floor.floorId}
                    onClick={() => {
                      setFloorEdit(!floorEdit);
                    }}
                  >
                    수정
                  </BoxBtn>
                  <BoxSubBtn
                    data-floor-id={floor.floorId}
                    onClick={() => {
                      const confirmDelete =
                        window.confirm('정말 삭제하시겠습니까?');
                      if (confirmDelete) {
                        onDeleteFloorHandler(floor.floorId);
                      }
                    }}
                  >
                    삭제
                  </BoxSubBtn>
                </StListBtnBox>
              </StOpenList>
            )}
            {isMd ? (
              <InnerSpaceList
                floor={floor}
                onClickSpaceListHandler={onClickSpaceListHandler}
                dragStart={dragStart}
                onAvailableItemDragEnter={onAvailableItemDragEnter}
                onDragOver={onDragOver}
                onDragEnd={onDragEnd}
              />
            ) : null}
          </>
        ) : (
          <StList data-floor-id={floor.floorId}>
            <EditInput
              data-floor-id={floor.floorId}
              type="text"
              value={editFloorName}
              onChange={e => {
                setEditFloorName(e.target.value);
              }}
            />
            <StListBtnBox>
              <BoxBtn
                data-floor-id={floor.floorId}
                onClick={() => {
                  onEditFloorNameHandler(floor.floorId);
                }}
              >
                완료
              </BoxBtn>
              <BoxSubBtn
                data-floor-id={floor.floorId}
                onClick={() => {
                  setFloorEdit(!floorEdit);
                }}
              >
                취소
              </BoxSubBtn>
            </StListBtnBox>
          </StList>
        )}
      </div>
    </>
  );
}

export default FloorItem;
