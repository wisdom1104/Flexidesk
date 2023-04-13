import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getSpace } from '../../redux/modules/spaceSlice';
import {
  StBoard,
  StBtn,
  StDropBox,
  StDropMr,
} from '../../pages/space/AdminSpace';
import { StSubHeader } from './AdminSpaceBox';
import { useNavigate } from 'react-router-dom';
import { cookies } from '../../shared/cookies';
import styled from 'styled-components';
import { __editBox, __editBoxUser } from '../../redux/modules/spaceBoxSlice';

function SpaceBox({ spaceId, selectedSpace }) {
  const dispatch = useDispatch();
  const navi = useNavigate();

  // 관리자 가드
  const token = cookies.get('role');

  const { space } = useSelector(state => state.space);

  useEffect(() => {
    dispatch(__getSpace(spaceId));
    // console.log(space);
  }, [selectedSpace]);

  const [user, setUser] = useState('테스트');

  const onClickMoveUserHandler = box => {
    // alert(`${boxId}move`);
    // setUser('테스트');
    console.log(box);
    const payload = {
      fromBoxId: 46,
      toBoxId: 46,
      spaceId,
      boxId: box.boxId,
      boxName: box.boxName,
      username: '테스트',
      x: box.x,
      y: box.y,
    };
    dispatch(__editBoxUser(payload));
  };

  return (
    <>
      <StSubHeader>
        {space?.map(item => {
          if (item)
            return (
              <span style={{ margin: '10px' }} key={item.spaceId}>
                {item.spaceName}
              </span>
            );
        })}
        {token === 'ADMIN' ? (
          <StBtn>
            <button onClick={() => navi('/adminSpace')}>Space 관리</button>
          </StBtn>
        ) : null}
      </StSubHeader>
      <StBoard>
        {/* 박스 */}
        <div>
          {space?.map(item =>
            item.boxlist?.length > 0
              ? item.boxlist.map(box => (
                  <StBox
                    key={box.boxId}
                    style={{ transform: `translate(${box.x}px, ${box.y}px)` }}
                    onClick={() => {
                      onClickMoveUserHandler(box);
                    }}
                  >
                    <div>{box.boxName}</div>
                    {box.username !== null ? (
                      <StUser>{box.username}</StUser>
                    ) : null}
                    {/* <StUser>{user}</StUser> */}
                  </StBox>
                ))
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
    </>
  );
}

export default SpaceBox;

export const StMr = styled.div`
  //글자
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #8b93a6;
  //박스
  position: absolute;
  background: #f1f2f4;
  border: 1px solid #8b93a6;
  border-radius: 4px;
  width: 90px;
  height: 90px;

  margin: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  &:hover {
    background: #c478a4;
  }
`;

export const StBox = styled.div`
  background: #f0ce73;
  width: 100px;
  height: 100px;
  margin: 10px;
  cursor: pointer;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  &:hover {
    background: #c0a55c;
  }
`;

export const StUser = styled.div`
  background-color: #799ebc;
  padding: 10px;
  border-radius: 10px;
`;
