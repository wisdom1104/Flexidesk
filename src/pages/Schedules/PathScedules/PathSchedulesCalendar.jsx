import React, { useState, useCallback } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import PathSchedulesTime from './PathSchedulesTime';
import {
  StDate,
  DayContain,
  Header,
  SchContain,
  Day,
  StCalenHeader,
  FontSt,
  DateFont,
} from '../../Reservation/CalendarStyled';
import { VscArrowCircleLeft, VscArrowCircleRight } from 'react-icons/vsc';

function PathScedules() {
  const param = useParams();
  const location = useLocation();
  const dataDay = location.state.scStart.split('T')[0];
  console.log(location.state);
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
    setSelectedDate(e.target.value);
  };

  //달의 날짜 반환 함수
  const returnDay = () => {
    let dayArr = [];
    for (const stDay of week) {
      const day = new Date(selectYear, selectMonth - 1, 1).getDay();
      if (week[day] === stDay) {
        for (let i = 0; i < dateTotalCount; i++) {
          const dateStr = `${selectYear}-${selectMonth
            .toString()
            .padStart(2, '0')}-${(i + 1).toString().padStart(2, '0')}`;
          const isSelected = selectedDate === dateStr;
          dayArr.push(
            <StDate
              key={i}
              onClick={dayClickHandler}
              value={`${selectYear}-${selectMonth
                .toString()
                .padStart(2, '0')}-${(i + 1).toString().padStart(2, '0')}`}
              style={{ backgroundColor: isSelected ? 'pink' : 'white' }}
            >
              {i + 1}
            </StDate>,
          );
        }
      } else {
        dayArr.push(<StDate key={stDay}> </StDate>);
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
            <VscArrowCircleLeft
              onClick={() => {
                preMonth();
              }}
            />
            <DateFont>{selectYear}년</DateFont>
            <DateFont>{selectMonth}월</DateFont>
            <VscArrowCircleRight
              onClick={() => {
                nextMonth();
              }}
            />
          </Header>
        </StCalenHeader>
        <DayContain>
          {week?.map(item => {
            return <Day key={item}>{item}</Day>;
          })}
        </DayContain>
        <DayContain>{returnDay()}</DayContain>
      </SchContain>
      <PathSchedulesTime
        param={param.userId}
        selectDay={date}
        title={location.state.scTitle}
        comment={location.state.scComment}
        scId={location.state.scId}
      />
    </>
  );
}
export default PathScedules;
