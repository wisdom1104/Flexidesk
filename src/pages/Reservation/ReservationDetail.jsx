import React from 'react';
import { useSelector } from 'react-redux';
import { __getReservationDetail } from '../../redux/modules/detail';
import { getCookie } from '../../shared/cookies';
import { useSkltDsptTimeout } from '../../hooks/useTimeoutHook';
import Page from '../../components/Page';
import Skeleton from '../../components/Skeleton';
import {
  InfoContain,
  InfoBox,
  Info,
  CommentBox,
  StSubTitle,
  UserList,
  StSmall,
} from './CalendarStyled';
import { StSmallFont } from '../welcome/WelcomeStyled';

import ReservationDelete from '../../features/reservation/ReservationDelete';
import IconTitle from '../../components/IconTitle';
import Text from '../../components/Text';
function ReservationDetail() {
  const { reservationDetail, isError } = useSelector(state => state.detail);

  const token = getCookie('userId');
  const dispatchValue = __getReservationDetail();
  const { showSkeleton } = useSkltDsptTimeout(token, dispatchValue);

  return (
    <>
      <Page>
        <div>
          <IconTitle margin="30px 0px 0px 16px" src="reservation">
            <Text shape="T28_700_34">회의실 예약현황</Text>
          </IconTitle>

          {showSkeleton ? (
            <InfoContain>
              <Skeleton />
            </InfoContain>
          ) : isError ? (
            <div>에러발생 ..⚙️</div>
          ) : (
            <InfoContain>
              {reservationDetail?.map(item => (
                <InfoBox height="350px" key={item.reservationId}>
                  <StSubTitle margin="1px">{item.username}</StSubTitle>
                  <Info>
                    <CommentBox>
                      <StSmallFont width>회의실 이름</StSmallFont>
                      <StSmallFont width>{item.mrName}</StSmallFont>
                    </CommentBox>

                    <CommentBox>
                      <StSmallFont width>예약날짜</StSmallFont>
                      <StSmallFont width>
                        {item.start.split('T')[0]}
                      </StSmallFont>
                    </CommentBox>
                    <CommentBox>
                      <StSmallFont width>회의 시간</StSmallFont>
                      <StSmallFont width>
                        {item.start.split('T')[1]} ~ {item.end.split('T')[1]}
                      </StSmallFont>
                    </CommentBox>
                    <CommentBox>
                      <StSmallFont width>예약 인원</StSmallFont>
                      <UserList width="120px" height="30px" border="none">
                        {item.userList.map(e => (
                          <StSmall>{e.username}</StSmall>
                        ))}
                      </UserList>
                    </CommentBox>
                    <ReservationDelete reservationId={item.reservationId} />
                  </Info>
                </InfoBox>
              ))}
            </InfoContain>
          )}
        </div>
      </Page>
    </>
  );
}

export default ReservationDetail;
