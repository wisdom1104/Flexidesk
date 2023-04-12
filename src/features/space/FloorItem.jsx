import React, { useState } from 'react';
import { __deleteFloor, __editFloor } from '../../redux/modules/floorSlice';
import { Row } from '../../components/Flex';
import InnerSpaceList from './InnerSpaceList';

function FloorItem({ floor, onClickFloorListHandler, dispatch }) {
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
  return (
    <>
      <div>
        {!floorEdit ? (
          <Row>
            <span
              style={{ cursor: 'pointer' }}
              key={floor.floorId}
              onClick={() => onClickFloorListHandler(floor.floorId)}
            >
              {floor.floorName}/{floor.floorId}-----
            </span>
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
            </div>
          </Row>
        ) : (
          <Row>
            <input
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
      <InnerSpaceList />
    </>
  );
}

export default FloorItem;
