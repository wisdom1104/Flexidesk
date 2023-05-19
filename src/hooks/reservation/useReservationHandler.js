import React from 'react';
import { useSelector } from 'react-redux';
import { __pathScehdule } from '../../redux/modules/schedulesSlice';
import { useSchedulesTime } from '../../hooks/schedules/useSchedulesTime';
import { useSchedulesHandler } from '../../hooks/schedules/useSchedulesHandler';
import { Input } from '../../components/Input';
import IconTitle from '../../components/IconTitle';
import Text from '../../components/Text';
import { BlueBtn } from '../../components/button/BlueBtn';
import {
  StReserTimeBox,
  StReserTimeButton,
  SchContain,
} from '../../pages/reservation/ReservationAllStyle';

function PathSchedulesTime({
  param,
  selectDay,
  title,
  comment,
  scId,
  initDate,
}) {
  const {
    clickSchedules,
    reqScheduleValue,
    scheduleValue,
    setScheduleValue,
    setClickSchedules,
  } = useSchedulesTime(selectDay, param, title, comment, initDate);
  const { schedules } = useSelector(state => state.schedules);

  const dispatchValue = __pathScehdule;
  const { onSubmitHandler, onChangeHandler, onClickHandler } =
    useSchedulesHandler(
      reqScheduleValue,
      param,
      setScheduleValue,
      dispatchValue,
      setClickSchedules,
      clickSchedules,
      scId,
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
          value={scheduleValue.scTitle}
          name="scTitle"
          required
          onChange={onChangeHandler}
        />
        <IconTitle gap="0px" margin="15px 0px 10px 5px" src="text" height="20">
          <Text shape="T18_700_22">스케줄 내용</Text>
        </IconTitle>
        <Input
          w="85%"
          h="50px"
          mg="auto"
          type="text"
          value={scheduleValue.scComment}
          name="scComment"
          required
          onChange={onChangeHandler}
        />
        <BlueBtn w="90%" mg="auto" mgt="20px">
          <Text color="var(--white)" shape="T16_700">
            수정하기
          </Text>
        </BlueBtn>
      </form>
    </SchContain>
  );
}

export default PathSchedulesTime;
