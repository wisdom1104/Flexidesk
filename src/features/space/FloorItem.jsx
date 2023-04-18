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

function FloorItem({ floor, dispatch, onClickSpaceListHandler }) {
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
  // console.log('floor', floor);
  // console.log('spaceList', floor.spaceList);
  const [isMd, setIsMd] = useState(false);

  return (
    <>
      <div>
        {!floorEdit ? (
          <>
            {!isMd ? (
              <StList>
                <Row>
                  <StListItem key={floor.floorId}>{floor.floorName}</StListItem>
                  <StOpenBtn
                    onClick={() => {
                      setIsMd(!isMd);
                    }}
                  >
                    <img src="img/listOpenIcon.png" />
                  </StOpenBtn>
                </Row>
                <StListBtnBox>
                  <BoxBtn
                    onClick={() => {
                      setFloorEdit(!floorEdit);
                    }}
                  >
                    수정
                  </BoxBtn>
                  <BoxSubBtn
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
              <StOpenList>
                <Row>
                  <StListItem key={floor.floorId}>{floor.floorName}</StListItem>
                  <StOpenBtn
                    onClick={() => {
                      setIsMd(!isMd);
                    }}
                  >
                    <img src="img/listCloseIcon.png" />
                  </StOpenBtn>
                </Row>
                <StListBtnBox>
                  <BoxBtn
                    onClick={() => {
                      setFloorEdit(!floorEdit);
                    }}
                  >
                    수정
                  </BoxBtn>
                  <BoxSubBtn
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
              />
            ) : null}
          </>
        ) : (
          <Row>
            <EditInput
              type="text"
              value={editFloorName}
              onChange={e => {
                setEditFloorName(e.target.value);
              }}
            />
            <div>
              <BoxBtn
                onClick={() => {
                  onEditFloorNameHandler(floor.floorId);
                }}
              >
                완료
              </BoxBtn>
              <BoxSubBtn
                onClick={() => {
                  setFloorEdit(!floorEdit);
                }}
              >
                취소
              </BoxSubBtn>
            </div>
          </Row>
        )}
      </div>
    </>
  );
}

export default FloorItem;
