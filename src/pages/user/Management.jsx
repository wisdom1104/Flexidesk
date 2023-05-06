import React from 'react';
import { useSelector } from 'react-redux';
import { HiOutlineMail } from 'react-icons/hi';
import { __getAllManagement } from '../../redux/modules/allManagementSlice';
import { getCookie } from '../../shared/cookies';
import Skeleton from '../../components/Skeleton';
import Page from '../../components/Page';
import {
  InfoContain,
} from '../reservation/CalendarStyled';
import ManagementChange from '../../features/user/ManagementChange';
import IconTitle from '../../components/IconTitle';
import { useSkltDsptTimeout } from '../../hooks/useTimeoutHook';
import { CardInfo } from '../../components/CardInfo';
import { Card } from '../../components/Card';

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
      <div>
        <IconTitle
          src="space"
          alt="managementIcon"
          children="사용자 관리하기"
        />
        {showSkeleton ? (
          <InfoContain>
            <Skeleton />
          </InfoContain>
        ) : isError ? (
          <div>에러발생 ..⚙️</div>
        ) : (
          <InfoContain>
            {userList.map(item => (
              <Card key={item.userId} value={item.username}>
                <CardInfo color="var(--grey_002)" value={item.email}>
                  <HiOutlineMail /> 이메일
                </CardInfo>

                <CardInfo color="var(--grey_002)" value={item.role}>
                  <HiOutlineMail /> 권한
                </CardInfo>

                <ManagementChange item={item} />
              </Card>
            ))}
          </InfoContain>
        )}
      </div>
    </Page>
  );
}

export default Management;
