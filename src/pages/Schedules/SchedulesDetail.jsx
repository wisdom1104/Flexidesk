import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  __deleteSchedule,
  __getAllSchedules,
} from '../../redux/modules/schedules';
import {
  ReservationTitle,
  BackCusor,
  InfoBox,
  InfoContain,
  Info,
  CommentBox,
  ComFont,
  DelBtn,
} from '../Reservation/CalendarStyled';

function SchedulesDetail() {
  const param = useParams();
  const dispatch = useDispatch();
  const navi = useNavigate();
  const { userSchedules } = useSelector(state => state.schedules);

  useEffect(() => {
    dispatch(__getAllSchedules());
  }, []);

  return (
    <div>
      <ReservationTitle>
        <BackCusor
          onClick={() => {
            navi('/space');
          }}
        >
          ←
        </BackCusor>
        <h2>내가 등록한 스케줄</h2>
      </ReservationTitle>
      <InfoContain>
        {userSchedules?.map(item => (
          <InfoBox key={item.scId}>
            <h2>{item.scTitle}</h2>
            <Info>
              <CommentBox>
                <ComFont>내용</ComFont>
                <div>{item.scComment}</div>
              </CommentBox>
              <CommentBox>
                <ComFont>날짜</ComFont>
                <div>{item.scStart.split('T')[0]}</div>
              </CommentBox>
              <CommentBox>
                <ComFont>시작시간</ComFont>
                <div>{item.scStart.split('T')[1]}</div>
              </CommentBox>
              <CommentBox>
                <ComFont>종료시간</ComFont>
                <div>{item.scEnd.split('T')[1]}</div>
              </CommentBox>
              <button
                onClick={() => {
                  navi(`/pathschedules/${item.scId}`, { state: { ...item } });
                }}
              >
                수정
              </button>
              <DelBtn
                onClick={() => {
                  dispatch(__deleteSchedule(item.scId));
                }}
              >
                삭제
              </DelBtn>
            </Info>
          </InfoBox>
        ))}
      </InfoContain>
    </div>
  );
}

export default SchedulesDetail;
