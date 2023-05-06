import React, { useState } from 'react';
import Carousel from '../welcome/Carousel';
import Page from '../../components/Page';
import styled from 'styled-components';
import Text from '../../components/Text';

function Welcome5() {
  return (
    <>
      <Page h="2600px">
        <Text shape="T48_700">
          <br />
        </Text>
      </Page>

      <StBackground>
        <Text shape="T48_700" ta="center">
          Flexidesk는 회사생활을 <br /> 어떻게 쉽게 만들어주나요?
        </Text>
        <Carousel />
      </StBackground>
    </>
  );
}

export default Welcome5;

const StBackground = styled.div`
  background: ${props => props.background || '#DEF1EF'};
  height: 100%;
  padding: 100px;
`;
