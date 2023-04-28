import React from 'react';
import {
  CheckContain,
  CheckTitle,
  FinButton,
  SchContain,
  StIcon,
  StSubTitle,
} from './CalendarStyled';
import { __addReservation } from '../../redux/modules/reservation';

function ReservationCheck({
  param,
  selectDay,
  clickReservation,
  userName,
  dispatch,
  navi,
  userId,
  reqDatas,
}) {
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
      <StSubTitle margin="20px 0px 10px 24px">
        <StIcon src={`${process.env.PUBLIC_URL}/img/time.png`} alt="icon" />
        예약 확인하기
      </StSubTitle>
      <CheckContain>
        <CheckTitle>회의실 이름</CheckTitle>
        <div>회의실 {param}</div>
      </CheckContain>
      <CheckContain>
        <div>예약 날짜</div>
        <div>{selectDay}</div>
      </CheckContain>
      <CheckContain>
        <div>예약 시간</div>
        <div>
          {timeArray.map(time => (
            <div key={time}>{time}</div>
          ))}
        </div>
      </CheckContain>
      <CheckContain>
        <div>예약 인원</div>
        {userName?.map(item => (
          <div key={item.username}>{item.username}</div>
        ))}
      </CheckContain>
      <FinButton
        onClick={() => {
          dispatch(__addReservation({ reqDatas, param, selectDay }));
          navi(`/detail/${userId}`);
        }}
      >
        예약 완료
      </FinButton>
    </>
  );
}

export default ReservationCheck;
