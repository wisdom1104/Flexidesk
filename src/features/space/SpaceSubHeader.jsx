import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../shared/cookies';
import {
  StBtn,
  StSubHeader,
  SubIcon,
  SubTitle,
} from '../../shared/SpaceStyles';
import { Row } from '../../components/Flex';

function SpaceSubHeader({ space }) {
  const navi = useNavigate();
  const role = getCookie('role');
  return (
    <StSubHeader>
      {/* space name 부분 */}
      <Row>
        {space?.map(item => {
          if (item && item.floorId !== null)
            return (
              <Row key={item.floorId}>
                <SubTitle key={item.floorId}>{item.floorName}</SubTitle>
                <SubIcon>&gt;</SubIcon>
                <SubTitle key={item.spaceId}>{item.spaceName}</SubTitle>
              </Row>
            );
          if (item && item.floorId === null)
            return <SubTitle key={item.spaceId}>{item.spaceName}</SubTitle>;
        })}
      </Row>
      <Row>
        {role === 'ADMIN' || role === 'MANAGER' ? (
          <StBtn onClick={() => navi('/adminSpace')}>관리하기</StBtn>
        ) : null}
      </Row>
    </StSubHeader>
  );
}

export default SpaceSubHeader;
