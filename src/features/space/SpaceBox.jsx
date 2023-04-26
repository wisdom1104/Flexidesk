import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getSpace } from '../../redux/modules/spaceSlice';
import { useNavigate } from 'react-router-dom';
import { cookies } from '../../shared/cookies';
import { __editBoxUser } from '../../redux/modules/spaceBoxSlice';
import {
  ListDot,
  MoveModal,
  MoveModalBackground,
  MoveModalErrorbtn,
  MoveModalItem,
  MoveModalList,
  MoveModalSubTitle,
  MoveModalSubbtn,
  MoveModalTitle,
  MoveModalbtn,
  StBoard,
  StBox,
  StBtn,
  StSubHeader,
  Stmainspace,
  SubIcon,
  SubTitle,
} from '../../shared/SpaceStyles';
import { Row } from '../../components/Flex';
import SpaceBoxItem from './SpaceBoxItem';
import SpaceUesrItem from './SpaceUesrItem';
import SpaceMultiUesrItem from './SpaceMultiUesrItem';
import SpaceMultiBoxItem from './SpaceMultiBoxItem';
import SpaceMrItem from './SpaceMrItem';

function SpaceBox({ spaceId, selectedSpace }) {
  const dispatch = useDispatch();
  const navi = useNavigate();

  // 관리자 가드
  const role = cookies.get('role');

  const { space } = useSelector(state => state.space);
  console.log('space', space);

  useEffect(() => {
    dispatch(__getSpace(spaceId));
  }, [selectedSpace]);

  //유저 이동 핸들러
  const [moveBox, setMoveBox] = useState(null);
  const [isModal, setIsModal] = useState(false);
  const [isMultiModal, setIsMultiModal] = useState(false);
  const [isClicked, setClicked] = useState(null);

  const onClickMoveUserHandler = box => {
    setIsModal(!isModal);
    setMoveBox(box);
    setClicked(box.boxId);
  };
  const onClickMoveMultiHandler = multiBox => {
    setIsMultiModal(!isMultiModal);
    setMoveBox(multiBox);
    setClicked(multiBox.multiBoxId);
  };
  const MoveUser = moveBox => {
    const payload = {
      spaceId,
      locationId: moveBox.boxId,
      boxName: moveBox.boxName,
      x: moveBox.x,
      y: moveBox.y,
    };
    dispatch(__editBoxUser(payload));
    setIsModal(!isModal);
    setClicked(null);
  };
  const MoveMultiUser = moveBox => {
    const payload = {
      spaceId,
      locationId: moveBox.multiBoxId,
      boxName: moveBox.boxName,
      x: moveBox.x,
      y: moveBox.y,
    };
    dispatch(__editBoxUser(payload));
    setIsMultiModal(!isMultiModal);
    setClicked(null);
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
      {/* space board 부분 */}
      <StBoard>
        {moveBox !== null && isModal ? (
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
                      setClicked(null);
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
                      setClicked(null);
                    }}
                  >
                    다른 자리 찾기
                  </MoveModalErrorbtn>
                </MoveModal>
              </MoveModalBackground>
            )}
          </>
        ) : null}
        {moveBox !== null && isMultiModal ? (
          <>
            <MoveModalBackground>
              <MoveModal height="280px">
                <MoveModalSubTitle>자리선택</MoveModalSubTitle>
                <MoveModalTitle>
                  {moveBox.multiBoxName}
                  <br />
                  선택하시겠습니까?
                </MoveModalTitle>
                <MoveModalList>
                  <MoveModalItem>현재 인원</MoveModalItem>
                  {moveBox.userlist.map(user => (
                    <MoveModalItem>
                      <ListDot />
                      <div>{user.username}</div>
                    </MoveModalItem>
                  ))}
                </MoveModalList>
                <MoveModalbtn
                  onClick={() => {
                    MoveMultiUser(moveBox);
                  }}
                  top="227px"
                >
                  예
                </MoveModalbtn>
                <MoveModalSubbtn
                  onClick={() => {
                    setIsMultiModal(!isMultiModal);
                    setClicked(null);
                  }}
                  top="227px"
                >
                  아니요
                </MoveModalSubbtn>
              </MoveModal>
            </MoveModalBackground>
          </>
        ) : null}
        {/* 박스 */}
        {space?.map(item =>
          item.boxList?.length > 0
            ? item.boxList.map(box => {
                if (box.username !== null)
                  return (
                    <SpaceUesrItem
                      key={box.boxId}
                      box={box}
                      onClickMoveUserHandler={onClickMoveUserHandler}
                      isClicked={isClicked}
                    />
                  );
                if (box.username === null)
                  return (
                    <SpaceBoxItem
                      key={box.boxId}
                      box={box}
                      onClickMoveUserHandler={onClickMoveUserHandler}
                      isClicked={isClicked}
                    />
                  );
              })
            : null,
        )}
        {/* 회의실 */}
        {space?.map(item =>
          item.mrList?.length > 0
            ? item.mrList.map(mr => <SpaceMrItem mr={mr} navi={navi} />)
            : null,
        )}
        {/* 공용공간 */}
        {space?.map(item =>
          item.multiBoxList?.length > 0
            ? item.multiBoxList.map(multiBox => {
                if (multiBox.userlist.length > 0)
                  return (
                    <SpaceMultiUesrItem
                      key={multiBox.multiBoxId}
                      multiBox={multiBox}
                      onClickMoveUserHandler={onClickMoveMultiHandler}
                      isClicked={isClicked}
                    />
                  );
                if (multiBox.userlist.length === 0)
                  return (
                    <SpaceMultiBoxItem
                      key={multiBox.multiBoxId}
                      multiBox={multiBox}
                      onClickMoveUserHandler={onClickMoveMultiHandler}
                      isClicked={isClicked}
                    />
                  );
              })
            : null,
        )}
      </StBoard>
    </Stmainspace>
  );
}

export default SpaceBox;
