import React from 'react';
import { useSelector } from 'react-redux';
import { __getReservationDetail } from '../../redux/modules/detail';
import { getCookie } from '../../shared/cookies';
import { useSkltDsptTimeout } from '../../hooks/useTimeout';
import Page from '../../components/Page';
import Skeleton from '../../components/Skeleton';
import { InfoContain, UserList } from './ReservationAllStyle';
import { CardInfo } from '../../components/CardInfo';
import { Card } from '../../components/Card';
import { Row } from '../../components/Flex';
import ReservationDelete from '../../features/reservation/ReservationDelete';
import IconTitle from '../../components/IconTitle';
import Text from '../../components/Text';
import NotFound from '../NotFound';

function ReservationDetail() {
  const { reservationDetail, isError } = useSelector(state => state.detail);

  const token = getCookie('userId');
  const dispatchValue = __getReservationDetail();
  const { showSkeleton } = useSkltDsptTimeout(token, dispatchValue);

  return (
    <>
      <Page>
        <div>
          <IconTitle margin="30px 0px 0px 16px" src="reservation">
            <Text shape="T28_700_34">회의실 예약현황</Text>
          </IconTitle>

          {showSkeleton ? (
            <InfoContain>
              <Skeleton />
            </InfoContain>
          ) : isError ? (
            <NotFound/>
          ) : (
            <InfoContain>
              {reservationDetail?.map(item => (
                <Card height="350px" key={item.username} value={item.username}>
                  <CardInfo color="var(--grey_002)" value={item.mrName}>
                    회의실 이름
                  </CardInfo>
                  <CardInfo
                    color="var(--grey_002)"
                    value={item.start.split('T')[0]}
                  >
                    예약날짜
                  </CardInfo>
                  <CardInfo
                    color="var(--grey_002)"
                    value={`${item.start.split('T')[1]} ~ ${
                      item.end.split('T')[1]
                    }`}
                  >
                    회의 시간
                  </CardInfo>
                  <CardInfo>
                    <Row>
                      <Text color="var(--grey_002)">예약 인원</Text>
                      <UserList
                        width="100px"
                        height="20px"
                        border="none"
                        ml="120px"
                      >
                        {item.userList.map(e => (
                          <Text>{e.username}</Text>
                        ))}
                      </UserList>
                    </Row>
                  </CardInfo>
                  <ReservationDelete reservationId={item.reservationId} />
                </Card>
              ))}
            </InfoContain>
          )}
        </div>
      </Page>
    </>
  );
}

export default ReservationDetail;
