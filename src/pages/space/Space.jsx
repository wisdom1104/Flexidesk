import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getSpaces } from '../../redux/modules/spacesSlice';
import SpaceBox from '../../features/space/SpaceBox';
import useFalseHook from '../../hooks/useFalseHook';
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
  StSpace,
  StSpaceList,
  StSubHeader,
  Stmainspace,
} from '../../shared/SpaceStyles';
import { __getFloors } from '../../redux/modules/floorsSlice';

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

  useEffect(() => {
    if (token === undefined) {
      navi('/');
      // navi('/login');
    } else {
      dispatch(__getFloors());
      dispatch(__getSpaces());
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
    <StSpace>
      {/* <Row> */}
      {/* ------------------------리스트 영역--------------------------------- */}
      <Column>
        <StListTitle>스페이스</StListTitle>
        {/* <div>11</div> */}
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
                {role === 'ADMIN' ? (
                  <StBtn onClick={() => navi('/adminSpace')}>관리하기</StBtn>
                ) : (
                  <div>1</div>
                )}
              </Row>
            </StSubHeader>
            <StBoard></StBoard>
          </Stmainspace>
        </>
      )}
    </StSpace>
  );
}

export default Space;
