import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const Calendar = () => {
  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    date: new Date().getDate(),
    day: new Date().getDay(),
  };

  const week = ['일', '월', '화', '수', '목', '금', '토']; //일주일
  const [selectYear, setSelectYear] = useState(today.year);
  const [selectMonth, setSelectMonth] = useState(today.month);
  console.log('월', selectMonth);
  console.log('년', selectYear);

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

  //달의 날짜 반환 함수
  const returnDay = () => {
    let dayArr = [];
    for (const stDay of week) {
      const day = new Date(selectYear, selectMonth - 1, 1).getDay();
      if (week[day] === stDay) {
        for (let i = 0; i < dateTotalCount; i++) {
          dayArr.push(<Day>{i + 1}</Day>);
        }
      } else {
        dayArr.push(<Day> </Day>);
      }
    }
    return dayArr;
  };
  console.log(returnDay());

  return (
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
          return <Day>{item}</Day>;
        })}
      </DayContain>
      <DayContain>{returnDay()}</DayContain>
    </Calcontain>
  );
};

export default Calendar;

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

const Day = styled.div`
  min-width: calc(100% / 7);
`;
