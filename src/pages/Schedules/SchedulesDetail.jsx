import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getAllSchedules } from '../../redux/modules/schedules';

function SchedulesDetail() {
  const dispatch = useDispatch();
  const { scList } = useSelector(state => state.userSchedules);
  console.log(scList);
  useEffect(() => {
    dispatch(__getAllSchedules());
  }, []);

  return (
    <div>
      {scList?.map(item => (
        <div>
          <div>제목 : {item.scTitle}</div>
          <div>내용 : {item.scComment}</div>
          <div>시작시간 : {item.scStart}</div>
          <div>종료시간 : {item.scEnd}</div>
        </div>
      ))}
    </div>
  );
}

export default SchedulesDetail;
