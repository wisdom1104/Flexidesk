import React, { useState, useCallback } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import PathSchedulesTime from './PathSchedulesTime';
import {
  StDate,
  DayContain,
  SchContain,
  Day,
  StSubHeader,
  StSubTitle,
  StIcon,
  StSelectDay,
} from '../../Reservation/CalendarStyled';
import { StSpacePagePhoto } from '../../Welcome/WelcomeStyled';
import Page from '../../../components/Page';
import { StListTitle } from '../../../shared/SpaceStyles';
import { Row } from '../../../components/Flex';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

function PathScedules() {
  const param = useParams();
  const location = useLocation();
  const dataDay = location.state.scStart;
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
  const [selectedDate, setSelectedDate] = useState(dataDay.split('T')[0]);

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
    <Page>
      <div>
        <StListTitle margin="30px 0px 0px 16px">
          <StSpacePagePhoto
            width="52px"
            marginTop
            src={`${process.env.PUBLIC_URL}/img/schedule.png`}
            alt="managementIcon"
          />
          <div>스케줄 수정하기</div>
        </StListTitle>
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

            <DayContain>
              {week?.map(item => {
                return <Day key={item}>{item}</Day>;
              })}
              {returnDay()}
            </DayContain>
          </SchContain>
          <PathSchedulesTime
            param={param.userId}
            selectDay={date}
            title={location.state.scTitle}
            comment={location.state.scComment}
            scId={location.state.scId}
            initDate={dataDay}
          />
        </Row>
      </div>
    </Page>
  );
}
export default PathScedules;
