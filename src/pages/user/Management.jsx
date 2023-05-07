import React from 'react';
import { useSelector } from 'react-redux';
import { HiOutlineMail } from 'react-icons/hi';
import { InfoContain } from '../reservation/CalendarStyled';
import { getCookie } from '../../shared/cookies';
import { __getAllManagement } from '../../redux/modules/allManagementSlice';
import Skeleton from '../../components/Skeleton';
import Page from '../../components/Page';
import { CardInfo } from '../../components/CardInfo';
import { Card } from '../../components/Card';
import IconTitle from '../../components/IconTitle';
import ManagementChange from '../../features/user/ManagementChange';
import { useSkltDsptTimeout } from '../../hooks/useTimeout';
import Access from '../Access';
import NotFound from '../NotFound';

function Management() {
  const { userList, isError } = useSelector(state => state.userList);

  const token = getCookie('token');
  const role = getCookie('role');
  const dispatchValue = __getAllManagement();

  const { showSkeleton } = useSkltDsptTimeout(token, dispatchValue);

  if (role === 'USER') {
    return <Access />;
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
          <NotFound />
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
