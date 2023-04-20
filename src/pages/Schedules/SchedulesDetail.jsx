import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  __deleteSchedule,
  __getAllSchedules,
} from '../../redux/modules/schedules';

function SchedulesDetail() {
  const param = useParams();
  const dispatch = useDispatch();
  const { userSchedules } = useSelector(state => state.schedules);

  useEffect(() => {
    dispatch(__getAllSchedules());
  }, []);

  return (
    <div>
      {userSchedules?.map(item => (
        <div key={item.scId}>
          <div>제목 : {item.scTitle}</div>
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
          <div>-------------------------------</div>
        </div>
      ))}
    </div>
  );
}

export default SchedulesDetail;
