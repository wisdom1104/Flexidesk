import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getSpace } from '../../redux/modules/spaceSlice';
import { useNavigate } from 'react-router-dom';
import { cookies } from '../../shared/cookies';
import { __editBox, __editBoxUser } from '../../redux/modules/spaceBoxSlice';
import {
  StBoard,
  StBox,
  StBtn,
  StMr,
  StSubHeader,
  StUseBox,
  StUser,
  Stmainspace,
  SubIcon,
  SubTitle,
} from './SpaceStyles';
import { Row } from '../../components/Flex';

function SpaceBox({ spaceId, selectedSpace }) {
  const dispatch = useDispatch();
  const navi = useNavigate();

  // 관리자 가드
  const role = cookies.get('role');

  const { space } = useSelector(state => state.space);

  useEffect(() => {
    dispatch(__getSpace(spaceId));
    // console.log(space);
  }, [selectedSpace]);

  //유저 이동 핸들러
  const onClickMoveUserHandler = box => {
    // alert(`${boxId}move`);

    console.log(box);
    const payload = {
      spaceId,
      toBoxId: box.boxId,
      boxName: box.boxName,
      x: box.x,
      y: box.y,
    };
    dispatch(__editBoxUser(payload));
  };

  return (
    <Stmainspace>
      <StSubHeader>
        {/* space name 부분 */}
        <Row>
          {space?.map(item => {
            if (item && item.floorId !== null)
              return (
                <>
                  <SubTitle key={item.floorId}>{item.floorName}</SubTitle>
                  <SubIcon>&gt;</SubIcon>
                  <SubTitle key={item.spaceId}>{item.spaceName}</SubTitle>
                </>
              );
            if (item && item.floorId === null)
              return (
                <SubTitle key={item.spaceId}>
                  {/* if(item.floorId) */}
                  {item.spaceName}
                  {/* {item.spaceId} */}
                </SubTitle>
              );
          })}
        </Row>
        <Row>
          {role === 'ADMIN' ? (
            <StBtn onClick={() => navi('/adminSpace')}>관리하기</StBtn>
          ) : null}
        </Row>
      </StSubHeader>
      <StBoard>
        {/* 박스 */}
        <div>
          {space?.map(item =>
            item.boxlist?.length > 0
              ? item.boxlist.map(box => {
                  if (box.username !== null)
                    return (
                      <StUseBox
                        key={box.boxId}
                        style={{
                          transform: `translate(${box.x}px, ${box.y}px)`,
                        }}
                        onClick={() => {
                          onClickMoveUserHandler(box);
                        }}
                      >
                        <div>
                          {box.boxName}/{box.boxId}
                        </div>
                        {box.username !== null ? (
                          <StUser>{box.username}</StUser>
                        ) : null}
                        {/* <StUser>{user}</StUser> */}
                      </StUseBox>
                    );
                  if (box.username === null)
                    return (
                      <StBox
                        key={box.boxId}
                        style={{
                          transform: `translate(${box.x}px, ${box.y}px)`,
                        }}
                        onClick={() => {
                          onClickMoveUserHandler(box);
                        }}
                      >
                        <div>
                          {box.boxName}/{box.boxId}
                        </div>
                        {box.username !== null ? (
                          <StUser>{box.username}</StUser>
                        ) : null}
                        {/* <StUser>{user}</StUser> */}
                      </StBox>
                    );
                })
              : null,
          )}
        </div>
        {/* 회의실 */}
        <div>
          {space?.map(item =>
            item.mrlist?.length > 0
              ? item.mrlist.map(mr => (
                  <StMr
                    key={mr.mrId}
                    style={{ transform: `translate(${mr.x}px, ${mr.y}px)` }}
                    onClick={() => navi(`/calender/${mr.mrId}`)}
                  >
                    <div>{mr.mrName}</div>
                  </StMr>
                ))
              : null,
          )}
        </div>
      </StBoard>
    </Stmainspace>
  );
}

export default SpaceBox;
