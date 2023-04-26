import React, { useEffect} from 'react';
import {  StFont, StSmallFont, StWrapDiv } from '../Welcome/WelcomeStyled';
import { useDispatch, useSelector } from 'react-redux';
import { __getAllManagement } from '../../redux/modules/allManagementSlice';
import { cookies } from '../../shared/cookies';
import { useNavigate } from 'react-router-dom';
import SelectModal from '../../features/SelectModal';
import { StOverall } from './UserStyled';
import {
  CommentBox,
  Info,
  InfoBox,
  InfoContain,
  ReservationTitle,
} from '../Reservation/CalendarStyled';
import ManagementChange from './ManagementChange';

function Management() {
  const { userList, isLoading, isError } = useSelector(state => state.userList);

  /////////////////////test/////////////////////////////////////
  // const handleRoleUpdate = (userId) => {
  //   const updatedUserList = [...userList];
  //   const updatedUser = updatedUserList.find((user) => user.allManagementId === userId);
  //   TODO: 서버에 업데이트 요청 보내는 로직 추가
  //   setUserList(updatedUserList);
  // };
  /////////////////////test/////////////////////////////////////

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
      dispatch(__getAllManagement());
    }
  }, []);

  return (
    <>
        <StOverall>
          <StWrapDiv>
          <ReservationTitle>
            <StFont width="76vw" fontSize="2rem" align="start">
            사용자 관리
            </StFont>
          </ReservationTitle>
          
            <InfoContain>
              {userList.map(item => (
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
              ))}
            </InfoContain>
          </StWrapDiv>
        </StOverall>
    </>
  );
}

export default Management;
