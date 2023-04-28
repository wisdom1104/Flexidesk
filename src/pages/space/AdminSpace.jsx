import React, { useEffect, useState } from 'react';
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
import {
  useBoxs,
  useFloorsAndSpaces,
  useSpaceSelection,
} from '../../hooks/useAdminSpaceHook';
import AdminSelector from '../../features/adminSpace/AdminSelector';
import Page from '../../components/Page';
import { StSpacePagePhoto } from '../Welcome/WelcomeStyled';
import { getCookie } from '../../shared/cookies';
import { InfoContain } from '../Reservation/CalendarStyled';
import Skeleton from '../../components/Skeleton';

function AdminSpace() {
  const navi = useNavigate();
  const { spaces, floors } = useFloorsAndSpaces(navi);

  const { mrBoxes, boxes, multiBoxes, elRef, handleDragStart } = useBoxs();

  const { selectedSpace, onClickSpaceListHandler, isModal, setIsModal } =
    useSpaceSelection(spaces);

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
                  handleDragStart={handleDragStart}
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
