import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import Page from '../../../components/Page';
import PathSchedulesTime from '../../../features/Schedules/PathSchedules/PathSchedulesTime';
import { useCalendar } from '../../../hooks/useCalendar';
import { Row } from '../../../components/Flex';
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
            initDate={data}
          />
        </Row>
      </div>
    </Page>
  );
}
export default PathScedules;
