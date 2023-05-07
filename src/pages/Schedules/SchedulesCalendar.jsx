import React from 'react';
import { useParams } from 'react-router-dom';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import { useCalendar } from '../../hooks/useCalendar';
import { useSkltTimeout } from '../../hooks/useTimeout';
import IconTitle from '../../components/IconTitle';
import Text from '../../components/Text';
import Page from '../../components/Page';
import { Row } from '../../components/Flex';
import Skeleton from '../../components/Skeleton';
import {
  DayContain,
  SchContain,
  Day,
  StSubHeader,
  StSelectDay,
  InfoContain,
} from '../reservation/ReservationAllStyle';
import SchedulesTime from '../../features/schedules/SchedulesTime';

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
              <DayContain>
                {week?.map(item => {
                  return (
                    <Day key={item}>
                      <Text shape="T16_700_19" color="var(--mint_002)">
                        {item}
                      </Text>
                    </Day>
                  );
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
