import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SchedulesTime from './SchedulesTime';
import {
  StDate,
  DayContain,
  SchContain,
  Day,
  StSubTitle,
  StSubHeader,
  StSelectDay,
  StIcon,
  InfoContain,
} from '../Reservation/CalendarStyled';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import { StSpacePagePhoto } from '../Welcome/WelcomeStyled';
import Page from '../../components/Page';
import { StListTitle } from '../../shared/SpaceStyles';
import { Row } from '../../components/Flex';
import { getCookie } from '../../shared/cookies';
import Skeleton from '../../components/Skeleton';

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

  const [showSkeleton, setShowSkeleton] = useState(true);
  const token = getCookie('token');
  const navi = useNavigate();

  useEffect(() => {
    if (!token) {
      navi('/');
    } else {
      const timer = setTimeout(() => {
        setShowSkeleton(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

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
              background={isSelected ? 'pink' : 'white'}
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
          <StSpacePagePhoto
            width="52px"
            marginTop
            src={`${process.env.PUBLIC_URL}/img/schedule.png`}
            alt="managementIcon"
          />
          <div>스케줄 등록하기</div>
        </StListTitle>
        {showSkeleton ? (
          <InfoContain>
            <Skeleton />
          </InfoContain>
        ) : (
          <Row>
            <SchContain>
              <StSubHeader>
                <StSubTitle>
                  <StIcon
                    src={`${process.env.PUBLIC_URL}/img/day.png`}
                    alt="icon"
                  />
                  스케줄 날짜
                </StSubTitle>
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

              {/* ----- */}
              <DayContain>
                {week?.map(item => {
                  return <Day key={item}>{item}</Day>;
                })}
                {returnDay()}
              </DayContain>
              {/* <DayContain>{returnDay()}</DayContain> */}
            </SchContain>
            <SchedulesTime param={param.userId} selectDay={date} />
          </Row>
        )}
      </div>
    </Page>
  );
}
export default SchedulesCalendar;
