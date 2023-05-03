import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HiOutlineMail } from 'react-icons/hi';
import { BsPerson } from 'react-icons/bs';
import { __getAllManagement } from '../../redux/modules/allManagementSlice';
import { getCookie } from '../../shared/cookies';
import Skeleton from '../../components/Skeleton';
import Page from '../../components/Page';
import { StSmallFont, StSpacePagePhoto } from '../Welcome/WelcomeStyled';
import {
  CommentBox,
  Info,
  InfoBox,
  InfoContain,
  StSubTitle,
} from '../Reservation/CalendarStyled';
import { StListTitle } from '../../shared/SpaceStyles';
import ManagementChange from '../../features/user/ManagementChange';

function Management() {
  const { userList, isError } = useSelector(state => state.userList);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const dispatch = useDispatch();
  const navi = useNavigate();

  // token 유무에 따른 가드
  const token = getCookie('token');
  // 관리자 가드
  const role = getCookie('role');
  // 전체조회
  useEffect(() => {
    if (!token) {
      navi('/');
    } else if (role === 'USER') {
      navi('/');
    } else {
      const loadData = async () => {
        try {
          dispatch(__getAllManagement());
        } catch (error) {
          console.error(error);
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
          <StSpacePagePhoto
            width="52px"
            marginTop
            src={`${process.env.PUBLIC_URL}/img/managementIcon.png`}
            alt="managementIcon"
          />
          <div>사용자 관리</div>
        </StListTitle>

        {showSkeleton ? (
          <InfoContain>
            <Skeleton />
          </InfoContain>
        ) : isError ? (
          <div>에러발생 ..⚙️</div>
        ) : (
          <InfoContain>
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
          </InfoContain>
        )}
      </div>
    </Page>
  );
}

export default Management;
