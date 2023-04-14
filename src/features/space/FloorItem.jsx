import React, { useState } from 'react';
import { __deleteFloor, __editFloor } from '../../redux/modules/floorSlice';
import { Row } from '../../components/Flex';
import InnerSpaceList from './InnerSpaceList';
import { EditInput, ListItem } from './SpaceStyles';

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
          <Row>
            <ListItem style={{ cursor: 'pointer' }} key={floor.floorId}>
              {floor.floorName}/{floor.floorId}-----
            </ListItem>
            <div>
              <button
                onClick={() => {
                  setFloorEdit(!floorEdit);
                }}
              >
                수정
              </button>
              <button
                onClick={() => {
                  const confirmDelete =
                    window.confirm('정말 삭제하시겠습니까?');
                  if (confirmDelete) {
                    onDeleteFloorHandler(floor.floorId);
                  }
                }}
              >
                삭제
              </button>
              <button
                onClick={() => {
                  setIsMd(!isMd);
                }}
              >
                열기
              </button>
            </div>
          </Row>
        ) : (
          <Row>
            <EditInput
              style={{ padding: '10px' }}
              type="text"
              value={editFloorName}
              onChange={e => {
                setEditFloorName(e.target.value);
              }}
            />
            <div>
              <button
                onClick={() => {
                  onEditFloorNameHandler(floor.floorId);
                }}
              >
                완료
              </button>
              <button
                onClick={() => {
                  setFloorEdit(!floorEdit);
                }}
              >
                취소
              </button>
            </div>
          </Row>
        )}
      </div>
      {isMd ? (
        <InnerSpaceList
          floor={floor}
          onClickSpaceListHandler={onClickSpaceListHandler}
        />
      ) : null}
    </>
  );
}

export default FloorItem;
