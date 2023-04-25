import React, { useEffect, useState } from 'react';
import { StBox } from '../../shared/SpaceStyles';

function SpaceMrItem({ mr, navi }) {
  const start = mr.reservationList?.map(reservation => reservation.start);
  const end = mr.reservationList?.map(reservation => reservation.end);
  const tagetTime = '13';
  const tagetDays = '2023-04-25';

  let startTime = '';
  if (start.length > 0) {
    const startTimes = start.map(time => time.split('T')[1]);
    startTime = startTimes.map(time => time.split(':')[0]);
    // console.log(`시작시간 ${startTime}`);
  }
  // console.log('startTime', startTime);

  let startDays = '';
  if (start.length > 0) {
    startDays = start.map(time => time.split('T')[0]);
    // console.log(`시작일 ${startDays}`);
  }
  // console.log('startDays', startDays);

  if (startDays === tagetDays) {
    console.log('11');
  } else {
    console.log('22');
    console.log('3', tagetDays, startDays);
    // console.log('tagetDays', tagetDays);
  }
  // console.log('startDays', startDays);

  const [days, setDays] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const year = String(date.getFullYear()).padStart(2, '0');
      const month = String(date.getMonth()).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      setTime(`${hours}`);
      setDays(`${year}-${month}-${day}`);
    }, 60000);
    // 컴포넌트 언마운트 시 interval clear
    return () => clearInterval(intervalId);
  }, []);
  console.log('days', days);
  console.log('time', time);
  return (
    <>
      {startTime.length > 0 ? (
        <>
          {startDays.map(item =>
            item === tagetDays ? (
              <>
                {startTime.map(timeItem => (
                  <>
                    {timeItem === tagetTime ? (
                      <StBox
                        key={mr.mrId}
                        style={{
                          backgroundColor: '#ffc8c8',
                          transform: `translate(${mr.x}px, ${mr.y}px)`,
                        }}
                        onClick={() => navi(`/calender/${mr.mrId}`)}
                      >
                        <div>
                          현재시각 <br />
                          예약있는 <br />
                          회의실
                        </div>
                      </StBox>
                    ) : (
                      <StBox
                        key={mr.mrId}
                        style={{ transform: `translate(${mr.x}px, ${mr.y}px)` }}
                        onClick={() => navi(`/calender/${mr.mrId}`)}
                      >
                        <div>1{mr.mrName}</div>
                      </StBox>
                    )}
                  </>
                ))}
              </>
            ) : (
              <StBox
                key={mr.mrId}
                style={{ transform: `translate(${mr.x}px, ${mr.y}px)` }}
                onClick={() => navi(`/calender/${mr.mrId}`)}
              >
                <div>2{mr.mrName}</div>
              </StBox>
            ),
          )}
        </>
      ) : (
        <StBox
          key={mr.mrId}
          style={{ transform: `translate(${mr.x}px, ${mr.y}px)` }}
          onClick={() => navi(`/calender/${mr.mrId}`)}
        >
          <div>3{mr.mrName}</div>
        </StBox>
      )}
    </>
  );
}

export default SpaceMrItem;
