import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSrchFloorsAndSpaces } from '../../hooks/adminSpace/useSrchFloorsAndSpaces';
import { useSelectSpace } from '../../hooks/adminSpace/box/useSelectSpace';
import { useSkltTimeout } from '../../hooks/useTimeoutHook';
import Skeleton from '../../components/Skeleton';
import { Column, Flex, Row } from '../../components/Flex';
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
import { StSpacePagePhoto } from '../welcome/WelcomeStyled';
import { InfoContain } from '../reservation/CalendarStyled';
import AdminList from '../../features/adminSpace/AdminList';
import AdminSelector from '../../features/adminSpace/AdminSelector';
import { Dimension } from '../../components/Dimension';
import { Void } from '../../components/Void';
import Text from '../../components/Text';
import MainMintBtn from '../../components/button/MainMintBtn';

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
      <Flex dir="column">
        <Void mg="10px 16">
          <Flex dir="row" gap="10" jc="space-between">
            <StSpacePagePhoto
              width="52px"
              marginTop
              src={`${process.env.PUBLIC_URL}/img/space.png`}
              alt="managementIcon"
            />
            <Void mg="30px 0">
              <Text shape="T28_700_34">
                <div>관리하기</div>
              </Text>
            </Void>
          </Flex>
        </Void>
        <AdminSelector />
      </Flex>
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
              <Dimension h="686px" minw="1020px">
                <StSubHeader>
                  <div>{/* space name 부분 */}</div>
                  <div>
                    <StSubBtn
                      onClick={() => {
                        setIsModal(!isModal);
                      }}
                    >
                      스페이스 관리하기
                    </StSubBtn>
                    <StBtn onClick={() => navi('/space')}>완료</StBtn>
                  </div>
                </StSubHeader>
                <StBoard>{/* board 부분 */}</StBoard>
              </Dimension>

              {/* <Stmainspace>
                <StSubHeader>
                  <Row>space name 부분</Row>
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
                <StBoard>board 부분</StBoard>
              </Stmainspace> */}
            </>
          )}
        </>
      )}
    </Page>
  );
}

export default AdminSpace;
