import React, { useEffect, useState } from 'react';
import { StBackground, StSmallFont, StWrapDiv } from '../Welcome/WelcomeStyled';
import { useDispatch, useSelector } from 'react-redux';
import { __getAllManagement } from '../../redux/modules/allManagementSlice';
import { cookies } from '../../shared/cookies';
import { useNavigate, useParams } from 'react-router-dom';
import SelectModal from '../../features/SelectModal';
import { StOverall } from './UserStyled';
import {
  CommentBox,
  Info,
  InfoBox,
  InfoContain,
} from '../Reservation/CalendarStyled';
import ManagementChange from './ManagementChange';

function Management() {
  const { userList, isLoading, isError } = useSelector(state => state.userList);
  // const userId = userList[0].userId
  // console.log(userId);

  /////////////////////test/////////////////////////////////////
  const [selectedUserId, setSelectedUserId] = useState(null);
  console.log('userId->>>>>>>>>>', selectedUserId);

  const { userId } = useParams();

  useEffect(() => {
    if (userId) {
      openModal(userId);
    }
  }, [userId]);

  // const handleRoleUpdate = (userId) => {
  //   const updatedUserList = [...userList];
  //   const updatedUser = updatedUserList.find((user) => user.allManagementId === userId);
  //   TODO: 서버에 업데이트 요청 보내는 로직 추가
  //   setUserList(updatedUserList);
  // };
  /////////////////////test/////////////////////////////////////

  const [isModal, setIsModal] = useState(false);

  const openModal = userId => {
    setSelectedUserId(userId);
    setIsModal(true);
  };

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
      <StBackground>
        <StOverall>
          <StWrapDiv>
            <StSmallFont>사용자 관리</StSmallFont>

            <InfoContain>
              {userList.map(item => (
                <InfoBox key={item.allManagementId}>
                  {item.userId}
                  <Info>
                    <CommentBox>
                      <span>이메일</span> <br />
                      <p>{item.email}</p>
                    </CommentBox>

                    <CommentBox>
                      <span>이름</span> <br />
                      <p>{item.username}</p>
                    </CommentBox>

                    <CommentBox>
                      <span>권한</span> <br />
                      <p>{item.role}</p>
                    </CommentBox>
                  </Info>
                  <ManagementChange 
                  item={item}
                  openModal={openModal}
                  isModal={isModal}
                  setIsModal={setIsModal}
                  selectedUserId={selectedUserId}
                  />
                  {/* <button onClick={() => openModal(item.allManagementId)}>
                    권한 수정
                  </button>
                  {isModal && selectedUserId === item.allManagementId && (
                    <SelectModal
                      setIsModal={setIsModal}
                      role={item.role}
                    ></SelectModal>
                  )}
                  <button>인원 삭제</button> */}
                </InfoBox>
              ))}
            </InfoContain>
          </StWrapDiv>
        </StOverall>
      </StBackground>
    </>
  );
}

export default Management;
