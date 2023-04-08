import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { __getSpace } from '../../redux/modules/spaceSlice';

function SpaceBox({ spaceId, selectedSpace }) {
  const dispatch = useDispatch();
  const { space } = useSelector(state => state.space);

  useEffect(() => {
    dispatch(__getSpace(spaceId));
    // console.log(space);
  }, [selectedSpace]);

  return (
    <>
      {space?.map(item => {
        if (item)
          return (
            <span style={{ margin: '10px' }} key={item.spaceId}>
              {item.spaceName}
            </span>
          );
      })}
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

const StDropBox = styled.div`
  background: #c0a55c;
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
`;
const StDropMr = styled.div`
  background: #c478a4;
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
`;

const StBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #867395;
  width: 700px;
  height: 700px;
  margin: 10px;
  position: relative;
  overflow: hidden;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
