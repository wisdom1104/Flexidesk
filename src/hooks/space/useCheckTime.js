import { useEffect, useState } from 'react';

export const useCheckTime = mr => {
  const start = mr.reservationList?.map(reservation => reservation.start);

  let startTime = '';
  if (start.length > 0) {
    const startTimes = start.map(time => time.split('T')[1]);
    startTime = startTimes.map(time => time.split(':')[0]);
  }

  let startDay = '';
  if (start.length > 0) {
    startDay = start.map(time => time.split('T')[0]);
  }

  const [day, setDay] = useState('');
  const [time, setTime] = useState('');
  const targetTime = time.split(':')[0];
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
        setDay(`${year}-${month}-${day}`);
      },
      time === '' && day === '' ? 1 : 60000,
    );

    return () => clearInterval(intervalId);
  }, [day, time]);

  return { startTime, startDay, day, targetTime };
};
