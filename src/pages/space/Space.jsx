import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getSpaces } from '../../redux/modules/spacesSlice';
import SpaceBox from '../../features/space/SpaceBox';
import useFalseHook from '../../hooks/useFalseHook';
import { Row } from '../../components/Flex';
import { cookies } from '../../shared/cookies';
import { useNavigate } from 'react-router-dom';
import {
  ListItem,
  SpaceInnerList,
  StBoard,
  StBtn,
  StListTitle,
  StSpace,
  StSpaceList,
  StSubHeader,
  Stmainspace,
} from '../../features/space/SpaceStyles';
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
    token === undefined ? navi('/') : dispatch(__getFloors());
  }, []);
  useEffect(() => {
    token === undefined ? navi('/') : dispatch(__getSpaces());
  }, []);

  const [selectedSpace, setSelectedSpace] = useState(null);

  useEffect(() => {
    setSelectedSpace(spaces[0]);
  }, [spaces]);

  const onClickSpaceListHandler = spaceId => {
    const space = spaces.find(space => space.spaceId === spaceId);
    setSelectedSpace(space);
    // dispatch(__getSpace(spaceId));
  };

  return (
    <StSpace>
      {/* <Row> */}
      {/* ------------------------리스트 영역--------------------------------- */}
      <StSpaceList>
        <StListTitle>스페이스</StListTitle>
        {floors?.map(floor => {
          if (floor && floor.spaceList?.length > 0)
            return (
              <ListItem key={floor.floorId}>
                {floor.floorName}/{floor.floorId}
                <SpaceInnerList>
                  {floor.spaceList.map(space => (
                    <ListItem
                      key={space.spaceId}
                      onClick={() => onClickSpaceListHandler(space.spaceId)}
                    >
                      {space.spaceName}/{space.spaceId}
                    </ListItem>
                  ))}
                </SpaceInnerList>
              </ListItem>
            );
        })}
        {spaces?.map(space => {
          if (space && space.floorId === null)
            return (
              <ListItem
                key={space.spaceId}
                onClick={() => onClickSpaceListHandler(space.spaceId)}
              >
                {space.spaceName}/{space.spaceId}
              </ListItem>
            );
          if (space && space.floorId !== null) return null;
        })}
      </StSpaceList>

      {/* 보더 영역 */}
      {spaces.length > 0 ? (
        <>
          {' '}
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
