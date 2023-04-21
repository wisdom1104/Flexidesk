import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import ReservationTime from './ReservationTime';
import { useNavigate, useParams } from 'react-router-dom';
import useFalseHook from '../../hooks/useFalseHook';
import { useSelector } from 'react-redux';
import { VscArrowCircleLeft, VscArrowCircleRight } from 'react-icons/vsc';
import {
  MainContain,
  ReservationTitle,
  StMrNameBox,
  StMrName,
  StCalenHeader,
  BackCusor,
  Calcontain,
  Header,
  DayContain,
  Day,
  StDate,
  FontSt,
  DateFont,
} from './CalendarStyled';
const Calendar = () => {
  // useFalseHook();
  const param = useParams();
  const navi = useNavigate();
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
  const { reservation } = useSelector(state => state.reservation);
  const { mrId } = reservation;

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
      <Calcontain>
        <ReservationTitle>
          <BackCusor
            onClick={() => {
              navi('/space');
            }}
          >
            ←
          </BackCusor>
          <h2>회의실 예약하기</h2>
        </ReservationTitle>

        <MainContain>
          <StMrNameBox>
            <FontSt>회의실 이름</FontSt>
            <StMrName>회의실 {mrId}</StMrName>
          </StMrNameBox>

          <StCalenHeader>
            <FontSt>예약 날짜</FontSt>
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
          <ReservationTime param={param.id} selectDay={date} />
        </MainContain>
      </Calcontain>
    </>
  );
};

export default Calendar;
