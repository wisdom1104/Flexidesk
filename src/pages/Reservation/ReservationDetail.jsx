import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  __deleteRervation,
  __getReservationDetail,
} from '../../redux/modules/detail';
import { getCookie } from '../../shared/cookies';
import SchedulesDetail from '../Schedules/SchedulesDetail';
import UserSchedules from '../Schedules/UserSchedules';
import AllReservation from './AllReservation';
import {
  InfoContain,
  InfoBox,
  Info,
  CommentBox,
  DelBtn,
  StSubTitle,
  UserList,
} from './CalendarStyled';
import { useNavigate } from 'react-router-dom';
import { StSmallFont, StSpacePagePhoto } from '../Welcome/WelcomeStyled';
import { StListTitle } from '../../shared/SpaceStyles';
import Page from '../../components/Page';
import Skeleton from '../../components/Skeleton';

function ReservationDetail() {
  const navi = useNavigate();
  const dispatch = useDispatch();
  const { reservationDetail, isLoading, isError } = useSelector(
    state => state.detail,
  );
  const [showSkeleton, setShowSkeleton] = useState(true);

  const deleteHandler = id => {
    dispatch(__deleteRervation(id));
  };

  const token = getCookie('userId');
  // useEffect(() => {
  //   if (token) {
  //     dispatch(__getReservationDetail());
  //     setShowSkeleton(false);
  //   }
  // }, []);

  useEffect(() => {
    if (!token) {
      navi('/');
    } else {
      const loadData = async () => {
        try {
          dispatch(__getReservationDetail());
        } catch (error) {
          console.log(error);
        }
      };

      const timer = setTimeout(() => {
        loadData();
        setShowSkeleton(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <Page>
        <div>
          <StListTitle margin="30px 0px 0px 16px">
            {/* <BackCusor
              onClick={() => {
                navi('/space');
              }}
            >
              ←
            </BackCusor> */}
            <StSpacePagePhoto
              width="52px"
              marginTop
              src={`${process.env.PUBLIC_URL}/img/reservation.png`}
              alt="managementIcon"
            />
            <div>회의실 예약 확인하기</div>
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
                <InfoBox key={item.reservationId}>
                  <StSubTitle margin="1px">{item.username}</StSubTitle>
                  <Info>
                    <CommentBox>
                      <StSmallFont width>회의실 이름</StSmallFont>
                      <StSmallFont width>{item.mrId}</StSmallFont>
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
                        {item.start.split('T')[1]}~{item.end.split('T')[1]}
                      </StSmallFont>
                    </CommentBox>
                    <CommentBox>
                      <StSmallFont width>예약 인원명</StSmallFont>
                      <UserList>
                        {item.userList.map(e => (
                          <StSmallFont width>{e.username}</StSmallFont>
                        ))}
                      </UserList>
                    </CommentBox>
                    <DelBtn onClick={() => deleteHandler(item.reservationId)}>
                      삭제
                    </DelBtn>
                  </Info>
                </InfoBox>
              ))}
            </InfoContain>
          )}
        </div>
      </Page>
      {/* <div>
        <p>전체 조회</p>
        <AllReservation />
      </div> */}
    </>
  );
}

export default ReservationDetail;
