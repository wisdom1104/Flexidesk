import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { __addSpace, __getSpaces } from '../../redux/modules/spacesSlice';
import AdminSpaceBox from '../../features/space/AdminSpaceBox';
import { __deleteSpace } from '../../redux/modules/spaceSlice';
import useFalseHook from '../../hooks/useFalseHook';
import { cookies } from '../../shared/cookies';
import { useNavigate } from 'react-router-dom';
import { Column, Row } from '../../components/Flex';
import CreateSpace from '../../features/space/CreateSpace';
import { __getFloors } from '../../redux/modules/floorsSlice';

function AdminSpace() {
  // useFalseHook();
  const [mrBoxes] = useState([{ mrId: 1, x: 20, y: 20, inner: '회의실' }]);
  const [boxes] = useState([{ boxId: 2, x: 20, y: 50, inner: '박스' }]);

  const elRef = useRef([]);

  const handleDragStart = (e, boxId) => {
    e.dataTransfer.setData('boxId', boxId);
  };
  //-------------------------------------------------------------------------------
  const dispatch = useDispatch();
  const navi = useNavigate();

  const { spaces } = useSelector(state => state.spaces);
  const { floors } = useSelector(state => state.floors);
  console.log('spaces', spaces);

  // token 유무에 따른 가드
  const token = cookies.get('token');
  useEffect(() => {
    token === undefined ? navi('/') : dispatch(__getSpaces());
  }, []);

  // 관리자 가드
  const role = cookies.get('role');

  useEffect(() => {
    if (role === 'ADMIN') {
      dispatch(__getSpaces());
      dispatch(__getFloors());
    } else {
      navi('/space');
    }
  }, [dispatch]);
  // console.log(floors);

  // space 선택
  const [selectedSpace, setSelectedSpace] = useState(null);
  useEffect(() => {
    // 초기 space 설정
    setSelectedSpace(spaces[0]);
  }, [spaces]);
  //space 선택 핸들러
  const onClickSpaceListHandler = spaceId => {
    const space = spaces.find(space => space.spaceId === spaceId);
    setSelectedSpace(space);
    setIsModal(!isModal);
    console.log(selectedSpace);
  };

  // floor 선택
  const [selectedFloor, setSelectedFloor] = useState(null);
  useEffect(() => {
    // 초기 floor 설정
    setSelectedFloor(floors[0]);
  }, [floors]);
  //floor 선택 핸들러
  const onClickFloorListHandler = floorId => {
    const floor = floors.find(floor => floor.floorId === floorId);
    setSelectedFloor(floor);
    setIsModal(!isModal);
  };

  const [isModal, setIsModal] = useState(false);

  return (
    <>
      <Row>
        {/* 리스트 영역 */}
        <CreateSpace
          isModal={isModal}
          setIsModal={setIsModal}
          spaces={spaces}
          floors={floors}
          onClickSpaceListHandler={onClickSpaceListHandler}
          onClickFloorListHandler={onClickFloorListHandler}
        />
        {/* 셀렉터 영역 */}
        <StSelect>
          <span>AdminSpace</span>
          {/* 회의실 셀렉터 */}
          {mrBoxes.map((box, i) => (
            <StBox
              key={box.mrId}
              ref={el => (elRef.current[i] = el)}
              draggable={true}
              onDragStart={e => handleDragStart(e, box.mrId)}
              x={box.x}
              y={box.y}
            >
              {box.inner} {box.mrId}
            </StBox>
          ))}
          {/* 박스 셀렉터 */}
          {boxes.map((box, i) => (
            <StBox
              key={box.boxId}
              ref={el => (elRef.current[i] = el)}
              draggable={true}
              onDragStart={e => handleDragStart(e, box.boxId)}
              x={box.x}
              y={box.y}
            >
              {box.inner} {box.boxId}
            </StBox>
          ))}
        </StSelect>
        <Column>
          {/* 보더 영역 */}
          {/* {spaces.length < 0 ? (
            <div>11</div>
          ) : (
            <div>22</div>
          )} */}
          <div>
            {selectedSpace && selectedFloor && (
              <AdminSpaceBox
                spaceId={selectedSpace.spaceId}
                floorId={selectedFloor.floorId}
                selectedSpace={selectedSpace}
                selectedFloor={selectedFloor}
                handleDragStart={handleDragStart}
                isModal={isModal}
                setIsModal={setIsModal}
                floors={floors}
              />
            )}
          </div>
        </Column>
      </Row>
    </>
  );
}

export default AdminSpace;

const StBox = styled.div`
  background: steelblue;
  width: 50px;
  height: 50px;
  margin: 10px;
  cursor: grab;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StSelect = styled.div`
  background: #759573;
  width: 150px;
  height: 700px;
  padding: 10px;
`;

export const StList = styled.div`
  background: #80b166;
  width: 200px;
  height: 725px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: scroll;
`;

export const StBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

export const StBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #867395;
  margin: 10px;
  position: relative;
  overflow: hidden;
  width: 1162px;
  height: 686px;
  background: #f4fbf9;
  border-radius: 8px;
`;

export const StBtnBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  gap: 5px;
`;

export const StDropMr = styled.div`
  background: #c478a4;
  width: 100px;
  height: 100px;
  margin: 10px;
  cursor: grab;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const StDropBox = styled.div`
  background: #c0a55c;
  width: 100px;
  height: 100px;
  margin: 10px;
  cursor: grab;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
