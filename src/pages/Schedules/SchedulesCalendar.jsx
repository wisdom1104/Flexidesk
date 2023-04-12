import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import SchedulesTime from './SchedulesTime';
import ReservationTime from '../Reservation/ReservationTime';

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
    console.log('날짜선택', e.target.value);
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
            <Day
              key={i}
              onClick={dayClickHandler}
              value={`${selectYear}-${selectMonth
                .toString()
                .padStart(2, '0')}-${(i + 1).toString().padStart(2, '0')}`}
            >
              {i + 1}
            </Day>,
          );
        }
      } else {
        dayArr.push(<Day> </Day>);
      }
    }
    return dayArr;
  };
  console.log(returnDay());

  return (
    <>
      <Calcontain>
        <Header>
          <button
            onClick={() => {
              preMonth();
            }}
          >
            이전달
          </button>
          <div>{selectYear}</div>
          <div>-{selectMonth}</div>
          <button
            onClick={() => {
              nextMonth();
            }}
          >
            다음달
          </button>
        </Header>
        <DayContain>
          {week?.map(item => {
            return <Day key={item}>{item}</Day>;
          })}
        </DayContain>
        <DayContain>{returnDay()}</DayContain>
      </Calcontain>
      <SchedulesTime />
    </>
  );
}
export default SchedulesCalendar;

const Calcontain = styled.div`
  width: 500px;
`;

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const DayContain = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Day = styled.button`
  min-width: calc(100% / 7);
`;
