import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Page from '../components/Page';
import Text from '../components/Text';
import { Column } from '../components/Flex';
import { Pointer } from '../styles/etc';

function NotFound() {
  const navi = useNavigate();
  return (
    <Page>
      <Column>
        <StImageSize
          src={`${process.env.PUBLIC_URL}/img/stop2.png`}
          alt="stop2"
        />
        <br />
        <Pointer>
          <Text shape="T28_700" ta="center" onClick={() => navi('/')}>
            해당 페이지를 찾지 못했습니다. <br />
            주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.
          </Text>
        </Pointer>
      </Column>
    </Page>
  );
}

export default NotFound;

const StImageSize = styled.img`
  width: 35%;
  height: auto;
  margin: 0 auto;
  margin-top: 15%;
  margin-bottom: 5%;
`;
