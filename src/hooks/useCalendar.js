import React,{ useState, useCallback } from 'react';
import { StDate } from '../pages/reservation/CalendarStyled';

export const useCalendar = (width,dataDay) =>{
  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    date: new Date().getDate(),
    day: new Date().getDay(),
  };

  const week = ['일', '월', '화', '수', '목', '금', '토']; //일주일
  const [selectYear, setSelectYear] = useState(today.year);
  const [selectMonth, setSelectMonth] = useState(today.month + 1);
  const [date, setDate] = useState();
   const [selectedDate, setSelectedDate] = useState(dataDay);

  //이전달
  const preMonth = useCallback(() => {
    if (selectMonth === 1) {
      setSelectMonth(12);
      setSelectYear(selectYear - 1);
    } else {
      setSelectMonth(selectMonth - 1);
    }
  }, [selectMonth]);

  //다음달
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
      <StDate key={`empty-${index}`} 
      width={width}
       />
    ));
  
    const dateArr = [...Array(daysInMonth)].map((_, index) => {
      const day = index + 1;
      const dateStr = `${selectYear}-${selectMonth.toString().padStart(2, '0')}-${day
        .toString()
        .padStart(2, '0')}`;
      const isSelected = selectedDate === dateStr;
  
      return (
        <StDate
          key={day}
          onClick={dayClickHandler}
          value={dateStr}
          background={isSelected ? 'pink' : 'white'}
          width={width}
        >
          {day}
        </StDate>
      );
    });
  
    return [...dayArr, ...dateArr];
  };

  return {date,week,selectYear,selectMonth,preMonth,nextMonth,returnDay}
}
