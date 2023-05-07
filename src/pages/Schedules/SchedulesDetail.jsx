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
import { StListTitle } from '../../pages/space/SpaceStyles';
import SchedulesDelete from '../../features/schedules/SchedulesDelete';
import IconTitle from '../../components/IconTitle';
import Text from '../../components/Text';
import SubMintBtn from '../../components/button/SubMintBtn';
import { CardInfo } from '../../components/CardInfo';
import { Card } from '../../components/Card';

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
              <Card key={item.scId} value={item.scTitle} height="300px">
                <CardInfo color="var(--grey_002)" value={item.scComment}>
                  내용
                </CardInfo>
                <CardInfo
                  color="var(--grey_002)"
                  value={item.scStart.split('T')[0]}
                >
                  날짜
                </CardInfo>
                <CardInfo
                  color="var(--grey_002)"
                  value={item.scStart.split('T')[1]}
                >
                  시작시간
                </CardInfo>
                <CardInfo
                  color="var(--grey_002)"
                  value={item.scEnd.split('T')[1]}
                >
                  종료시간
                </CardInfo>
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
              </Card>
            ))}
          </InfoContain>
        )}
      </div>
    </Page>
  );
}

export default SchedulesDetail;
