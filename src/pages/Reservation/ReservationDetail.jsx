import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  __deleteRervation,
  __getReservationDetail,
} from '../../redux/modules/detail';
import { getCookie } from '../../shared/cookies';
import SchedulesDetail from '../Schedules/SchedulesDetail';
import UserSchedules from '../Schedules/UserSchedules';
import useFalseHook from '../../hooks/useFalseHook';
import AllReservation from './AllReservation';
import {
  BackCusor,
  InfoContain,
  ReservationTitle,
  InfoBox,
  Info,
  CommentBox,
  DelBtn,
  ComFont,
} from './CalendarStyled';
import { useNavigate } from 'react-router-dom';

function ReservationDetail() {
  // useFalseHook();
  const navi = useNavigate();
  const dispatch = useDispatch();
  const { reservationDetail } = useSelector(state => state.detail);

  const deleteHandler = id => {
    dispatch(__deleteRervation(id));
  };

  const token = getCookie('userId');
  useEffect(() => {
    if (token) {
      dispatch(__getReservationDetail());
    }
  }, []);

  return (
    <>
      <ReservationTitle>
        <BackCusor
          onClick={() => {
            navi('/space');
          }}
        >
          ←
        </BackCusor>
        <h2>내가 예약한 회의실</h2>
      </ReservationTitle>
      <InfoContain>
        {reservationDetail?.map(item => (
          <InfoBox key={item.reservationId}>
            <h2>{item.username}</h2>
            <Info>
              <CommentBox>
                <ComFont>회의실 번호</ComFont>
                <div>{item.mrId}</div>
              </CommentBox>

              <CommentBox>
                <ComFont>시작시간</ComFont>
                <div>{item.start.split('T')[1]}</div>
              </CommentBox>
              <CommentBox>
                <ComFont>종료시간</ComFont>
                <div>{item.end.split('T')[1]}</div>
              </CommentBox>
              <DelBtn onClick={() => deleteHandler(item.reservationId)}>
                삭제
              </DelBtn>
            </Info>
          </InfoBox>
        ))}
      </InfoContain>
      {/* <div>
        <p>전체 조회</p>
        <AllReservation />
      </div> */}
    </>
  );
}

export default ReservationDetail;
