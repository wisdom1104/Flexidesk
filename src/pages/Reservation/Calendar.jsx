import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import { useSkltTimeout } from '../../hooks/useTimeoutHook';
import { useCalendar } from '../../hooks/useCalendar';
import Page from '../../components/Page';
import { Row } from '../../components/Flex';
import Skeleton from '../../components/Skeleton';
import { StListTitle } from '../../shared/SpaceStyles';
import { StSpacePagePhoto } from '../Welcome/WelcomeStyled';
import ReservationTime from '../../features/Reservation/ReservationTime';
import {
  DayContain,
  Day,
  SchContain,
  StSubHeader,
  StSubTitle,
  StSelectDay,
  StIcon,
  InfoContain,
} from './CalendarStyled';

const Calendar = () => {
  const { reservation, isError } = useSelector(state => state.reservation);
  const { mrName } = reservation;
  const param = useParams();
  const width = 'calc(100% / 7.8)';
  const dataDay = null;
  const {
    date,
    week,
    selectYear,
    selectMonth,
    preMonth,
    nextMonth,
    returnDay,
  } = useCalendar(width, dataDay);

  const { showSkeleton } = useSkltTimeout();

  return (
    <Page>
      <div>
        <StListTitle margin="30px 0px 0px 16px">
          <StSpacePagePhoto
            width="52px"
            marginTop
            src={`${process.env.PUBLIC_URL}/img/reservation.png`}
            alt="managementIcon"
          />
          <div>회의실 예약하기</div>
        </StListTitle>

        {showSkeleton ? (
          <InfoContain>
            <Skeleton />
          </InfoContain>
        ) : isError ? (
          <div>에러발생 ..⚙️</div>
        ) : (
          <Row>
            <SchContain width="500px" height="">
              <StSubHeader>
                <StSubTitle>
                  <StIcon
                    src={`${process.env.PUBLIC_URL}/img/day.png`}
                    alt="icon"
                  />{' '}
                  {mrName} 예약 날짜
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
              <DayContain width="88%" height="">
                {week?.map(item => {
                  return (
                    <Day width="calc(100% / 7.8)" key={item}>
                      {item}
                    </Day>
                  );
                })}
                {returnDay()}
              </DayContain>
            </SchContain>
            <ReservationTime
              param={param.id}
              selectDay={date}
              mrName={mrName}
            />
          </Row>
        )}
      </div>
    </Page>
  );
};

export default Calendar;
