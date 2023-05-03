import React from 'react';
import { useSelector } from 'react-redux';
import { __addSchdule } from '../../redux/modules/schedules';
import { useSchedulesHandler } from '../../hooks/schedules/useSchedulesHandler';
import { useSchedulesTime } from '../../hooks/schedules/useSchedulesTime';
import { Input } from '../../components/Input';
import {
  StReserTimeBox,
  StReserTimeButton,
  SchContain,
  StSubTitle,
  StSubmitButton,
  StIcon,
} from '../../pages/Reservation/CalendarStyled';

function SchedulesTime({ param, selectDay }) {
  const initDate = [];
  const title = '';
  const comment = '';
  const {
    onClickHandler,
    clickSchedules,
    reqScheduleValue,
    scheduleValue,
    setScheduleValue,
  } = useSchedulesTime(selectDay, param, title, comment, initDate);

  const { schedules } = useSelector(state => state.schedules);

  const dispatchValue = __addSchdule;
  const { onSubmitHandler, onChangeHandler } = useSchedulesHandler(
    reqScheduleValue,
    param,
    setScheduleValue,
    dispatchValue,
  );

  return (
    <SchContain width="383px">
      <div>
        <StSubTitle margin="20px 0px 10px 24px">
          <StIcon src={`${process.env.PUBLIC_URL}/img/time.png`} alt="icon" />
          스케줄 시간
        </StSubTitle>
        <StReserTimeBox>
          {schedules?.map(item => (
            <StReserTimeButton
              key={item.start}
              onClick={onClickHandler}
              disabled={item.isCheckOut === true}
              value={`${selectDay}T${item.start}`}
              isSelected={clickSchedules.includes(`${selectDay}T${item.start}`)}
            >
              {item.start}
            </StReserTimeButton>
          ))}
        </StReserTimeBox>
      </div>
      <form onSubmit={onSubmitHandler}>
        <StSubTitle margin="15px 0px 10px 24px">
          <StIcon src={`${process.env.PUBLIC_URL}/img/title.png`} alt="icon" />
          스케줄 제목
        </StSubTitle>
        <Input
          width="85%"
          height="50px"
          margin="auto"
          type="text"
          name="scTitle"
          value={scheduleValue.scTitle}
          required
          onChange={onChangeHandler}
          placeholder="제목을 입력하세요."
        />
        <StSubTitle margin="15px 0px 10px 24px">
          <StIcon src={`${process.env.PUBLIC_URL}/img/text.png`} alt="icon" />
          스케줄 내용
        </StSubTitle>
        <Input
          width="85%"
          height="50px"
          margin="auto"
          type="text"
          name="scComment"
          value={scheduleValue.scComment}
          required
          onChange={onChangeHandler}
          placeholder="내용을 입력하세요."
        />
        <StSubmitButton>등록하기</StSubmitButton>
      </form>
    </SchContain>
  );
}

export default SchedulesTime;
