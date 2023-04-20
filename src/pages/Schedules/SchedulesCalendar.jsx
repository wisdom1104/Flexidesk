import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import SchedulesTime from './SchedulesTime';
import {
  StDate,
  DayContain,
  Header,
  SchContain,
  Day,
  StCalenHeader,
  FontSt,
  DateFont,
} from '../Reservation/CalendarStyled';

function SchedulesCalendar() {
  const param = useParams();
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

  const dateTotalCount = new Date(selectYear, selectMonth, 0).getDate();
  //선택한 연도, 달의 마지막 날짜

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
  };

  //달의 날짜 반환 함수
  const returnDay = () => {
    let dayArr = [];
    for (const stDay of week) {
      const day = new Date(selectYear, selectMonth - 1, 1).getDay();
      if (week[day] === stDay) {
        for (let i = 0; i < dateTotalCount; i++) {
          dayArr.push(
            <StDate
              key={i}
              onClick={dayClickHandler}
              value={`${selectYear}-${selectMonth
                .toString()
                .padStart(2, '0')}-${(i + 1).toString().padStart(2, '0')}`}
            >
              {i + 1}
            </StDate>,
          );
        }
      } else {
        dayArr.push(<StDate> </StDate>);
      }
    }
    return dayArr;
  };

  return (
    <>
      <SchContain>
        <StCalenHeader>
          <FontSt>스케줄 날짜</FontSt>
          <Header>
            <button
              onClick={() => {
                preMonth();
              }}
            >
              이전달
            </button>
            <DateFont>{selectYear}년</DateFont>
            <DateFont>{selectMonth}월</DateFont>
            <button
              onClick={() => {
                nextMonth();
              }}
            >
              다음달
            </button>
          </Header>
        </StCalenHeader>
        <DayContain>
          {week?.map(item => {
            return <Day key={item}>{item}</Day>;
          })}
        </DayContain>
        <DayContain>{returnDay()}</DayContain>
      </SchContain>
      <SchedulesTime param={param.userId} selectDay={date} />
    </>
  );
}
export default SchedulesCalendar;
