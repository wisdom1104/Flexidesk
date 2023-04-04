import React, { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { __addReservation, __getReservation } from "../../redux/modules/reservation";

function Reservation() {
  const [isCheckOut, setIsCheckOut] = useState("false");
  const [clickReservation, setClickReservation] = useState([]);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  // const reservationData = {mrid: }

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

  const onclickHandler = (e) => {
    if (clickReservation.find((item) => item === e.target.value)) {
      return setClickReservation(
        clickReservation.filter((item) => item !== e.target.value)
      );
    } else {
      setClickReservation([...clickReservation, e.target.value]);
    }
    setIsCheckOut(!isCheckOut);
  };

  console.log(clickReservation);

  useEffect(() => {
    dispatch(__getReservation);
  });

  return (
    <div>
      클릭한 회의실 이름
      <div>
        예약시간
        <div>
          <button onClick={onclickHandler} disabled={isCheckOut} value="09:00">
            09:00~9:59
          </button>
          <button onClick={onclickHandler} value="10:00">
            10:00~10:59
          </button>
          <button onClick={onclickHandler} value="11:00">
            11:00~11:59
          </button>
          <button onClick={onclickHandler} value="12:00">
            12:00~12:59
          </button>
          <button onClick={onclickHandler} value="13:00">
            13:00~13:59
          </button>
          <button onClick={onclickHandler} value="14:00">
            14:00~14:59
          </button>
          <button onClick={onclickHandler} value="15:00">
            15:00~15:59
          </button>
          <button onClick={onclickHandler} value="16:00">
            16:00~16:59
          </button>
          <button onClick={onclickHandler} value="17:00">
            17:00~17:59
          </button>
          <button onClick={onclickHandler} value="18:00">
            18:00~18:59
          </button>
          <button onClick={onclickHandler} value="19:00">
            19:00~19:59
          </button>
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
              dispatch(__addReservation(clickReservation));
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
