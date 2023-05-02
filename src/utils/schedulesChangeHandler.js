import React from 'react'

  export const onChangeTitleHandler = (e,scheduleValue,setScheduleValue) => {
    setScheduleValue({
      ...scheduleValue,
      scTitle: e.target.value,
    });
  };

  export const onChangeCommentHandler = (e,scheduleValue,setScheduleValue) => {
    setScheduleValue({
      ...scheduleValue,
      scComment: e.target.value,
    });
  };