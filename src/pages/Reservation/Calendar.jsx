import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import { useSkltTimeout } from '../../hooks/useTimeout';
import { useCalendar } from '../../hooks/useCalendar';
import Page from '../../components/Page';
import { Row } from '../../components/Flex';
import Skeleton from '../../components/Skeleton';
import ReservationTime from '../../features/reservation/ReservationTime';
import {
  DayContain,
  Day,
  SchContain,
  StSubHeader,
  StSelectDay,
  InfoContain,
} from './CalendarStyled';
import IconTitle from '../../components/IconTitle';
import Text from '../../components/Text';
import NotFound from '../NotFound';

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
        <IconTitle margin="30px 0px 0px 16px" src="reservation">
          <Text shape="T28_700_34">회의실 예약하기</Text>
        </IconTitle>

        {showSkeleton ? (
          <InfoContain>
            <Skeleton />
          </InfoContain>
        ) : isError ? (
          <NotFound />
        ) : (
          <Row>
            <SchContain width="500px" height="">
              <StSubHeader>
                <IconTitle margin="20px 10px" src="day" height="20px">
                  <Text shape="T18_700">{mrName} 예약 날짜</Text>
                </IconTitle>

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
