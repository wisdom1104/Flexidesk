import React from 'react';
import { useSelector } from 'react-redux';
import { __pathScehdule } from '../../../redux/modules/schedules';
import { useSchedulesTime } from '../../../hooks/schedules/useSchedulesTime';
import { useSchedulesHandler } from '../../../hooks/schedules/useSchedulesHandler';
import { Input } from '../../../components/Input';
import {
  StReserTimeBox,
  StReserTimeButton,
  SchContain,
  StSubTitle,
  StIcon,
  StSubmitButton,
} from '../../../pages/Reservation/CalendarStyled';

function PathSchedulesTime({
  param,
  selectDay,
  title,
  comment,
  scId,
  initDate,
}) {
  const {
    onClickHandler,
    clickSchedules,
    reqScheduleValue,
    scheduleValue,
    setScheduleValue,
  } = useSchedulesTime(selectDay, param, title, comment, initDate);
  const { schedules } = useSelector(state => state.schedules);

  const dispatchValue = __pathScehdule;
  const { onSubmitHandler, onChangeHandler } = useSchedulesHandler(
    reqScheduleValue,
    param,
    setScheduleValue,
    dispatchValue,
    scId,
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
          value={scheduleValue.scTitle}
          name="scTitle"
          required
          onChange={onChangeHandler}
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
          value={scheduleValue.scComment}
          name="scComment"
          required
          onChange={onChangeHandler}
        />
        <StSubmitButton>수정하기</StSubmitButton>
      </form>
    </SchContain>
  );
}

export default PathSchedulesTime;
