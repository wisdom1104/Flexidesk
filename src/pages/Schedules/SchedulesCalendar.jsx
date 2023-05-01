import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getCookie } from '../../shared/cookies';

import Page from '../../components/Page';
import { Row } from '../../components/Flex';
import Skeleton from '../../components/Skeleton';
import { useCalendar } from 'hooks/useCalendar';

import {
  DayContain,
  SchContain,
  Day,
  StSubTitle,
  StSubHeader,
  StSelectDay,
  StIcon,
  InfoContain,
} from '../Reservation/CalendarStyled';
import { StSpacePagePhoto } from '../Welcome/WelcomeStyled';
import { StListTitle } from '../../shared/SpaceStyles';
import SchedulesTime from '../../features/Schedules/SchedulesTime';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

function SchedulesCalendar() {
  const param = useParams();

  const width = 'calc(100% / 7.8)';
  const {
    date,
    week,
    selectYear,
    selectMonth,
    preMonth,
    nextMonth,
    returnDay,
  } = useCalendar(width);

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
              <DayContain>
                {week?.map(item => {
                  return <Day key={item}>{item}</Day>;
                })}
                {returnDay()}
              </DayContain>
            </SchContain>
            <SchedulesTime param={param.userId} selectDay={date} />
          </Row>
        )}
      </div>
    </Page>
  );
}
export default SchedulesCalendar;
