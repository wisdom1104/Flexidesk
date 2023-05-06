import React from 'react';
import Page from '../../components/Page';
import { WelcomeImage, WelcomeTitle } from '../../components/Image';
import { Column } from '../../components/Flex';
import Text from '../../components/Text';
import styled from 'styled-components';

function Welcome3() {
  return (
    <>
      <StBackground>
        <Page>
          <WelcomeTitle>
            <Column>
              <Text shape="T28_700" color="var(--mint_001)" mt="20%">
                업무 트렌드
              </Text>
              <Text shape="T64_900" mt="10%">
                자율 좌석제
              </Text>
              <Text shape="T20_600" color="rgba(49, 69, 99, 0.8)" mt="10%">
                팀이나 직급에 따라 자리를 배치해 독자적이고 수직적이었던
                <br />
                사무실 분위기가 자율좌석제 도입으로 <br />
                상호보완적이고, 수평적인 분위기로 변화합니다.
              </Text>
            </Column>
          </WelcomeTitle>

          {/* 이미지 자리 */}
          <WelcomeImage src="welcome2" alt="welcome2" />
        </Page>
      </StBackground>
    </>
  );
}

export default Welcome3;

const StBackground = styled.div`
  background: ${props => props.background || '#DEF1EF'};
  height: 100vh;
`;
