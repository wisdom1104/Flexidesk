import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../shared/cookies';
import { __getAllSchedules } from '../../redux/modules/schedules';
import { useSkltDsptTimeout } from '../../hooks/useTimeoutHook';
import Skeleton from '../../components/Skeleton';
import Page from '../../components/Page';
import {
  InfoBox,
  InfoContain,
  Info,
  CommentBox,
  PathBtn,
  StSubTitle,
  ButtonContain,
} from '../reservation/CalendarStyled';
import { StSmallFont, StSpacePagePhoto } from '../welcome/WelcomeStyled';
import { StListTitle } from '../../shared/SpaceStyles';
import SchedulesDelete from '../../features/schedules/SchedulesDelete';
import IconTitle from '../../components/IconTitle';
import Text from '../../components/Text';
import SubMintBtn from '../../components/button/SubMintBtn';

function SchedulesDetail() {
  const navi = useNavigate();
  const { userSchedules, isError } = useSelector(state => state.schedules);
  const token = getCookie('userId');
  const dispatchValue = __getAllSchedules();
  const { showSkeleton } = useSkltDsptTimeout(token, dispatchValue);

  return (
    <Page>
      <div>
        <IconTitle margin="30px 0px 0px 16px" src="schedule">
          <Text shape="T28_700_34">스케줄 조회</Text>
        </IconTitle>
        {showSkeleton ? (
          <InfoContain>
            <Skeleton />
          </InfoContain>
        ) : isError ? (
          <div>에러발생 ..⚙️</div>
        ) : (
          <InfoContain>
            {userSchedules?.map(item => (
              <InfoBox key={item.scId} height="350px">
                <StSubTitle>{item.scTitle}</StSubTitle>
                <Info>
                  <CommentBox>
                    <StSmallFont width>내용</StSmallFont>
                    <StSmallFont width>{item.scComment}</StSmallFont>
                  </CommentBox>
                  <CommentBox>
                    <StSmallFont width>날짜</StSmallFont>
                    <StSmallFont width>
                      {item.scStart.split('T')[0]}
                    </StSmallFont>
                  </CommentBox>
                  <CommentBox>
                    <StSmallFont width>시작시간</StSmallFont>
                    <StSmallFont width>
                      {item.scStart.split('T')[1]}
                    </StSmallFont>
                  </CommentBox>
                  <CommentBox>
                    <StSmallFont width>종료시간</StSmallFont>
                    <StSmallFont width>{item.scEnd.split('T')[1]}</StSmallFont>
                  </CommentBox>
                  <ButtonContain>
                    <SubMintBtn
                      w="50px"
                      h="32px"
                      mg="5px 10px"
                      onClick={() => {
                        navi(`/pathschedules/${item.scId}`, {
                          state: { ...item },
                        });
                      }}
                    >
                      <Text shape="T14_700_17" color="var(--mint_002)">
                        수정
                      </Text>
                    </SubMintBtn>
                    <SchedulesDelete scId={item.scId} />
                  </ButtonContain>
                </Info>
              </InfoBox>
            ))}
          </InfoContain>
        )}
      </div>
    </Page>
  );
}

export default SchedulesDetail;
