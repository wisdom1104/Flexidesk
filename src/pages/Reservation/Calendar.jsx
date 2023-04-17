import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import ReservationTime from './ReservationTime';
import { useNavigate, useParams } from 'react-router-dom';
import useFalseHook from '../../hooks/useFalseHook';
import { useSelector } from 'react-redux';
import {
  MainContain,
  ReservationTitle,
  StMrNameBox,
  StMrName,
  StCalenHeader,
  BackCusor,
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
  console.log(returnDay());

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
            <div>회의실 이름</div>
            <StMrName>회의실 {mrId}</StMrName>
          </StMrNameBox>

          <StCalenHeader>
            <div>예약 날짜</div>
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

const Calcontain = styled.div`
  width: 75vw;
  height: 63vh;
`;

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const DayContain = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: white;
`;

const Day = styled.button`
  min-width: calc(100% / 7);
  background-color: white;
  border: 1px solid transparent;
  color: navy;
  font-family: inherit;
  height: 3vh;
  align-items: flex-end;
  display: flex;
  justify-content: center;
`;

const StDate = styled.button`
  min-width: calc(100% / 7);
  background-color: white;
  border: 1px solid lightgray;
  height: 6vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
