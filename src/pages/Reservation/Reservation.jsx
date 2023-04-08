import { addMonths, subMonths } from 'date-fns';
import React, { createContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  __addReservation,
  __getReservation,
} from '../../redux/modules/reservation';
import { cookies } from '../../shared/cookies';
import RenderCells from './RenderCells';
import RenderDays from './RenderDays';
import RenderHeader from './RenderHeader';

function Reservation() {
  const now = new Date();
  const date = `${now.getFullYear()}-0${now.getMonth() + 1}-0${now.getDate()}T`;
  const param = useParams();
  console.log(param);
  const [isCheckOut, setIsCheckOut] = useState('false');
  const [clickReservation, setClickReservation] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [count, setCount] = useState(1);
  const reqData = { start: clickReservation[0], userList: [] };
  const dispatch = useDispatch();

  const { reservation } = useSelector(state => state.reservation);
  const { mrId, timeList } = reservation;
  const userId = cookies.get('userId');
  const navi = useNavigate();

  //달력 월 추가 조회
  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

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
  };
  console.log(clickReservation);

  const onDateClick = day => {
    setSelectedDate(day);
  };
  useEffect(() => {
    dispatch(__getReservation(param.id));
    console.log(date);
  }, []);

  return (
    <>
      <div>
        클릭한 회의실 이름
        <div>
          예약시간
          <div>
            {timeList?.map(item => (
              <button
                key={item.start}
                onClick={onclickHandler}
                disabled={item.isCheckOut === true}
                value={`${date}${item.start}`}
              >
                {item.start} ~ {item.end}
              </button>
            ))}
          </div>
          예약 인원
          <div>
            <button onClick={delCount}>-</button>
            <span>{count}</span>
            <button onClick={addCount}>+</button>
          </div>
          <div>
            <button
              onClick={() => {
                dispatch(__addReservation(reqData));
                navi(`/detail/${userId}`);
              }}
            >
              예약 완료
            </button>
          </div>
        </div>
      </div>
      <div className="calendar">
        <RenderHeader
          currentMonth={currentMonth}
          prevMonth={prevMonth}
          nextMonth={nextMonth}
        />
        <RenderDays />
        <RenderCells
          currentMonth={currentMonth}
          selectedDate={selectedDate}
          onDateClick={onDateClick}
        />
      </div>
    </>
  );
}

export default Reservation;
