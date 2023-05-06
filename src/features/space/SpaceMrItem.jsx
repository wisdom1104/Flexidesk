import React, { useEffect, useState } from 'react';
import { StBox } from '../../shared/SpaceStyles';
import Text from '../../components/Text';

function SpaceMrItem({ mr, navi }) {
  const start = mr.reservationList?.map(reservation => reservation.start);

  let startTime = '';
  if (start.length > 0) {
    const startTimes = start.map(time => time.split('T')[1]);
    startTime = startTimes.map(time => time.split(':')[0]);
  }

  let startDays = '';
  if (start.length > 0) {
    startDays = start.map(time => time.split('T')[0]);
  }

  const [days, setDays] = useState('');
  const [time, setTime] = useState('');
  const tagetTime = time.split(':')[0];
  useEffect(() => {
    const intervalId = setInterval(
      () => {
        const date = new Date();
        const year = String(date.getFullYear());
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        setTime(`${hours}:${minutes}:${seconds}`);
        setDays(`${year}-${month}-${day}`);
      },
      time === '' && days === '' ? 1 : 60000,
    );
    // 컴포넌트 언마운트 시 interval clear
    return () => clearInterval(intervalId);
  }, [days, time]);

  return (
    <>
      {startTime.length > 0 ? (
        <>
          {startDays.map(item =>
            item === days ? (
              <>
                {startTime.map(timeItem => (
                  <>
                    {timeItem === tagetTime ? (
                      <StBox
                        key={mr.mrId}
                        onClick={() => navi(`/calender/${mr.mrId}`)}
                        transformValue={`translate(${mr.x}px, ${mr.y}px)`}
                        background="#def1ef"
                        color="#65bab6"
                      >
                        <Text
                          shape="T16_600"
                          color="var(--mint_002)"
                          ta="center"
                        >
                          {mr.mrName}
                        </Text>
                        <Text
                          shape="T12_400"
                          color="var(--grey_002)"
                          ta="center"
                        >
                          - 사용중 -
                        </Text>
                      </StBox>
                    ) : (
                      <StBox
                        key={mr.mrId}
                        onClick={() => navi(`/calender/${mr.mrId}`)}
                        transformValue={`translate(${mr.x}px, ${mr.y}px)`}
                      >
                        <Text
                          shape="T16_600"
                          color="var(--grey_002)"
                          ta="center"
                        >
                          {mr.mrName}
                        </Text>
                      </StBox>
                    )}
                  </>
                ))}
              </>
            ) : (
              <StBox
                key={mr.mrId}
                onClick={() => navi(`/calender/${mr.mrId}`)}
                transformValue={`translate(${mr.x}px, ${mr.y}px)`}
              >
                <Text shape="T16_600" color="var(--grey_002)" ta="center">
                  {mr.mrName}
                </Text>
              </StBox>
            ),
          )}
        </>
      ) : (
        <StBox
          key={mr.mrId}
          onClick={() => navi(`/calender/${mr.mrId}`)}
          transformValue={`translate(${mr.x}px, ${mr.y}px)`}
        >
          <Text shape="T16_600" color="var(--grey_002)" ta="center">
            {mr.mrName}
          </Text>
        </StBox>
      )}
    </>
  );
}

export default SpaceMrItem;
