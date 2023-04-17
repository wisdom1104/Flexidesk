import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getSpace } from '../../redux/modules/spaceSlice';
import { useNavigate } from 'react-router-dom';
import { cookies } from '../../shared/cookies';
import { __editBox, __editBoxUser } from '../../redux/modules/spaceBoxSlice';
import {
  MoveModal,
  MoveModalBackground,
  MoveModalErrorbtn,
  MoveModalSubTitle,
  MoveModalSubbtn,
  MoveModalTitle,
  MoveModalbtn,
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
  const [moveBox, setMoveBox] = useState(null);

  const onClickMoveUserHandler = box => {
    setIsModal(!isModal);
    setMoveBox(box);
  };
  const MoveUser = moveBox => {
    const payload = {
      spaceId,
      toBoxId: moveBox.boxId,
      boxName: moveBox.boxName,
      x: moveBox.x,
      y: moveBox.y,
    };
    dispatch(__editBoxUser(payload));
    setIsModal(!isModal);
  };

  const [isModal, setIsModal] = useState(false);

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
        {moveBox !== null && !isModal ? (
          <>
            {moveBox.username === null ? (
              <MoveModalBackground>
                <MoveModal>
                  <MoveModalSubTitle>자리선택</MoveModalSubTitle>
                  <MoveModalTitle>
                    {moveBox.boxName}
                    <br />
                    선택하시겠습니까?
                  </MoveModalTitle>
                  <MoveModalbtn
                    onClick={() => {
                      MoveUser(moveBox);
                    }}
                  >
                    예
                  </MoveModalbtn>
                  <MoveModalSubbtn
                    onClick={() => {
                      setIsModal(!isModal);
                    }}
                  >
                    아니요
                  </MoveModalSubbtn>
                </MoveModal>
              </MoveModalBackground>
            ) : (
              <MoveModalBackground>
                <MoveModal>
                  <MoveModalSubTitle>자리선택</MoveModalSubTitle>
                  <MoveModalTitle>
                    {moveBox.boxName}
                    <br />
                    이미 <span style={{ color: '#FF5454' }}>사용중</span>입니다.
                  </MoveModalTitle>
                  <MoveModalErrorbtn
                    onClick={() => {
                      setIsModal(!isModal);
                    }}
                  >
                    다른 자리 찾기
                  </MoveModalErrorbtn>
                </MoveModal>
              </MoveModalBackground>
            )}
          </>
        ) : null}
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
