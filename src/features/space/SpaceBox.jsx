import React, { useEffect } from 'react';
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
        <div>
          {space?.map(item =>
            item.boxlist?.length > 0
              ? item.boxlist.map(box => (
                  <StBox
                    key={box.boxId}
                    style={{ transform: `translate(${box.x}px, ${box.y}px)` }}
                  >
                    <div>{box.boxName}</div>
                  </StBox>
                ))
              : null,
          )}
        </div>
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
  background: #dd92be;
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
