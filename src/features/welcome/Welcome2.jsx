import React from 'react';
import Page from '../../components/Page';
import Text from '../../components/Text';
import { Column } from '../../components/Flex';

function Welcome2() {
  return (
    <Page>
      <Column>
        <Text shape="T64_800" mt="20%">
          이런 고민을 하고 있다면, <br /> Flexidesk를 시작하세요!
        </Text>
        <Text shape="T20_600" color="#314563" mt="10%" ta="center">
          내가 일할 자리 내가 자유롭게 정하고 싶다.
        </Text>
        <Text shape="T20_600" color="rgba(49, 69, 99, 0.8)" ta="center">
          회의실 사용 겹치지 않도록 미리 예약하고 싶다.
        </Text>
        <Text shape="T20_600" color="rgba(49, 69, 99, 0.6)" ta="center">
          내 스케줄을 다른 사람들과 쉽게 공유하고 싶다.
        </Text>
      </Column>
    </Page>
  );
}
export default Welcome2;
