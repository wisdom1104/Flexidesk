import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../shared/cookies';
import { StSubHeader, SubIcon, SubTitle } from '../../pages/space/SpaceStyles';
import { Row } from '../../components/Flex';
import Text from '../../components/Text';
import MainMintBtn from '../../components/button/MainMintBtn';

function SpaceSubHeader({ space }) {
  const navi = useNavigate();
  const role = getCookie('role');
  return (
    <StSubHeader>
      <Row>
        {space?.map(item => (
          <>
            {item && item.floorId !== null && (
              <Row key={item.floorId}>
                <SubTitle key={item.floorId}>
                  <Text shape="T16_600">{item.floorName}</Text>
                </SubTitle>
                <SubIcon>&gt;</SubIcon>
                <SubTitle key={item.spaceId}>
                  <Text shape="T16_600">{item.spaceName}</Text>
                </SubTitle>
              </Row>
            )}
            {item && item.floorId === null && (
              <SubTitle key={item.spaceId}>
                <Text shape="T16_600">{item.spaceName}</Text>
              </SubTitle>
            )}
          </>
        ))}
      </Row>
      <Row>
        {(role === 'ADMIN' || role === 'MANAGER') && (
          <MainMintBtn
            mg="0px 16px"
            h="43px"
            pd="8px 16px"
            onClick={() => navi('/adminSpace')}
          >
            <Text shape="T16_600" color="var(--white)">
              관리하기
            </Text>
          </MainMintBtn>
        )}
      </Row>
    </StSubHeader>
  );
}

export default SpaceSubHeader;
