import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cookies } from '../../shared/cookies';
import { __addSchdule, __getSchedules } from '../../redux/modules/schedules';

function SchedulesTime({ param, selectDay }) {
  const now = new Date();
  const dispatch = useDispatch();
  const navi = useNavigate();
  const date = `${now.getFullYear()}-${(now.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}T`;

  const [isCheckOut, setIsCheckOut] = useState('false');
  const [clickSchedules, setClickSchedules] = useState([]);

  const [scheduleValue, setScheduleValue] = useState({
    scTitle: '',
    scComment: '',
  });

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
  const dataListResult = dataList();

  const reqDatas = { startList: dataListResult, useList: [] };

  //adddispatch로 보낼값
  const startData = { startList: dataListResult };
  const { scComment, scTitle } = scheduleValue;
  const reqScheduleValue = { scComment, scTitle, startList: dataListResult };

  console.log('스케줄내용', reqScheduleValue);

  const { schedules } = useSelector(state => state.schedules);
  console.log('스케줄', schedules);

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
        {schedules?.map(item => (
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
      <form
        onSubmit={async e => {
          e.preventDefault();
          await dispatch(__addSchdule(reqScheduleValue));
          navi(`/scheduledetail/${param}`);
        }}
      >
        <input
          type="text"
          value={scheduleValue.scTitle}
          required
          onChange={e =>
            setScheduleValue({
              ...scheduleValue,
              scTitle: e.target.value,
            })
          }
        />

        <input
          type="text"
          value={scheduleValue.scComment}
          required
          onChange={e =>
            setScheduleValue({
              ...scheduleValue,
              scComment: e.target.value,
            })
          }
        />
        <button>등록하기</button>
      </form>
    </>
  );
}

export default SchedulesTime;
