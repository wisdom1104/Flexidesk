import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  __deleteSchedule,
  __getAllSchedules,
} from '../../redux/modules/schedules';
import {
  ReservationTitle,
  BackCusor,
  InfoBox,
  InfoContain,
} from '../Reservation/CalendarStyled';

function SchedulesDetail() {
  const param = useParams();
  const dispatch = useDispatch();
  const navi = useNavigate();
  const { userSchedules } = useSelector(state => state.schedules);

  useEffect(() => {
    dispatch(__getAllSchedules());
  }, []);

  return (
    <div>
      <ReservationTitle>
        <BackCusor
          onClick={() => {
            navi('/space');
          }}
        >
          ←
        </BackCusor>
        <h2>내가 등록한 스케줄</h2>
      </ReservationTitle>
      <InfoContain>
        {userSchedules?.map(item => (
          <InfoBox key={item.scId}>
            <div>{item.scTitle}</div>
            <div>
              <div>내용 : {item.scComment}</div>
              <div>날짜 : {item.scStart.split('T')[0]}</div>
              <div>시작시간 : {item.scStart.split('T')[1]}</div>
              <div>종료시간 : {item.scEnd.split('T')[1]}</div>
              <button
                onClick={() => {
                  dispatch(__deleteSchedule(item.scId));
                }}
              >
                삭제
              </button>
            </div>
          </InfoBox>
        ))}
      </InfoContain>
    </div>
  );
}

export default SchedulesDetail;
