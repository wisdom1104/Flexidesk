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
                  <StDropBox
                    key={box.boxId}
                    style={{ transform: `translate(${box.x}px, ${box.y}px)` }}
                  >
                    <div>{box.boxName}</div>
                  </StDropBox>
                ))
              : null,
          )}
        </div>
        <div>
          {space?.map(item =>
            item.mrlist?.length > 0
              ? item.mrlist.map(mr => (
                  <StDropMr
                    key={mr.mrId}
                    style={{ transform: `translate(${mr.x}px, ${mr.y}px)` }}
                    onClick={() => navi(`/calender/${mr.mrId}`)}
                  >
                    <div>{mr.mrName}</div>
                  </StDropMr>
                ))
              : null,
          )}
        </div>
      </StBoard>
    </>
  );
}

export default SpaceBox;
