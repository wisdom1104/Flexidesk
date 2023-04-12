import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getUserSchedules } from '../../redux/modules/userSchedules';

function UserSchedules() {
  const dispatch = useDispatch();
  const { userSchedules } = useSelector(state => state.userSchedules);

  useEffect(() => {
    dispatch(__getUserSchedules());
  }, []);

  return (
    <>
      <div>
        {userSchedules.map(item => {
          return (
            <>
              <div>시작 : {item.scStart}</div>
              <div>종료 : {item.scEnd}</div>
              <div>제목: {item.scTitle}</div>
              <div>내용: {item.scComment}</div>
              <div>------------------------------</div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default UserSchedules;
