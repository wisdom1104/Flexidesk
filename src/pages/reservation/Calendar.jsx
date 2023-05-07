import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import { useSkltTimeout } from '../../hooks/useTimeout';
import { useCalendar } from '../../hooks/useCalendar';
import Page from '../../components/Page';
import { Row } from '../../components/Flex';
import Skeleton from '../../components/Skeleton';
import IconTitle from '../../components/IconTitle';
import Text from '../../components/Text';
import NotFound from '../NotFound';
import {
  DayContain,
  Day,
  SchContain,
  StSubHeader,
  StSelectDay,
  InfoContain,
} from './ReservationAllStyle';
import ReservationTime from '../../features/reservation/ReservationTime';

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
                  <Text shape="T16_700_19" color="var(--mint_002)">
                    {selectYear}년
                  </Text>
                  <Text shape="T16_700_19" color="var(--mint_002)">
                    {selectMonth}월
                  </Text>
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
                      <Text shape="T16_700_19" color="var(--mint_002)">
                        {item}
                      </Text>
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
