import React from 'react';
import Page from '../../components/Page';
import Text from '../../components/Text';
import { Column } from '../../components/Flex';
import { Images, WelcomeTitle } from '../../components/Image';

function Welcome4() {
  return (
    <Page>
      <Column>
        <Text
          shape="T64_800"
          color="var(--buttonGradation)"
          ta="center"
          mt="10%"
        >
          이제, 새로운 Flexidesk를 <br /> 시작할 시간입니다.
        </Text>
        <WelcomeTitle>
          <Text shape="T28_700" color="var(--mint_001)" mt="10%">
            스페이스
          </Text>
          <Text shape="T48_700" mt="5%">
            업무 공간 이동
          </Text>
          <Text shape="T20_600" color="rgba(49, 69, 99, 0.8)" mt="5%">
            회사 내에서도 나에게 맞는 공간을 찾아봐요
          </Text>
        </WelcomeTitle>
        <Images
          src_001="page1"
          alt_001="page1"
          src_002="pageIcon1"
          alt_002="pageIcon1"
        />

        <WelcomeTitle>
          <Text shape="T28_700" color="var(--mint_001)" mt="10%">
            회의실 예약
          </Text>
          <Text shape="T48_700" mt="5%">
            간편해진 회의실 예약
          </Text>
          <Text shape="T20_600" color="rgba(49, 69, 99, 0.8)" mt="5%">
            겹치는 시간은 피하고, 가능한 시간은 찾아줘요
          </Text>
        </WelcomeTitle>
        <Images
          src_001="page2"
          alt_001="page2"
          src_002="pageIcon2"
          alt_002="pageIcon2"
        />

        <WelcomeTitle>
          <Text shape="T28_700" color="var(--mint_001)" mt="10%">
            스케줄
          </Text>
          <Text shape="T48_700" mt="5%">
            내 스케줄 관리도 한번에
          </Text>
          <Text shape="T20_600" color="rgba(49, 69, 99, 0.8)" mt="5%">
            근무 일정과 연동되는 스케줄
          </Text>
        </WelcomeTitle>
        <Images
          src_001="page3"
          alt_001="page3"
          src_002="pageIcon3"
          alt_002="pageIcon3"
        />
      </Column>
    </Page>
  );
}

export default Welcome4;
