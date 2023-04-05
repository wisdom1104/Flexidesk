import React, { createContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  __addReservation,
  __getReservation,
} from '../../redux/modules/reservation';
import { cookies } from '../../shared/cookies';

function Reservation() {
  const now = new Date();
  const date = `${now.getFullYear()}-0${now.getMonth()}-0${now.getDay()}T`;
  const param = useParams();
  console.log(param);
  const [isCheckOut, setIsCheckOut] = useState('false');
  const [clickReservation, setClickReservation] = useState([]);
  const [count, setCount] = useState(1);
  const reqData = { start: clickReservation[0], userList: [] };
  const dispatch = useDispatch();

  const { reservation } = useSelector(state => state.reservation);
  const { mrId, timeList } = reservation;
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
  };
  console.log(clickReservation);
  useEffect(() => {
    dispatch(__getReservation(param.id));
  }, []);

  return (
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
  );
}

export default Reservation;
