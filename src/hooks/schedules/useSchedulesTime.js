import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { __getSchedules } from '../../redux/modules/schedulesSlice';

export const useSchedulesTime = (
  selectDay,
  param,
  title,
  comment,
  initDate,
) => {
  const dispatch = useDispatch();
  const [clickSchedules, setClickSchedules] = useState([initDate]);
  const now = new Date();

  const date = `${now.getFullYear()}-${(now.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}T`;

  const [scheduleValue, setScheduleValue] = useState({
    scTitle: title,
    scComment: comment,
  });

  let reqData = [];

  const schedulesList = () => {
    clickSchedules.map((_, index) => {
      reqData.push({ start: clickSchedules[index] });
    });
    return reqData;
  };

  const scheduleListResult = schedulesList();

  const { scComment, scTitle } = scheduleValue;
  const reqScheduleValue = {
    scComment,
    scTitle,
    startList: scheduleListResult,
  };

  useEffect(() => {
    if (selectDay !== undefined) {
      dispatch(__getSchedules({ param, selectDay }));
      setClickSchedules([]);
    } else {
      dispatch(
        __getSchedules({
          param,
          selectDay: date.slice(0, -1),
        }),
      );
    }
  }, [selectDay]);

  return {
    clickSchedules,
    setClickSchedules,
    reqScheduleValue,
    scheduleValue,
    setScheduleValue,
  };
};
