import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { __getAllSchedules } from '../../redux/modules/schedules';
import {
  InfoBox,
  InfoContain,
  Info,
  CommentBox,
  PathBtn,
  StSubTitle,
  ButtonContain,
} from '../Reservation/CalendarStyled';
import { StSmallFont, StSpacePagePhoto } from '../Welcome/WelcomeStyled';
import Page from '../../components/Page';
import { StListTitle } from '../../shared/SpaceStyles';
import { getCookie } from '../../shared/cookies';
import Skeleton from '../../components/Skeleton';
import SchedulesDelete from './\bSchedulesDelete';

function SchedulesDetail() {
  const dispatch = useDispatch();
  const navi = useNavigate();
  const { userSchedules, isLoading, isError } = useSelector(
    state => state.schedules,
  );
  const [showSkeleton, setShowSkeleton] = useState(true);
  const token = getCookie('userId');

  // useEffect(() => {
  //   dispatch(__getAllSchedules());
  // }, []);

  useEffect(() => {
    if (!token) {
      navi('/');
    } else {
      const loadData = async () => {
        try {
          dispatch(__getAllSchedules());
        } catch (error) {
          console.log(error);
        }
      };

      const timer = setTimeout(() => {
        loadData();
        setShowSkeleton(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Page>
      <div>
        <StListTitle margin="30px 0px 0px 16px">
          {/* <BackCusor
              onClick={() => {
                navi('/space');
              }}
            >
              ←
            </BackCusor> */}
          <StSpacePagePhoto
            width="52px"
            marginTop
            src={`${process.env.PUBLIC_URL}/img/schedule.png`}
            alt="managementIcon"
          />
          <div>내가 등록한 스케줄</div>
        </StListTitle>

        {showSkeleton ? (
          <InfoContain>
            <Skeleton />
          </InfoContain>
        ) : isError ? (
          <div>에러발생 ..⚙️</div>
        ) : (
          <InfoContain>
            {userSchedules?.map(item => (
              <InfoBox key={item.scId} height="350px">
                <StSubTitle>{item.scTitle}</StSubTitle>
                <Info>
                  <CommentBox>
                    <StSmallFont width>내용</StSmallFont>
                    <StSmallFont width>{item.scComment}</StSmallFont>
                  </CommentBox>
                  <CommentBox>
                    <StSmallFont width>날짜</StSmallFont>
                    <StSmallFont width>
                      {item.scStart.split('T')[0]}
                    </StSmallFont>
                  </CommentBox>
                  <CommentBox>
                    <StSmallFont width>시작시간</StSmallFont>
                    <StSmallFont width>
                      {item.scStart.split('T')[1]}
                    </StSmallFont>
                  </CommentBox>
                  <CommentBox>
                    <StSmallFont width>종료시간</StSmallFont>
                    <StSmallFont width>{item.scEnd.split('T')[1]}</StSmallFont>
                  </CommentBox>
                  <ButtonContain>
                    <PathBtn
                      onClick={() => {
                        navi(`/pathschedules/${item.scId}`, {
                          state: { ...item },
                        });
                      }}
                    >
                      수정
                    </PathBtn>
                    <SchedulesDelete scId={item.scId} />
                  </ButtonContain>
                </Info>
              </InfoBox>
            ))}
          </InfoContain>
        )}
      </div>
    </Page>
  );
}

export default SchedulesDetail;
