import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../shared/cookies';
import { useSkltTimeout } from '../../hooks/useTimeout';
import { useSelectSpace } from '../../hooks/adminSpace/box/useSelectSpace';
import { useSrchFloorsAndSpaces } from '../../hooks/adminSpace/useSrchFloorsAndSpaces';
import { Row } from '../../components/Flex';
import Page from '../../components/Page';
import Skeleton from '../../components/Skeleton';
import SpaceBackBoard from '../../components/SpaceBackBoard';
import SpaceMainBoard from '../../components/SpaceMainBoard';
import MainMintBtn from '../../components/button/MainMintBtn';
import Text from '../../components/Text';
import { StSubHeader } from '../../pages/space/SpaceStyles';
import { InfoContain } from '../reservation/ReservationAllStyle';
import SpaceList from '../../features/space/SpaceList';
import SpaceBox from '../../features/space/SpaceBox';

function Space() {
  const navi = useNavigate();
  const { showSkeleton } = useSkltTimeout();

  const [selectedSpace, setSelectedSpace] = useState(null);
  const type = 'space';
  const { spaces, floors } = useSrchFloorsAndSpaces(type, setSelectedSpace);
  const { clickedSpaceId, onClickSpaceListHandler } = useSelectSpace(
    spaces,
    selectedSpace,
    setSelectedSpace,
  );

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
              <SpaceBackBoard>
                <StSubHeader>
                  <Row></Row>
                  <Row>
                    {role === 'ADMIN' ||
                      (role === 'MANAGER' && (
                        <MainMintBtn
                          mg="0px 16px"
                          h="43px"
                          pd="8px 16px"
                          onClick={() => navi('/adminSpace')}
                        >
                          <Text shape="T16_600" color="var(--white)">
                            관리하기
                          </Text>
                        </MainMintBtn>
                      ))}
                  </Row>
                </StSubHeader>
                <SpaceMainBoard></SpaceMainBoard>
              </SpaceBackBoard>
            </>
          )}
        </>
      )}
    </Page>
  );
}

export default Space;
