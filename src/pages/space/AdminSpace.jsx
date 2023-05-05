import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSrchFloorsAndSpaces } from '../../hooks/adminSpace/useSrchFloorsAndSpaces';
import { useSelectSpace } from '../../hooks/adminSpace/box/useSelectSpace';
import { useSkltTimeout } from '../../hooks/useTimeoutHook';
import Skeleton from '../../components/Skeleton';
import { Column, Row } from '../../components/Flex';
import Page from '../../components/Page';
import AdminSpaceBox from '../../features/adminSpace/AdminSpaceBox';
import {
  StBoard,
  StBtn,
  StListTitle,
  StSubBtn,
  StSubHeader,
  Stmainspace,
} from '../../shared/SpaceStyles';
import { InfoContain } from '../reservation/CalendarStyled';
import AdminList from '../../features/adminSpace/AdminList';
import AdminSelector from '../../features/adminSpace/AdminSelector';
import IconTitle from '../../components/IconTitle';

function AdminSpace() {
  const navi = useNavigate();

  const { showSkeleton } = useSkltTimeout();
  const [selectedSpace, setSelectedSpace] = useState(null);
  const type = 'admin';
  const { spaces, floors } = useSrchFloorsAndSpaces(type, setSelectedSpace);
  const { onClickSpaceListHandler, isModal, setIsModal } = useSelectSpace(
    spaces,
    selectedSpace,
    setSelectedSpace,
  );

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
          {/* <Icon src="space" alt="managementIcon" />
          <Text shape="T28_700_34">
            <div>관리하기</div>
          </Text> */}
          <IconTitle src="space" alt="managementIcon" title="관리하기" shape />
        </StListTitle>
        <AdminSelector />
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
                  isModal={isModal}
                  setIsModal={setIsModal}
                  spaces={spaces}
                  id={selectedSpace.spaceId}
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
