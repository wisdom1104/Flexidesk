import React, { useEffect, useRef, useState } from 'react';
import AdminSpaceBox from '../../features/adminSpace/AdminSpaceBox';
import { useNavigate } from 'react-router-dom';
import {
  StBoard,
  StBtn,
  StListTitle,
  StSubBtn,
  StSubHeader,
  Stmainspace,
} from '../../shared/SpaceStyles';
import { Column, Row } from '../../components/Flex';
import AdminList from '../../features/adminSpace/AdminList';

import AdminSelector from '../../features/adminSpace/AdminSelector';
import Page from '../../components/Page';
import { StSpacePagePhoto } from '../Welcome/WelcomeStyled';
import { getCookie } from '../../shared/cookies';
import { InfoContain } from '../Reservation/CalendarStyled';
import Skeleton from '../../components/Skeleton';
import {
  useBoxs,
  useFloorsAndSpaces,
  useSpaceSelect,
} from '../../hooks/adminSpace/useAdminSpaceHook';
import { useDispatch, useSelector } from 'react-redux';
import { __getFloors } from '../../redux/modules/floorsSlice';
import { __getSpaces } from '../../redux/modules/spacesSlice';
import { handleDragStart } from '../../utils/dragStartHandler';

function AdminSpace() {
  // const navi = useNavigate();
  // const { spaces, floors } = useFloorsAndSpaces(navi);

  // const { mrBoxes, boxes, multiBoxes, elRef, handleDragStart } = useBoxs();

  // const { selectedSpace, onClickSpaceListHandler, isModal, setIsModal } =
  //   useSpaceSelect(spaces);

  const [showSkeleton, setShowSkeleton] = useState(true);
  const token = getCookie('token');

  useEffect(() => {
    if (!token) {
      navi('/');
    } else {
      const timer = setTimeout(() => {
        setShowSkeleton(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  const [mrBoxes] = useState([{ mrId: 1, x: 1000, y: 1000, inner: '회의실' }]);
  const [boxes] = useState([{ boxId: 2, x: 1000, y: 1000, inner: '자리' }]);
  const [multiBoxes] = useState([
    { multiBoxId: 3, x: 1000, y: 1000, inner: '공용공간' },
  ]);

  const elRef = useRef([]);

  //-------------------------------------------------------------------------------
  const dispatch = useDispatch();
  const navi = useNavigate();
  const [selectedSpace, setSelectedSpace] = useState(null);

  const { spaces } = useSelector(state => state.spaces);
  const { floors } = useSelector(state => state.floors);
  // console.log('spaces', spaces);

  //가드 &&로 합치기 tay catch
  // token 유무에 따른 가드
  useEffect(() => {
    const token = getCookie('token');
    const role = getCookie('role');

    if (token === undefined) {
      // navi('/');
      navi('/login');
    } else if (role === 'ADMIN' || role === 'MANAGER') {
      dispatch(__getSpaces());
      dispatch(__getFloors());
    } else {
      navi('/space');
    }
    // cleanup 함수
    return () => {
      setSelectedSpace(null);
      // window.location.reload();
    };
  }, []);
  // console.log(spaces);
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
    <Page>
      {/* 리스트 영역 */}
      <AdminList
        isModal={isModal}
        setIsModal={setIsModal}
        spaces={spaces}
        floors={floors}
        onClickSpaceListHandler={onClickSpaceListHandler}
      />
      {/* 셀렉터 영역 */}
      <Column>
        <StListTitle>
          <StSpacePagePhoto
            width="52px"
            marginTop
            src={`${process.env.PUBLIC_URL}/img/space.png`}
            alt="managementIcon"
          />
          <div>관리하기</div>
        </StListTitle>
        <AdminSelector
          mrBoxes={mrBoxes}
          boxes={boxes}
          multiBoxes={multiBoxes}
          elRef={elRef}
          handleDragStart={handleDragStart}
        />
      </Column>
      {/* 보더 영역 */}
      {showSkeleton ? (
        <InfoContain>
          <Skeleton />
        </InfoContain>
      ) : (
        <>
          {spaces.length > 0 ? (
            <>
              {selectedSpace && (
                <AdminSpaceBox
                  spaceId={selectedSpace.spaceId}
                  selectedSpace={selectedSpace}
                  // handleDragStart={handleDragStart}
                  isModal={isModal}
                  setIsModal={setIsModal}
                  spaces={spaces}
                  id={selectedSpace.spaceId}
                  mrBoxes={mrBoxes}
                  boxes={boxes}
                  multiBoxes={multiBoxes}
                />
              )}
            </>
          ) : (
            <>
              {/* 초기 화면 */}
              <Stmainspace>
                <StSubHeader>
                  <Row>{/* space name 부분 */}</Row>
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
                <StBoard>{/* board 부분 */}</StBoard>
              </Stmainspace>
            </>
          )}
        </>
      )}
    </Page>
  );
}

export default AdminSpace;
