import React from 'react';
import { StBox } from '../../shared/SpaceStyles';
import Text from '../../components/Text';

function SpaceBoxItem({ box, onClickMoveUserHandler, isClicked }) {
  return (
    <>
      {box.username !== null ? (
        <StBox
          key={box.boxId}
          id={box.boxId}
          onClick={() => {
            onClickMoveUserHandler(box);
          }}
          transformValue={`translate(${box.x}px, ${box.y}px)`}
          background={isClicked === box.boxId ? '#07133b' : '#def1ef'}
          color={isClicked === box.boxId ? '#8b93a6' : '#65bab6'}
        >
          <Text shape="T16_600" color="var(--mint_002)" ta="center">
            {box.boxName}
          </Text>
          <Text shape="T12_400" color="var(--grey_002)" ta="center">
            {box.username}
          </Text>
        </StBox>
      ) : (
        <StBox
          key={box.boxId}
          id={box.boxId}
          onClick={() => {
            onClickMoveUserHandler(box);
          }}
          transformValue={`translate(${box.x}px, ${box.y}px)`}
          background={isClicked === box.boxId && '#07133b'}
          color={isClicked === box.boxId && '#8b93a6'}
        >
          <Text shape="T16_600" color="var(--grey_002)" ta="center">
            {box.boxName}
          </Text>
        </StBox>
      )}
    </>
  );
}

export default SpaceBoxItem;
