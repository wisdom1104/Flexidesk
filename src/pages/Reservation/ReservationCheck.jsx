import React from 'react';

function ReservationCheck({ param, selectDay, clickReservation, count }) {
  //예약시간 보여주기
  const timeArray = clickReservation.map(item => {
    const selectTime = item.split('T');
    let time = selectTime[1];
    const startTime = time.replace(':', '');
    const endTime = parseInt(startTime, 10) + 59;
    if (endTime < 1000) {
      return `${startTime.slice(0, 2)}:${startTime.slice(2)}~${startTime.slice(
        0,
        2,
      )}:${endTime.toString().slice(1)}`;
    } else {
      return `${startTime.slice(0, 2)}:${startTime.slice(2)}~${startTime.slice(
        0,
        2,
      )}:${endTime.toString().slice(2)}`;
    }
  });

  return (
    <>
      <div>예약 확인하기</div>
      <div>
        <div>회의실 이름</div>
        <div>회의실 {param}</div>
      </div>
      <div>
        <div>예약 날짜</div>
        <div>{selectDay}</div>
      </div>
      <div>
        <div>예약 시간</div>
        <div>
          {timeArray.map(time => (
            <div key={time}>{time}</div>
          ))}
        </div>
      </div>
      <div>
        <div>예약 인원</div>
        <div>{count}</div>
      </div>
    </>
  );
}

export default ReservationCheck;
