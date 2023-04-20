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
import { BackCusor, ReservationTitle } from './CalendarStyled';
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
      <div>
        {reservationDetail?.map(item => (
          <div key={item.reservationId}>
            <div>{item.username}</div>
            <div>회의실 번호 : {item.mrId}</div>
            <div>
              예약시간 : {item.start}~{item.end}
            </div>
            <div>
              <button>수정</button>
              <button onClick={() => deleteHandler(item.reservationId)}>
                삭제
              </button>
            </div>
            --------------------------------
          </div>
        ))}
      </div>
      {/* <div>
        <p>전체 조회</p>
        <AllReservation />
      </div> */}
    </>
  );
}

export default ReservationDetail;
