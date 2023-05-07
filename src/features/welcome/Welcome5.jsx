import React from 'react';
import Carousel from '../welcome/Carousel';
import Page from '../../components/Page';
import Text from '../../components/Text';
import { StBackground } from '../../pages/welcome/WelcomeStyled';

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
