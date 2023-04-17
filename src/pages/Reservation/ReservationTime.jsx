import { addMonths, subMonths } from 'date-fns';
import React, { createContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  __addReservation,
  __getReservation,
} from '../../redux/modules/reservation';
import { cookies } from '../../shared/cookies';
import {
  StReserTimeButton,
  StReserTimeBox,
  StReserCountBox,
  StReserCountButton,
  ReservationCheckContain,
} from './CalendarStyled';
import ReservationCheck from './ReservationCheck';

function ReservationTime({ param, selectDay }) {
  const now = new Date();
  const date = `${now.getFullYear()}-${(now.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}T`;

  const [isCheckOut, setIsCheckOut] = useState('false');
  const [clickReservation, setClickReservation] = useState([]);
  // const [choseReservationTime, setChoseReservationTime] = useState('false');

  const [count, setCount] = useState(1);
  // const reqData = { start: clickReservation[0], userList: [] };

  //연속되는 시간 추가하기 위한 request정리
  let reqData = [];

  const dataList = () => {
    clickReservation.map((_, index) => {
      reqData.push({ start: clickReservation[index] });
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

  const { reservation } = useSelector(state => state.reservation);
  const { timeList } = reservation;
  const userId = cookies.get('userId');
  const navi = useNavigate();

  const addCount = () => {
    setCount(count + 1);
  };

  const delCount = () => {
    if (count === 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };

  const onclickHandler = e => {
    if (clickReservation.find(item => item === e.target.value)) {
      return setClickReservation(
        clickReservation.filter(item => item !== e.target.value),
      );
    } else {
      setClickReservation([...clickReservation, e.target.value]);
    }
    setIsCheckOut(!isCheckOut);
    // setChoseReservationTime(!choseReservationTime);
  };
  console.log('클릭', clickReservation);

  useEffect(() => {
    if (selectDay) {
      dispatch(__getReservation({ param, selectDay }));
      console.log(date);
    } else {
      dispatch(__getReservation({ param, selectDay: date.slice(0, -1) }));
    }
  }, [selectDay]);

  return (
    <>
      <div>
        <div>
          예약시간
          <StReserTimeBox>
            {timeList?.map(item => (
              <StReserTimeButton
                // style={{
                //   backgroundColor: choseReservationTime ? '#07133b' : 'white',
                // }}
                key={item.start}
                onClick={onclickHandler}
                disabled={item.isCheckOut === true}
                value={
                  selectDay
                    ? `${selectDay}T${item.start}`
                    : `${date}${item.start}`
                }
              >
                {item.start} ~ {item.end}
              </StReserTimeButton>
            ))}
          </StReserTimeBox>
          예약 인원
          <StReserTimeBox>
            <StReserCountBox>
              <StReserCountButton onClick={delCount}>-</StReserCountButton>
              <div>{count}</div>
              <StReserCountButton onClick={addCount}>+</StReserCountButton>
            </StReserCountBox>
          </StReserTimeBox>
          <div>
            <ReservationCheckContain>
              <ReservationCheck
                param={param}
                selectDay={selectDay}
                clickReservation={clickReservation}
                count={count}
              />
              <button
                onClick={() => {
                  dispatch(__addReservation({ reqDatas, param, selectDay }));
                  navi(`/detail/${userId}`);
                }}
              >
                예약 완료
              </button>
            </ReservationCheckContain>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReservationTime;
