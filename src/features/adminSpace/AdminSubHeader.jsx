import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Row } from '../../components/Flex';
import { StSubHeader, SubIcon, SubTitle } from '../../shared/SpaceStyles';
import SubMintBtn from '../../components/button/SubMintBtn';
import Text from '../../components/Text';
import MainMintBtn from '../../components/button/MainMintBtn';

function AdminSubHeader({ space, isModal, setIsModal }) {
  const navi = useNavigate();

  return (
    <StSubHeader>
      <Row>
        {space?.map(item => (
          <>
            {item && item.floorId !== null && (
              <Row key={item.spaceId}>
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
        <SubMintBtn
          h="43px"
          pd="8px 16px"
          onClick={() => {
            setIsModal(!isModal);
          }}
        >
          <Text shape="T16_600" color="var(--mint_002)">
            스페이스 관리하기
          </Text>
        </SubMintBtn>
        <MainMintBtn
          mg="0px 16px"
          h="43px"
          pd="8px 16px"
          onClick={() => navi('/space')}
        >
          <Text shape="T16_600" color="var(--white)">
            완료
          </Text>
        </MainMintBtn>
      </Row>
    </StSubHeader>
  );
}

export default AdminSubHeader;
