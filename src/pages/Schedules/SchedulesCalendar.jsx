import React from 'react';
import { useParams } from 'react-router-dom';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import Page from '../../components/Page';
import { Row } from '../../components/Flex';
import Skeleton from '../../components/Skeleton';
import { useCalendar } from '../../hooks/useCalendar';
import { useSkltTimeout } from '../../hooks/useTimeoutHook';
import {
  DayContain,
  SchContain,
  Day,
  StSubHeader,
  StSelectDay,
  InfoContain,
} from '../reservation/CalendarStyled';
import SchedulesTime from '../../features/schedules/SchedulesTime';
import IconTitle from '../../components/IconTitle';
import Text from '../../components/Text';

function SchedulesCalendar() {
  const param = useParams();
  const width = 'calc(100% / 7.5)';
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
        <IconTitle margin="30px 0px 0px 16px" src="schedule">
          <Text shape="T28_700_34">스케줄 등록하기</Text>
        </IconTitle>
        {showSkeleton ? (
          <InfoContain>
            <Skeleton />
          </InfoContain>
        ) : (
          <Row>
            <SchContain>
              <StSubHeader>
                <IconTitle margin="20px 10px" src="day" height="20px">
                  <Text shape="T18_700">스케줄 날짜</Text>
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
