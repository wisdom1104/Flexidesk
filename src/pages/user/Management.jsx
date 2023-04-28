import React, { useEffect, useState } from 'react';
import { StFont, StSmallFont, StSpacePagePhoto, StWrapDiv } from '../Welcome/WelcomeStyled';
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
import { HiOutlineMail } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";

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
      const loadData = async () => {
        try {
          dispatch(__getAllManagement());
          setShowSkeleton(false);
        } catch (error) {
          console.error(error);
        }
      };

      const timer = setTimeout(() => {
        loadData();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <StOverall>
        <StWrapDiv margin>
          <ReservationTitle>
            <StSpacePagePhoto 
            width='80px'
            marginTop
            src={`${process.env.PUBLIC_URL}/img/managementIcon.png`} alt="managementIcon" />

            <StFont width="60vw" fontSize="2rem" align="start">
              사용자 관리
            </StFont>
          </ReservationTitle>

          <>
            {!isLoading ? (
              <InfoContain>
                <Skeleton />
              </InfoContain>
            ) : isError ? (
              <div>에러가 발생했습니다...</div>
            ) : (
              <InfoContain>
                {userList.map(item => (
                  <InfoBox key={item.userId}>
                    <StFont width="18vw" fontSize="1.5rem" align="start">
                      {item.username}
                    </StFont>

                    <Info>
                      <CommentBox>
                        <StSmallFont width> <HiOutlineMail/>  이메일</StSmallFont> <br />
                        <StSmallFont width>{item.email}</StSmallFont>
                      </CommentBox>

                      <CommentBox>
                        <StSmallFont width><BsPerson/> 권한</StSmallFont> <br />
                        <StSmallFont width>{item.role}</StSmallFont>
                      </CommentBox>

                      <ManagementChange item={item} />
                    </Info>
                  </InfoBox>
                ))}
              </InfoContain>
            )}
          </>
        </StWrapDiv>
      </StOverall>
    </>
  );
}

export default Management;
