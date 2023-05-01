import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Page from '../../../components/Page';
import { useCalendar } from 'hooks/useCalendar';
import PathSchedulesTime from '../../../features/Schedules/PathSchedules/PathSchedulesTime';
import {
  DayContain,
  SchContain,
  Day,
  StSubHeader,
  StSubTitle,
  StIcon,
  StSelectDay,
} from '../../Reservation/CalendarStyled';
import { StSpacePagePhoto } from '../../Welcome/WelcomeStyled';

import { StListTitle } from '../../../shared/SpaceStyles';
import { Row } from '../../../components/Flex';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

function PathScedules() {
  const location = useLocation();
  const dataDay = location.state.scStart;
  const param = useParams();

  const {
    date,
    week,
    selectYear,
    selectMonth,
    preMonth,
    nextMonth,
    returnDay,
  } = useCalendar();

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
