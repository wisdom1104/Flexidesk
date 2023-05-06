import React from 'react';
import { useNavigate } from 'react-router-dom';
import Welcome2 from './Welcome2';
import { getCookie } from '../../shared/cookies';
import Page from '../../components/Page';
import { Column, Row } from '../../components/Flex';
import Text from '../../components/Text';
import { GradationBtn } from '../../styles/etc';
import { WelcomeImage, WelcomeTitle } from '../../components/Image';
import styled from 'styled-components';

function Welcome1() {
  const navi = useNavigate();
  const token = getCookie('token');

  return (
    <StGradationBg>
      <Page>
        <WelcomeTitle w="45vw" h="35vh">
          <Column>
            <Text shape="T64_900" mt="30%">
              스마트해진 업무공간, <br />
              보다 생산적인 업무시간
            </Text>
            <Text shape="T20_500_30" mt="10%">
              Flexidesk는 효율적인 자율 좌석제 운영을 위한 업무 위치 선택 및
              <br />
              회의실 예약 시스템을 제공합니다
            </Text>
            {!token ? (
              <Row mt="10%" gap="10px">
                <GradationBtn
                  onClick={() => {
                    navi('/signupuser');
                  }}
                >
                  일반 회원가입
                </GradationBtn>
                <GradationBtn
                  onClick={() => {
                    navi('/signup');
                  }}
                >
                  관리자 회원가입
                </GradationBtn>
              </Row>
            ) : null}
          </Column>
        </WelcomeTitle>

        {/* 이미지 자리 */}
        <WelcomeImage src="welcome1" alt="welcome1" />
      </Page>
      <Welcome2 />
    </StGradationBg>
  );
}

export default Welcome1;

const StGradationBg = styled.div`
  background: linear-gradient(180deg, #ffffff 0%, #def1ef 100%);
  height: 155vh;
`;
