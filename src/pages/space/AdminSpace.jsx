import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getSpaces } from '../../redux/modules/spacesSlice';
import AdminSpaceBox from '../../features/space/AdminSpaceBox';
import useFalseHook from '../../hooks/useFalseHook';
import { cookies } from '../../shared/cookies';
import { useNavigate } from 'react-router-dom';
import CreateSpace from '../../features/space/CreateSpace';
import { __getFloors } from '../../redux/modules/floorsSlice';
import {
  StBoard,
  StBtn,
  StSelect,
  StSelectBox,
  StSelectTitle,
  StSpace,
  StSubBtn,
  StSubHeader,
  Stmainspace,
} from '../../features/space/SpaceStyles';
import styled from 'styled-components';
import { Row } from '../../components/Flex';

function AdminSpace() {
  // useFalseHook();
  const [mrBoxes] = useState([{ mrId: 1, inner: '회의실' }]);
  const [boxes] = useState([{ boxId: 2, inner: '자리' }]);

  const elRef = useRef([]);

  const handleDragStart = (e, boxId) => {
    e.dataTransfer.setData('boxId', boxId);
  };
  //-------------------------------------------------------------------------------
  const dispatch = useDispatch();
  const navi = useNavigate();
  const [selectedSpace, setSelectedSpace] = useState(null);

  const { spaces } = useSelector(state => state.spaces);
  const { floors } = useSelector(state => state.floors);

  //가드 &&로 합치기 tay catch
  // token 유무에 따른 가드
  useEffect(() => {
    const token = cookies.get('token');
    const role = cookies.get('role');

    if (token === undefined) {
      navi('/');
      // navi('/login');
    } else if (role === 'ADMIN') {
      dispatch(__getSpaces());
      dispatch(__getFloors());
    } else {
      navi('/space');
    }
    // cleanup 함수
    return () => {
      setSelectedSpace(null);
      window.location.reload();
    };
  }, []);

  // space 선택
  useEffect(() => {
    // 초기 space 설정
    setSelectedSpace(spaces[0]);
  }, [spaces]);
  //space 선택 핸들러
  const onClickSpaceListHandler = id => {
    const space = spaces.find(space => space.spaceId === id);
    setSelectedSpace(space);
    setIsModal(!isModal);
  };


  const [isModal, setIsModal] = useState(false);

  return (
    <StSpace>
      {/* 리스트 영역 */}
      <CreateSpace
        isModal={isModal}
        setIsModal={setIsModal}
        spaces={spaces}
        floors={floors}
        onClickSpaceListHandler={onClickSpaceListHandler}
      />
      {/* 셀렉터 영역 */}
      <StSelect>
        <StSelectTitle>AdminSpace</StSelectTitle>
        <div>
          {mrBoxes.map((box, i) => (
            <StSelectBox
              key={box.mrId}
              ref={el => (elRef.current[i] = el)}
              draggable={true}
              onDragStart={e => handleDragStart(e, box.mrId)}
            >
              {box.inner}
            </StSelectBox>
          ))}
        </div>
        <div>
          {/* 박스 셀렉터 */}
          {boxes.map((box, i) => (
            <StSelectBox
              key={box.boxId}
              ref={el => (elRef.current[i] = el)}
              draggable={true}
              onDragStart={e => handleDragStart(e, box.boxId)}
            >
              {box.inner}
            </StSelectBox>
          ))}
        </div>
      </StSelect>
      {/* 보더 영역 */}
      {spaces.length > 0 ? (
        <>
          {selectedSpace && (
            <AdminSpaceBox
              spaceId={selectedSpace.spaceId}
              selectedSpace={selectedSpace}
              handleDragStart={handleDragStart}
              isModal={isModal}
              setIsModal={setIsModal}
              spaces={spaces}
              id={selectedSpace.spaceId}
            />
            // <div>1</div>
          )}
        </>
      ) : (
        <>
          {/* 초기 화면 */}
          <Stmainspace>
            <StSubHeader>
              {/* space name 부분 */}
              <Row></Row>
              <Row>
                <StSubBtn
                  onClick={() => {
                    setIsModal(!isModal);
                  }}
                >
                  스페이스 관리하기
                </StSubBtn>
                <StBtn onClick={() => navi('/space')}>완료</StBtn>
              </Row>
            </StSubHeader>
            {/* board 부분 */}
            <StBoard></StBoard>
          </Stmainspace>
        </>
      )}
    </StSpace>
  );
}

export default AdminSpace;
