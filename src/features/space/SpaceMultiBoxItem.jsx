import React from 'react';
import { StBox } from '../../shared/SpaceStyles';
import Text from '../../components/Text';

function SpaceMultiBoxItem({ multiBox, onClickMoveUserHandler, isClicked }) {
  return (
    <>
      {multiBox.userlist.length > 0 ? (
        <StBox
          key={multiBox.multiBoxId}
          id={multiBox.multiBoxId}
          onClick={() => {
            onClickMoveUserHandler(multiBox);
          }}
          transformValue={`translate(${multiBox.x}px, ${multiBox.y}px)`}
          background={isClicked === multiBox.multiBoxId ? '#07133b' : '#def1ef'}
          color={isClicked === multiBox.multiBoxId ? '#8b93a6' : '#65bab6'}
        >
          <Text shape="T16_600" color="var(--mint_002)" ta="center">
            {multiBox.multiBoxName}
          </Text>
          <Text shape="T12_400" color="var(--grey_002)" ta="center">
            {multiBox.userlist.length}명
          </Text>
        </StBox>
      ) : (
        <StBox
          key={multiBox.multiBoxId}
          id={multiBox.multiBoxId}
          onClick={() => {
            onClickMoveUserHandler(multiBox);
          }}
          transformValue={`translate(${multiBox.x}px, ${multiBox.y}px)`}
          background={isClicked === multiBox.multiBoxId && '#07133b'}
          color={isClicked === multiBox.multiBoxId && '#8b93a6'}
        >
          <Text shape="T16_600" color="var(--grey_002)" ta="center">
            {multiBox.multiBoxName}
          </Text>
        </StBox>
      )}
    </>
  );
}

export default SpaceMultiBoxItem;
