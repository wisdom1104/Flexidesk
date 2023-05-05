import React from 'react';
import {
  CheckContain,
  CheckContainBox,
  CheckTitle,
  FontSt,
  StIcon,
  StSubTitle,
} from '../../pages/reservation/CalendarStyled';

import { Column } from '../../components/Flex';
import IconTitle from '../../components/IconTitle';
import Text from '../../components/Text';

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
      <IconTitle gap="0px" margin="0px 0px 10px 13px" src="title" height="20px">
        <Text>예약 확인하기</Text>
      </IconTitle>
      <CheckContainBox>
        <Column>
          <CheckContain>
            <Text shape="T18_700_96" color="var(--darkgrey)">
              회의실 이름
            </Text>
            <FontSt>{mrName}</FontSt>
          </CheckContain>
          <CheckContain>
            <Text shape="T18_700_96" color="var(--darkgrey)">
              예약 날짜
            </Text>
            <FontSt>{selectDay}</FontSt>
          </CheckContain>
        </Column>
        <Column>
          <CheckContain>
            <Text shape="T18_700_96" color="var(--darkgrey)">
              예약 시간
            </Text>
            <FontSt>
              {timeArray.map(time => (
                <div key={time}>{time}</div>
              ))}
            </FontSt>
          </CheckContain>
          <CheckContain>
            <Text shape="T18_700_96" color="var(--darkgrey)">
              예약 인원
            </Text>
            {userName?.map(item => (
              <Text key={item.username}>{item.username}</Text>
            ))}
          </CheckContain>
        </Column>
      </CheckContainBox>
    </>
  );
}

export default ReservationCheck;
