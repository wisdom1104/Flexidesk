import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Page from '../components/Page';
import Text from '../components/Text';
import { Column } from '../components/Flex';
import { Pointer } from '../styles/etc';

function Access() {
  const navi = useNavigate();
  return (
    <Page>
      <Column>
        <StImageSize
          src={`${process.env.PUBLIC_URL}/img/stop1.png`}
          alt="stop1"
        />
        <Text shape="T28_700" ta="center" onClick={() => navi('/space')}>
          <Pointer> 권한이 없습니다.</Pointer>
        </Text>
      </Column>
    </Page>
  );
}

export default Access;

const StImageSize = styled.img`
  width: 35%;
  height: auto;
  margin: 0 auto;
  margin-top: 25%;
  margin-bottom: 5%;
`;
