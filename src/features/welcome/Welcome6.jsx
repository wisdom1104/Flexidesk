import React from 'react';
import { Column } from '../../components/Flex';
import Page from '../../components/Page';
import Text from '../../components/Text';
import { Pointer } from '../../styles/etc';

function Welcome6() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };
  return (
    <Page h="94vh">
      <Column>
        <Pointer>
          <Text shape="T64_900" ta="center" mt="150px" onClick={scrollToTop}>
            간단한 회원가입으로 <br /> Flexidesk의 솔루션 만나보세요.
          </Text>
        </Pointer>

        <img
          src={`${process.env.PUBLIC_URL}/img/welcome3.png`}
          alt="welcome3"
        />
      </Column>
    </Page>
  );
}

export default Welcome6;
