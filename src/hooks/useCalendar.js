import React, { useState, useCallback } from 'react';
import { StDate } from '../pages/reservation/ReservationAllStyle';

export const useCalendar = (width, dataDay) => {
  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth()+1,
    date: new Date().getDate(),
    day: new Date().getDay(),
  };

  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const [selectYear, setSelectYear] = useState(today.year);
  const [selectMonth, setSelectMonth] = useState(today.month + 1);
  const [date, setDate] = useState();
  const [selectedDate, setSelectedDate] = useState(dataDay);

  const preMonth = useCallback(() => {
    if (selectMonth === 1) {
      setSelectMonth(12);
      setSelectYear(selectYear - 1);
    } else {
      setSelectMonth(selectMonth - 1);
    }
  }, [selectMonth]);

  const nextMonth = useCallback(() => {
    if (selectMonth === 12) {
      setSelectMonth(1);
      setSelectYear(selectYear + 1);
    } else {
      setSelectMonth(selectMonth + 1);
    }
  }, [selectMonth]);

  const dayClickHandler = e => {
    setDate(e.target.value);
    setSelectedDate(e.target.value);
  };

  const returnDay = () => {
    const daysInMonth = new Date(selectYear, selectMonth, 0).getDate();
    const firstDayOfMonth = new Date(selectYear, selectMonth - 1, 1).getDay();

    const dayArr = [...Array(firstDayOfMonth)].map((_, index) => (
      <StDate key={`empty-${index}`} width={width} />
    ));

    const dateArr = [...Array(daysInMonth)].map((_, index) => {
      const day = index + 1;
      const dateStr = `${selectYear}-${selectMonth
        .toString()
        .padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      const nowday = `${today.year}-${today.month.toString()
        .padStart(2, '0')}-${today.date.toString().padStart(2, '0')}`
        const isSelected = selectedDate === dateStr || nowday === dateStr;
      return (
        <StDate
          key={day}
          onClick={dayClickHandler}
          value={dateStr ? dateStr : nowday}
          background={isSelected ? 'pink' : 'white' }
          width={width}
        >
          {day}
        </StDate>
      );
    });

    return [...dayArr, ...dateArr];
  };

  return {
    date,
    week,
    selectYear,
    selectMonth,
    preMonth,
    nextMonth,
    returnDay,
  };
};
