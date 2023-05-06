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
} from '../../pages/reservation/CalendarStyled';
import IconTitle from '../../components/IconTitle';
import Text from '../../components/Text';
import { BlueBtn } from '../../components/button/BlueBtn';

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
        <IconTitle gap="0px" margin="15px 0px 10px 5px" src="time" height="20">
          <Text shape="T18_700_22">스케줄 시간</Text>
        </IconTitle>
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
        <IconTitle gap="0px" margin="15px 0px 10px 5px" src="time" height="20">
          <Text shape="T18_700_22">스케줄 제목</Text>
        </IconTitle>
        <Input
          w="85%"
          h="50px"
          mg="auto"
          type="text"
          name="scTitle"
          value={scheduleValue.scTitle}
          required
          onChange={onChangeHandler}
          placeholder="제목을 입력하세요."
        />
        <IconTitle gap="0px" margin="15px 0px 10px 5px" src="text" height="20">
          <Text shape="T18_700_22">스케줄 내용</Text>
        </IconTitle>
        <Input
          w="85%"
          h="50px"
          mg="auto"
          type="text"
          name="scComment"
          value={scheduleValue.scComment}
          required
          onChange={onChangeHandler}
          placeholder="내용을 입력하세요."
        />
        <BlueBtn w="90%" mg="auto" mgt="20px">
          <Text color="var(--white)" shape="T27_700_22">
            등록 완료
          </Text>
        </BlueBtn>
      </form>
    </SchContain>
  );
}

export default SchedulesTime;
