import React from 'react';
import { Column } from '../../components/Flex';
import IconTitle from '../../components/IconTitle';
import Text from '../../components/Text';
import {
  CheckContain,
  CheckContainBox,
} from '../../pages/reservation/ReservationAllStyle';

function ReservationCheck({ selectDay, clickReservation, userName, mrName }) {
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
        <Text shape="T18_700_22">예약 확인하기</Text>
      </IconTitle>
      <CheckContainBox>
        <Column>
          <CheckContain>
            <Text shape="T16_600" color="var(--grey_002)">
              회의실 이름
            </Text>
            <Text shape="T16_600">{mrName}</Text>
          </CheckContain>
          <CheckContain>
            <Text shape="T16_600" color="var(--grey_002)">
              예약 날짜
            </Text>
            <Text shape="T16_600">{selectDay}</Text>
          </CheckContain>
        </Column>
        <Column>
          <CheckContain>
            <Text shape="T16_600" color="var(--grey_002)">
              예약 시간
            </Text>
            <Text shape="T16_600">
              {timeArray.map(time => (
                <div key={time}>{time}</div>
              ))}
            </Text>
          </CheckContain>
          <CheckContain>
            <Text shape="T16_600" color="var(--grey_002)">
              예약 인원
            </Text>
            {userName?.map(item => (
              <Text shape="T16_600" key={item.username}>
                {item.username}
              </Text>
            ))}
          </CheckContain>
        </Column>
      </CheckContainBox>
    </>
  );
}

export default ReservationCheck;
