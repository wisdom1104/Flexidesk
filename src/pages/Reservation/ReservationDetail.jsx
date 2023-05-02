import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getReservationDetail } from '../../redux/modules/detail';
import { getCookie } from '../../shared/cookies';
import {
  InfoContain,
  InfoBox,
  Info,
  CommentBox,
  StSubTitle,
  UserList,
  StSmall,
} from './CalendarStyled';

import { useNavigate } from 'react-router-dom';
import { StSmallFont, StSpacePagePhoto } from '../Welcome/WelcomeStyled';
import { StListTitle } from '../../shared/SpaceStyles';
import Page from '../../components/Page';
import Skeleton from '../../components/Skeleton';

import ReservationDelete from '../../features/Reservation/ReservationDelete';
import { useSkltDsptTimeout } from '../../hooks/useTimeoutHook';

function ReservationDetail() {
  // const navi = useNavigate();
  // const dispatch = useDispatch();
  const { reservationDetail, isError } = useSelector(state => state.detail);
  // const [showSkeleton, setShowSkeleton] = useState(true);

  const token = getCookie('userId');
  const dispatchValue = __getReservationDetail();
  const {showSkeleton} = useSkltDsptTimeout(token,dispatchValue)

  // useEffect(() => {
  //   if (!token) {
  //     navi('/');
  //   } else {
  //     const loadData = async () => {
  //       try {
  //         dispatch(__getReservationDetail());
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     const timer = setTimeout(() => {
  //       loadData();
  //       setShowSkeleton(false);
  //     }, 300);
  //     return () => clearTimeout(timer);
  //   }
  // }, []);

  return (
    <>
      <Page>
        <div>
          <StListTitle margin="30px 0px 0px 16px">
            <StSpacePagePhoto
              width="52px"
              marginTop
              src={`${process.env.PUBLIC_URL}/img/reservation.png`}
              alt="managementIcon"
            />
            <div>회의실 예약현황</div>
          </StListTitle>

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
