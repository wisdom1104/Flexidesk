import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cookies } from '../../shared/cookies';
import { __getSchedules } from '../../redux/modules/schedules';

function SchedulesTime({ param, selectDay }) {
  const now = new Date();
  const date = `${now.getFullYear()}-${(now.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}T`;

  const [isCheckOut, setIsCheckOut] = useState('false');
  const [clickSchedules, setClickSchedules] = useState([]);

  // const reqData = { start: clickReservation[0], userList: [] };

  //연속되는 시간 추가하기 위한 request정리
  let reqData = [];

  const dataList = () => {
    clickSchedules.map((_, index) => {
      reqData.push({ start: clickSchedules[index] });
    });
    return reqData;
    // for (let i = 0; i < clickReservation.length; i++) {
    //   reqData.push({ start: clickReservation[i] });
    // }
    // console.log('동작', reqData);
    // return reqData;
  };

  const reqDatas = { startList: dataList(), useList: [] };
  const dispatch = useDispatch();

  const { schedules } = useSelector(state => state.schedules);
  console.log('스케줄', schedules);
  const { timeList } = schedules;

  const onclickHandler = e => {
    if (clickSchedules.find(item => item === e.target.value)) {
      return setClickSchedules(
        clickSchedules.filter(item => item !== e.target.value),
      );
    } else {
      setClickSchedules([...clickSchedules, e.target.value]);
    }
    setIsCheckOut(!isCheckOut);
  };
  console.log('클릭', clickSchedules);

  useEffect(() => {
    if (selectDay !== undefined) {
      dispatch(__getSchedules({ param, selectDay }));
      console.log('데이터:', date);
    } else {
      dispatch(
        __getSchedules({
          param,
          selectDay: date.slice(0, -1),
        }),
      );
    }
  }, [selectDay]);

  return (
    <>
      <div>스케줄 시간</div>
      <div>
        {timeList?.map(item => (
          <button
            key={item.start}
            onClick={onclickHandler}
            disabled={item.isCheckOut === true}
            value={`${selectDay}T${item.start}`}
          >
            {item.start}~{item.end}
          </button>
        ))}
      </div>
      <div>
        제목 : <input />
        내용 : <input />
      </div>
    </>
  );
}

export default SchedulesTime;
