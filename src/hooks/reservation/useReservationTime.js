import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { __getReservation } from '../../redux/modules/reservationSlice';

export const useReservationTime = (param, selectDay) => {
  const [userIdInfo, setUserIdInfo] = useState([]);
  const { userData } = useSelector(state => state.reservation);
  const { reservation } = useSelector(state => state.reservation);

  const { timeList } = reservation;

  const dispatch = useDispatch();
  const [clickReservation, setClickReservation] = useState([]);
  const now = new Date();

  const date = `${now.getFullYear()}-${(now.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}T`;

  let reqData = [];

  const dataList = () => {
    clickReservation.map((_, index) => {
      reqData.push({ start: clickReservation[index] });
    });
    return reqData;
  };
  const reqDatas = { startList: dataList(), userList: userIdInfo };

  useEffect(() => {
    if (selectDay) {
      dispatch(__getReservation({ param, selectDay }));
    } else {
      dispatch(
        __getReservation({
          param,
          selectDay: date.slice(0, -1),
        }),
      );
    }
    setClickReservation([]);
  }, [selectDay]);

  return {
    userIdInfo,
    setUserIdInfo,
    clickReservation,
    setClickReservation,
    timeList,
    date,
    userData,
    reqDatas,
  };
};
