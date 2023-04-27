import React, { useEffect, useState} from 'react';
import {  StFont, StSmallFont, StWrapDiv } from '../Welcome/WelcomeStyled';
import { useDispatch, useSelector } from 'react-redux';
import { __getAllManagement } from '../../redux/modules/allManagementSlice';
import { cookies } from '../../shared/cookies';
import { useNavigate } from 'react-router-dom';
import { StOverall } from './UserStyled';
import {
  CommentBox,
  Info,
  InfoBox,
  InfoContain,
  ReservationTitle,
} from '../Reservation/CalendarStyled';
import ManagementChange from '../../features/user/ManagementChange';
import Skeleton from '../../components/Skeleton';

function Management() {
  const { userList, isLoading, isError } = useSelector(state => state.userList);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const dispatch = useDispatch();
  const navi = useNavigate();

  // token 유무에 따른 가드
  const token = cookies.get('token');
  // 관리자 가드
  const role = cookies.get('role');
  //전체조회
  useEffect(() => {
    if (!token) {
      navi('/');
    } else if (role !== 'ADMIN') {
      navi('/');
    } else {
      setTimeout(() => {
        dispatch(__getAllManagement());
        setShowSkeleton(false);
      }, 2000);
    }
    return () => clearTimeout();
  }, []);

  return (
    <>
        <StOverall>
          <StWrapDiv>
          <ReservationTitle>
            <StFont width="80vw" fontSize="2rem" align="start">
            사용자 관리
            </StFont>
          </ReservationTitle>

          {showSkeleton ? (
             [...Array(userList?.length || 3)].map((_, index) => (
              <InfoContain>
              <Skeleton key={index} />
              </InfoContain>
            ))
          ) : (
              <InfoContain>
              {userList?
              userList.map(item => (

                <InfoBox key={item.userId} height='16vw' >
                  <StFont width='18vw' fontSize='1.5rem' align='start' >{item.username}</StFont>
                  
                  <Info>
                    <CommentBox>
                      <span>이메일</span> <br />
                      <p>{item.email}</p>
                    </CommentBox>

                    <CommentBox>
                      <span>권한</span> <br />
                      <p>{item.role}</p>
                    </CommentBox>
                  
                  <ManagementChange 
                  item={item}
                  />

                  </Info>
                </InfoBox>
              ))
              :
              <Skeleton/>}
            </InfoContain>
            )}
          </StWrapDiv>
        </StOverall>
    </>
  );
}

export default Management;
