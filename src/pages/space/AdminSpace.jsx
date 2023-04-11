import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { __addSpace, __getSpaces } from '../../redux/modules/spacesSlice';
import AdminSpaceBox from '../../features/space/AdminSpaceBox';
import { __deleteSpace } from '../../redux/modules/spaceSlice';
import useFalseHook from '../../hooks/useFalseHook';
import { cookies } from '../../shared/cookies';
import { useNavigate } from 'react-router-dom';

function AdminSpace() {
  useFalseHook();
  const [mrBoxes] = useState([{ mrId: 1, x: 20, y: 20, inner: '회의실' }]);
  const [boxes] = useState([{ boxId: 2, x: 20, y: 50, inner: '박스' }]);

  const elRef = useRef([]);

  const handleDragStart = (e, boxId) => {
    e.dataTransfer.setData('boxId', boxId);
  };
  //-------------------------------------------------------------------------------
  const dispatch = useDispatch();

  const { spaces } = useSelector(state => state.spaces);

  const token = cookies.get('role');
  const navi = useNavigate();

  useEffect(() => {
    if (token === 'ADMIN') {
      dispatch(__getSpaces());
    } else {
      navi('/space');
    }
  }, [dispatch]);
  //추가
  const onClickAddSpaceHandler = async () => {
    const newSpace = {
      spaceName: 'New Space',
    };

    dispatch(__addSpace(newSpace));
    // console.log(newSpace);
  };

  //삭제
  const onDeleteSpaceHandler = async spaceId => {
    dispatch(__deleteSpace(spaceId));
    // dispatch(__getSpaces())
  };
  //
  const [selectedSpace, setSelectedSpace] = useState(null);
  useEffect(() => {
    setSelectedSpace(spaces[0]);
  }, [spaces]);

  const onClickSpaceListHandler = spaceId => {
    const space = spaces.find(space => space.spaceId === spaceId);
    setSelectedSpace(space);
  };

  return (
    <>
      <Row>
        {/* ------------------------셀렉터 영역--------------------------------- */}
        <StSelect>
          <span>AdminSpace</span>
          {/* ------------------------회의실 셀렉터--------------------------------- */}
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
          {/* ------------------------박스 셀렉터--------------------------------- */}
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
        {/* ------------------------리스트 영역--------------------------------- */}
        <StList>
          Space List
          <br />
          {spaces?.map(space => {
            if (space)
              return (
                <span
                  style={{ cursor: 'pointer' }}
                  key={space.spaceId}
                  onClick={() => onClickSpaceListHandler(space.spaceId)}
                >
                  {space.spaceName}/{space.spaceId}-----
                  <button
                    onClick={() => {
                      const confirmDelete =
                        window.confirm('정말 삭제하시겠습니까?');
                      if (confirmDelete) {
                        onDeleteSpaceHandler(space.spaceId);
                      }
                    }}
                  >
                    X
                  </button>
                </span>
              );
          })}
        </StList>
        <Column>
          {selectedSpace && (
            <AdminSpaceBox
              spaceId={selectedSpace.spaceId}
              selectedSpace={selectedSpace}
            />
          )}
        </Column>
      </Row>
      <StBtn>
        <button onClick={onClickAddSpaceHandler}>Space 추가</button>
        <button>완료</button>
      </StBtn>
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

const StList = styled.div`
  background: #80b166;
  width: 200px;
  height: 725px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: scroll;
`;

const StBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
