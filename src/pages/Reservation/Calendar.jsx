import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import ReservationTime from './ReservationTime';
import { useNavigate, useParams } from 'react-router-dom';
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
  SchContain,
  StSubHeader,
  StSubTitle,
  StSelectDay,
} from './CalendarStyled';
import Page from '../../components/Page';
import { StListTitle } from '../../shared/SpaceStyles';
import { StSpacePagePhoto } from '../Welcome/WelcomeStyled';
import { Row } from '../../components/Flex';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import ReservationCheck from './ReservationCheck';
const Calendar = () => {
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
  const [selectedDate, setSelectedDate] = useState(null);

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
              style={{ backgroundColor: isSelected ? 'Pink' : 'white' }}
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
    <Page>
      <div>
        <StListTitle margin="30px 0px 0px 16px">
          {/* <BackCusor
            onClick={() => {
              navi('/space');
            }}
          >
            ←
          </BackCusor> */}
          <StSpacePagePhoto
            width="52px"
            marginTop
            src={`${process.env.PUBLIC_URL}/img/reservation.png`}
            alt="managementIcon"
          />
          <div>회의실 예약하기</div>
        </StListTitle>

        <Row>
          <SchContain>
            {/* <StMrNameBox>
              <FontSt>회의실 이름</FontSt>
              <StMrName>회의실 {mrId}</StMrName>
            </StMrNameBox> */}

            <StSubHeader>
              <StSubTitle>{mrId} 예약 날짜</StSubTitle>
              <StSelectDay>
                <IoIosArrowDropleft
                  onClick={() => {
                    preMonth();
                  }}
                />
                <div>{selectYear}년</div>
                <div>{selectMonth}월</div>
                <IoIosArrowDropright
                  onClick={() => {
                    nextMonth();
                  }}
                />
              </StSelectDay>
            </StSubHeader>
            <DayContain>
              {week?.map(item => {
                return <Day key={item}>{item}</Day>;
              })}
              {returnDay()}
            </DayContain>
          </SchContain>
          <ReservationTime param={param.id} selectDay={date} />
        </Row>
      </div>
    </Page>
  );
};

export default Calendar;
