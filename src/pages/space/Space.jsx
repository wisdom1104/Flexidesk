import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getSpaces } from '../../redux/modules/spacesSlice';
import SpaceBox from '../../features/space/SpaceBox';
import { Column, Row } from '../../components/Flex';
import { getCookie } from '../../shared/cookies';
import { useNavigate } from 'react-router-dom';
import {
  ClisckedListItem,
  ListFloor,
  ListItem,
  SpaceInnerList,
  StBoard,
  StBtn,
  StListTitle,
  StListbox,
  StSpaceList,
  StSubHeader,
  Stmainspace,
} from '../../shared/SpaceStyles';
import Page from '../../components/Page';
import { StSpacePagePhoto } from '../Welcome/WelcomeStyled';
import { InfoContain } from '../Reservation/CalendarStyled';
import Skeleton from '../../components/Skeleton';
import { useSkltTimeout } from '../../hooks/useTimeoutHook';
import { useSelectSpace } from '../../hooks/adminSpace/box/useSelectSpace';
import { useSrchFloorsAndSpaces } from '../../hooks/adminSpace/useSrchFloorsAndSpaces';

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
      <Column>
        <StListTitle>
          <StSpacePagePhoto
            width="52px"
            marginTop
            src={`${process.env.PUBLIC_URL}/img/space.png`}
            alt="managementIcon"
          />
          <div>스페이스</div>
        </StListTitle>

        <StListbox>
          <StSpaceList>
            {floors?.map(floor => {
              if (floor && floor.spaceList?.length > 0)
                return (
                  <div key={floor.floorId}>
                    <ListFloor>{floor.floorName}</ListFloor>
                    <SpaceInnerList>
                      {floor.spaceList.map(space => {
                        const isClicked = space.spaceId === clickedSpaceId;
                        return (
                          <React.Fragment key={space.spaceId}>
                            {isClicked ? (
                              <ClisckedListItem
                                onClick={() =>
                                  onClickSpaceListHandler(space.spaceId)
                                }
                              >
                                {space.spaceName}
                              </ClisckedListItem>
                            ) : (
                              <ListItem
                                onClick={() =>
                                  onClickSpaceListHandler(space.spaceId)
                                }
                              >
                                {space.spaceName}
                              </ListItem>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </SpaceInnerList>
                  </div>
                );
            })}
            {spaces?.map(space => {
              const isClicked = space.spaceId === clickedSpaceId;
              if (space && space.floorId === null)
                return (
                  <React.Fragment key={space.spaceId}>
                    {isClicked ? (
                      <ClisckedListItem
                        onClick={() => onClickSpaceListHandler(space.spaceId)}
                      >
                        {space.spaceName}
                      </ClisckedListItem>
                    ) : (
                      <ListItem
                        onClick={() => onClickSpaceListHandler(space.spaceId)}
                      >
                        {space.spaceName}
                      </ListItem>
                    )}
                  </React.Fragment>
                );
            })}
          </StSpaceList>
        </StListbox>
      </Column>
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
