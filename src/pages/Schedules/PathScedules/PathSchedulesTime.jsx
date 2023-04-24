import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  __pathScehdule,
  __getSchedules,
} from '../../../redux/modules/schedules';
import {
  ScheduleInput,
  StReserTimeBox,
  StReserTimeButton,
  FontSt,
  FinButton,
} from '../../Reservation/CalendarStyled';

function PathSchedulesTime({ param, selectDay, title, comment, scId }) {
  const now = new Date();
  const dispatch = useDispatch();
  const navi = useNavigate();
  const date = `${now.getFullYear()}-${(now.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}T`;

  const [isCheckOut, setIsCheckOut] = useState('false');
  const [clickSchedules, setClickSchedules] = useState([]);

  const [scheduleValue, setScheduleValue] = useState({
    scTitle: title,
    scComment: comment,
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
    // return reqData;
  };
  const dataListResult = dataList();

  const reqDatas = { startList: dataListResult, useList: [] };

  //adddispatch로 보낼값
  const startData = { startList: dataListResult };
  const { scComment, scTitle } = scheduleValue;
  const reqScheduleValue = {
    scComment,
    scTitle,
    startList: dataListResult,
  };

  const { schedules } = useSelector(state => state.schedules);

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

  useEffect(() => {
    console.log(title, comment);
    if (selectDay !== undefined) {
      dispatch(__getSchedules({ param, selectDay }));
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
      <FontSt>스케줄 시간</FontSt>
      <StReserTimeBox>
        {schedules?.map(item => (
          <StReserTimeButton
            key={item.start}
            onClick={onclickHandler}
            disabled={item.isCheckOut === true}
            value={`${selectDay}T${item.start}`}
          >
            {item.start}~{item.end}
          </StReserTimeButton>
        ))}
      </StReserTimeBox>
      <form
        onSubmit={async e => {
          e.preventDefault();
          await dispatch(__pathScehdule({ reqScheduleValue, scId }));
          navi(`/scheduledetail/${param}`);
        }}
      >
        <FontSt>스케줄 제목</FontSt>
        <ScheduleInput
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
        <FontSt>스케줄 내용</FontSt>
        <ScheduleInput
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
        <FinButton>수정하기</FinButton>
      </form>
    </>
  );
}

export default PathSchedulesTime;
