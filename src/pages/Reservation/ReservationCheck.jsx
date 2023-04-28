import React from 'react';
import {
  CheckContain,
  CheckContainBox,
  CheckTitle,
  FontSt,
  StIcon,
  StSubTitle,
} from './CalendarStyled';

import { Column } from '../../components/Flex';

function ReservationCheck({
  param,
  selectDay,
  clickReservation,
  userName,
  mrName,
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
      <StSubTitle margin="0px 0px 10px 24px">
        <StIcon src={`${process.env.PUBLIC_URL}/img/title.png`} alt="icon" />
        예약 확인하기
      </StSubTitle>
      <CheckContainBox>
        <Column>
          <CheckContain>
            <CheckTitle>회의실 이름</CheckTitle>
            <FontSt>{mrName}</FontSt>
          </CheckContain>
          <CheckContain>
            <CheckTitle>예약 날짜</CheckTitle>
            <FontSt>{selectDay}</FontSt>
          </CheckContain>
        </Column>
        <Column>
          <CheckContain>
            <CheckTitle>예약 시간</CheckTitle>
            <FontSt>
              {timeArray.map(time => (
                <div key={time}>{time}</div>
              ))}
            </FontSt>
          </CheckContain>
          <CheckContain>
            <CheckTitle>예약 인원</CheckTitle>
            {userName?.map(item => (
              <FontSt key={item.username}>{item.username}</FontSt>
            ))}
          </CheckContain>
        </Column>
      </CheckContainBox>
    </>
  );
}

export default ReservationCheck;
