import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HiOutlineMail } from 'react-icons/hi';
import { BsPerson } from 'react-icons/bs';
import { __getAllManagement } from '../../redux/modules/allManagementSlice';
import { getCookie } from '../../shared/cookies';
import Skeleton from '../../components/Skeleton';
import Page from '../../components/Page';
import { StSmallFont } from '../welcome/WelcomeStyled';
import {
  CommentBox,
  Info,
  InfoBox,
  StSubTitle,
} from '../reservation/CalendarStyled';
import ManagementChange from '../../features/user/ManagementChange';
import IconTitle from '../../components/IconTitle';
import BackBoard from '../../components/BackBoard';
import { useSkltDsptTimeout } from '../../hooks/useTimeoutHook';

function Management() {
  const { userList, isError } = useSelector(state => state.userList);

  const token = getCookie('token');
  const role = getCookie('role');
  const dispatchValue = __getAllManagement();

  const { showSkeleton } = useSkltDsptTimeout(token, dispatchValue);

  if (role === 'USER') {
    return <div>권한이 없습니다.</div>;
  }

  return (
    <Page>
      <IconTitle src="space" alt="managementIcon" title="사용자 관리" />

      {showSkeleton ? (
        <BackBoard>
          <Skeleton />
        </BackBoard>
      ) : isError ? (
        <div>에러발생 ..⚙️</div>
      ) : (
        <BackBoard>
          {userList.map(item => (
            <InfoBox key={item.userId}>
              <StSubTitle>{item.username}</StSubTitle>
              <Info>
                <CommentBox>
                  <StSmallFont width>
                    <HiOutlineMail /> 이메일
                  </StSmallFont>
                  <br />
                  <StSmallFont width>{item.email}</StSmallFont>
                </CommentBox>

                <CommentBox>
                  <StSmallFont width>
                    <BsPerson /> 권한
                  </StSmallFont>
                  <br />
                  <StSmallFont width>{item.role}</StSmallFont>
                </CommentBox>

                <ManagementChange item={item} />
              </Info>
            </InfoBox>
          ))}
        </BackBoard>
      )}
    </Page>
  );
}

export default Management;
