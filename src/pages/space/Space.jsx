import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getSpaces } from '../../redux/modules/spacesSlice';
import SpaceBox from '../../features/space/SpaceBox';
import { Column, Row } from '../../components/Flex';
import { cookies } from '../../shared/cookies';
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
import { __getFloors } from '../../redux/modules/floorsSlice';
import Page from '../../components/Page';
import { StSpacePagePhoto } from '../Welcome/WelcomeStyled';
import { InfoContain } from '../Reservation/CalendarStyled';
import Skeleton from '../../components/Skeleton';

function Space() {
  // useFalseHook('/adminspace');
  //-------------------------------------------------------------------------------
  const dispatch = useDispatch();
  const navi = useNavigate();
  const { spaces } = useSelector(state => state.spaces);
  const { floors } = useSelector(state => state.floors);

  // token 유무에 따른 가드
  const token = cookies.get('token');
  // 관리자 가드
  const role = cookies.get('role');

  // useEffect(() => {
  //   if (token === undefined) {
  //     navi('/');
  //   } else {
  //     dispatch(__getFloors());
  //     dispatch(__getSpaces());
  //   }
  // }, []);

  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    if (!token) {
      navi('/');
    } else {
      const loadData = async () => {
        try {
          dispatch(__getFloors());
          dispatch(__getSpaces());
        } catch (error) {
          console.log(error);
        }
      };

      const timer = setTimeout(() => {
        loadData();
        setShowSkeleton(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  const [selectedSpace, setSelectedSpace] = useState(null);

  useEffect(() => {
    setSelectedSpace(spaces[0]);
  }, [spaces]);

  const [clickedSpaceId, setClickedSpaceId] = useState(null);

  const onClickSpaceListHandler = spaceId => {
    const space = spaces.find(space => space.spaceId === spaceId);
    setSelectedSpace(space);
    setClickedSpaceId(spaceId);
  };

  return (
    <Page>
      {/* <Row> */}
      {/* ------------------------리스트 영역--------------------------------- */}
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
              // if (space && space.floorId !== null) return null;
            })}
          </StSpaceList>
        </StListbox>
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
