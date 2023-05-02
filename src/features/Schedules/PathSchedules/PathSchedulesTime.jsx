import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { __pathScehdule } from '../../../redux/modules/schedules';

import {
  StReserTimeBox,
  StReserTimeButton,
  SchContain,
  StSubTitle,
  StIcon,
  StSubmitButton,
} from '../../../pages/Reservation/CalendarStyled';
import { Input } from '../../../components/Input';
import { useSchedulesTimeHook } from '../../../hooks/schedules/useSchedulesTimeHook';

function PathSchedulesTime({
  param,
  selectDay,
  title,
  comment,
  scId,
  initDate,
}) {
  const navi = useNavigate();
  const dispatch = useDispatch();
  const {
    onClickHandler,
    clickSchedules,
    reqScheduleValue,
    scheduleValue,
    setScheduleValue,
  } = useSchedulesTimeHook(selectDay, param, title, comment, initDate);
  const { schedules } = useSelector(state => state.schedules);

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
      <form
        onSubmit={async e => {
          e.preventDefault();
          await dispatch(__pathScehdule({ reqScheduleValue, scId }));
          navi(`/scheduledetail/${param}`);
        }}
      >
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
          required
          onChange={e =>
            setScheduleValue({
              ...scheduleValue,
              scTitle: e.target.value,
            })
          }
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
          required
          onChange={e =>
            setScheduleValue({
              ...scheduleValue,
              scComment: e.target.value,
            })
          }
        />
        <StSubmitButton>수정하기</StSubmitButton>
      </form>
    </SchContain>
  );
}

export default PathSchedulesTime;
