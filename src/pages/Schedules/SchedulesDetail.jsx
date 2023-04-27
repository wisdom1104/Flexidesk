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
  PathBtn,
} from '../Reservation/CalendarStyled';
import { StFont, StOverall } from '../Welcome/WelcomeStyled';
import { StWrapDiv } from '../Welcome/WelcomeStyled';

function SchedulesDetail() {
  const param = useParams();
  const dispatch = useDispatch();
  const navi = useNavigate();
  const { userSchedules } = useSelector(state => state.schedules);

  useEffect(() => {
    dispatch(__getAllSchedules());
  }, []);

  return (
    <StOverall>
      <StWrapDiv margin>
        <ReservationTitle>
          <BackCusor
            onClick={() => {
              navi('/space');
            }}
          >
            ←
          </BackCusor>

          <StFont width='76vw' fontSize="2rem" align='start' >내가 등록한 스케줄</StFont>
        </ReservationTitle>
        <InfoContain>
          {userSchedules?.map(item => (
            <InfoBox key={item.scId}>
              <StFont width="18vw" fontSize="1.5rem" align="start">
                {item.scTitle}
              </StFont>
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
                <div>
                  <PathBtn
                    onClick={() => {
                      navi(`/pathschedules/${item.scId}`, {
                        state: { ...item },
                      });
                    }}
                  >
                    수정
                  </PathBtn>
                  <DelBtn
                    onClick={() => {
                      dispatch(__deleteSchedule(item.scId));
                    }}
                  >
                    삭제
                  </DelBtn>
                </div>
              </Info>
            </InfoBox>
          ))}
        </InfoContain>
      </StWrapDiv>
    </StOverall>
  );
}

export default SchedulesDetail;
