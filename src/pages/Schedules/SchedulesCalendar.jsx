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
import { VscArrowCircleLeft, VscArrowCircleRight } from 'react-icons/vsc';
import { StIntroDiv, StOverall, StSmallFont, StWrapDiv } from '../Welcome/WelcomeStyled';

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
  const [selectedDate, setSelectedDate] = useState(null);

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
      <StOverall>
        <StWrapDiv margin>
          <StIntroDiv>
            <div
              style={{
                width: '32vw',
                height:'20vw',
                display: 'inline-block',
              }}
            >
              <SchContain>
                <StCalenHeader>
                  <StSmallFont width='15vw' align='start'>스케줄 날짜</StSmallFont>
                  <br />
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
            </div>

            <div
              style={{
                width: '30vw',
                height:'20vw',
                display: 'inline-block',
              }}
            >
              <SchedulesTime param={param.userId} selectDay={date} />
            </div>
          </StIntroDiv>
        </StWrapDiv>
      </StOverall>
    </>
  );
}
export default SchedulesCalendar;
