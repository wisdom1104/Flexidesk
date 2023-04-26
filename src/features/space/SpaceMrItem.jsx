import React, { useEffect, useState } from 'react';
import { StBox } from '../../shared/SpaceStyles';

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
  console.log('days', days);
  console.log('tagetTime', tagetTime);

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
                        <div>{mr.mrName}</div>
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
                <div>{mr.mrName}</div>
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
          <div>{mr.mrName}</div>
        </StBox>
      )}
    </>
  );
}

export default SpaceMrItem;
