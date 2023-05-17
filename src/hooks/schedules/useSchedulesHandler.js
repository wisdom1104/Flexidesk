import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
export const useSchedulesHandler = (
  reqScheduleValue,
  param,
  setScheduleValue,
  dispatchValue,
  setClickSchedules,
  clickSchedules,
  scId,
) => {
  const navi = useNavigate();
  const dispatch = useDispatch();
  const [isCheckOut, setIsCheckOut] = useState('false');

  const onSubmitHandler = async e => {
    e.preventDefault();
    const value = { ...reqScheduleValue };
    if (scId) {
      value.scId = scId;
    } else {
      delete value.scId;
    }
    await dispatch(dispatchValue(value));
    navi(`/scheduledetail/${param}`);
  };

  const onChangeHandler = e => {
    const { name, value } = e.target;

    setScheduleValue(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onClickHandler = e => {
    if (clickSchedules.find(item => item === e.target.value)) {
      return setClickSchedules(
        clickSchedules.filter(item => item !== e.target.value),
      );
    } else {
      setClickSchedules([...clickSchedules, e.target.value]);
    }
    setIsCheckOut(!isCheckOut);
  };
  return { onSubmitHandler, onChangeHandler, onClickHandler };
};
