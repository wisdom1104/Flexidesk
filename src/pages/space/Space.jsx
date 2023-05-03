import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../shared/cookies';

import { Row } from '../../components/Flex';
import Page from '../../components/Page';
import Skeleton from '../../components/Skeleton';

import { useSkltTimeout } from '../../hooks/useTimeoutHook';
import { useSelectSpace } from '../../hooks/adminSpace/box/useSelectSpace';
import { useSrchFloorsAndSpaces } from '../../hooks/adminSpace/useSrchFloorsAndSpaces';
import {
  StBoard,
  StBtn,
  StSubHeader,
  Stmainspace,
} from '../../shared/SpaceStyles';
import { InfoContain } from '../Reservation/CalendarStyled';

import SpaceList from '../../features/space/SpaceList';
import SpaceBox from '../../features/space/SpaceBox';

function Space() {
  const navi = useNavigate();
  const [selectedSpace, setSelectedSpace] = useState(null);

  const type = 'space';
  const { spaces, floors } = useSrchFloorsAndSpaces(type, setSelectedSpace);

  const { clickedSpaceId, onClickSpaceListHandler } = useSelectSpace(
    spaces,
    selectedSpace,
    setSelectedSpace,
  );

  const { showSkeleton } = useSkltTimeout();

  const role = getCookie('role');

  return (
    <Page>
      <SpaceList
        floors={floors}
        spaces={spaces}
        onClickSpaceListHandler={onClickSpaceListHandler}
        clickedSpaceId={clickedSpaceId}
      />
      {showSkeleton ? (
        <InfoContain>
          <Skeleton />
        </InfoContain>
      ) : (
        <>
          {spaces.length > 0 ? (
            <>
              {selectedSpace && (
                <SpaceBox
                  spaces={spaces}
                  spaceId={selectedSpace.spaceId}
                  selectedSpace={selectedSpace}
                />
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
                    {role === 'ADMIN' || role === 'MANAGER' ? (
                      <StBtn onClick={() => navi('/adminSpace')}>
                        관리하기
                      </StBtn>
                    ) : null}
                  </Row>
                </StSubHeader>
                <StBoard></StBoard>
              </Stmainspace>
            </>
          )}
        </>
      )}
    </Page>
  );
}

export default Space;
