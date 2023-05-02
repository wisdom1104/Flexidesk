import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { __addSchdule } from '../../redux/modules/schedules';
import {
  StReserTimeBox,
  StReserTimeButton,
  SchContain,
  StSubTitle,
  StSubmitButton,
  StIcon,
} from '../../pages/Reservation/CalendarStyled';
import { Input } from '../../components/Input';

import { useSchedulesTimeHook } from '../../hooks/schedules/useSchedulesTimeHook';
import {
  onChangeTitleHandler,
  onChangeCommentHandler,
} from '../../utils/schedulesChangeHandler';

function SchedulesTime({ param, selectDay }) {
  const navi = useNavigate();
  const dispatch = useDispatch();

  const initDate = [];
  const title = '';
  const comment = '';
  const {
    onClickHandler,
    clickSchedules,
    scheduleValue,
    reqScheduleValue,
    setScheduleValue,
  } = useSchedulesTimeHook(selectDay, param, title, comment, initDate);
  // const {onsubmitHandler,onChangeHandler} = useSchedulesHandler(reqScheduleValue, param, scheduleValue, setScheduleValue);

  const { schedules } = useSelector(state => state.schedules);

  const onsubmitHandler = async e => {
    e.preventDefault();
    await dispatch(__addSchdule(reqScheduleValue));
    navi(`/scheduledetail/${param}`);
  };

  // const onChangeTitleHandler = e => {
  //   setScheduleValue({
  //     ...scheduleValue,
  //     scTitle: e.target.value,
  //   });
  // };

  // const onChangeCommentHandler = e => {
  //   setScheduleValue({
  //     ...scheduleValue,
  //     scComment: e.target.value,
  //   });
  // };

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
      <form onSubmit={onsubmitHandler}>
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
          onChange={e => {
            onChangeTitleHandler(e, scheduleValue, setScheduleValue);
          }}
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
          value={scheduleValue.scComment}
          required
          onChange={e => {
            onChangeCommentHandler(e, scheduleValue, setScheduleValue);
          }}
          placeholder="내용을 입력하세요."
        />
        <StSubmitButton>등록하기</StSubmitButton>
      </form>
    </SchContain>
  );
}

export default SchedulesTime;
