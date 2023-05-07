import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import { useCalendar } from '../../hooks/useCalendar';
import Page from '../../components/Page';
import { Row } from '../../components/Flex';
import IconTitle from '../../components/IconTitle';
import Text from '../../components/Text';
import {
  DayContain,
  SchContain,
  Day,
  StSubHeader,
  StSelectDay,
} from '../reservation/ReservationAllStyle';
import PathSchedulesTime from '../../features/pathSchedules/PathSchedulesTime';

function PathScedules() {
  const location = useLocation();
  const data = location.state.scStart;
  const dataDay = data.split('T')[0];
  const param = useParams();
  const width = 'calc(100% / 7.5)';

  const {
    date,
    week,
    selectYear,
    selectMonth,
    preMonth,
    nextMonth,
    returnDay,
  } = useCalendar(width, dataDay);

  return (
    <Page>
      <div>
        <IconTitle margin="30px 0px 0px 16px" src="schedule">
          <Text shape="T28_700_34">스케줄 수정하기</Text>
        </IconTitle>
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
          <PathSchedulesTime
            param={param.userId}
            selectDay={date}
            title={location.state.scTitle}
            comment={location.state.scComment}
            scId={location.state.scId}
            initDate={data}
          />
        </Row>
      </div>
    </Page>
  );
}
export default PathScedules;
