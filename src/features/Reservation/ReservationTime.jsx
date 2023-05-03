import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  __addReservation,
  __getReservation,
  __getUserData,
} from '../../redux/modules/reservation';
import { cookies } from '../../shared/cookies';
import {
  StReserTimeButton,
  StReserTimeBox,
  SchContain,
  StSubTitle,
  StIcon,
  ScheduleUser,
  ScheduleUsers,
  UserList,
  CheckContainBox,
  StSubmitButton,
} from '../../pages/Reservation/CalendarStyled';
import ReservationCheck from './ReservationCheck';
import { Input } from '../../components/Input';
import { Column } from '../../components/Flex';

function ReservationTime({ param, selectDay, mrName }) {
  const [userInfo, setUserInfo] = useState([]); //예약인원에 이름 묶음 state
  const [userIdInfo, setUserIdInfo] = useState([]);
  const navi = useNavigate();
  const userId = cookies.get('userId');

  ///////////////////////////////////
  const dispatch = useDispatch();
  const [clickReservation, setClickReservation] = useState([]); //다르지만 존재//
  const now = new Date();

  const date = `${now.getFullYear()}-${(now.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}T`;
  const [isCheckOut, setIsCheckOut] = useState('false');
  //연속되는 시간 추가하기 위한 request정리
  let reqData = [];

  const dataList = () => {
    clickReservation.map((_, index) => {
      reqData.push({ start: clickReservation[index] });
    });
    return reqData;
  };

  const onclickHandler = e => {
    if (clickReservation.find(item => item === e.target.value)) {
      setClickReservation(
        clickReservation.filter(item => item !== e.target.value),
      );
    } else {
      setClickReservation([...clickReservation, e.target.value]);
    }
    setIsCheckOut(!isCheckOut);
  };

  useEffect(() => {
    if (selectDay) {
      dispatch(__getReservation({ param, selectDay }));
    } else {
      dispatch(
        __getReservation({
          param,
          selectDay: date.slice(0, -1),
        }),
      );
    }
    setClickReservation([]);
  }, [selectDay]);

  ///////////////////////////////////

  const { userData } = useSelector(state => state.reservation);
  const { reservation } = useSelector(state => state.reservation);
  const reqDatas = { startList: dataList(), userList: userIdInfo };
  const { timeList } = reservation;

  ///////////////////테스트 하고 있는 주웅 ~~~~//////////
  // useEffect(() => {
  //   // clickReservation 값이 업데이트될 때마다 isSelected 값을 다시 결정
  //   timeList.map((item, index) => {
  //     const isSelected =
  //       clickReservation.includes(
  //         selectDay ? `${selectDay}T${item.start}` : `${date}${item.start}`,
  //       ) ||
  //       (index !== timeList.length - 1 &&
  //         clickReservation.some(
  //           time =>
  //             time >
  //               (selectDay
  //                 ? `${selectDay}T${item.start}`
  //                 : `${date}${item.start}`) &&
  //             time <
  //               (selectDay
  //                 ? `${selectDay}T${timeList[index + 1].start}`
  //                 : `${date}${timeList[index + 1].start}`),
  //         ));
  //     return { ...item, isSelected };
  //   });
  // }, [clickReservation]);
  ///////////////////테스트 하고 있는 주웅 ~~~~//////////

  return (
    <SchContain width="683px">
      <>
        <div>
          <StSubTitle margin="20px 0px 10px 24px">
            <StIcon src={`${process.env.PUBLIC_URL}/img/time.png`} alt="icon" />
            예약 시간
          </StSubTitle>
          <StReserTimeBox width="95%">
            {timeList?.map(item => (
              <StReserTimeButton
                key={item.start}
                onClick={onclickHandler}
                disabled={item.isCheckOut === true}
                value={
                  selectDay
                    ? `${selectDay}T${item.start}`
                    : `${date}${item.start}`
                }
                isSelected={clickReservation.includes(
                  selectDay
                    ? `${selectDay}T${item.start}`
                    : `${date}${item.start}`,
                )}
              >
                {item.start}
              </StReserTimeButton>
            ))}
          </StReserTimeBox>
        </div>
        <ScheduleUsers>
          <Column>
            <StSubTitle margin="0px 0px 20px 5px">
              <StIcon
                src={`${process.env.PUBLIC_URL}/img/user.png`}
                alt="icon"
              />
              사원 검색
            </StSubTitle>
            <Input
              width="280px"
              height="40px"
              margin="0px 10px"
              onChange={e => {
                dispatch(__getUserData(e.target.value));
              }}
            />
          </Column>
          <UserList>
            {userData?.map(item => (
              <ScheduleUser
                onClick={e => {
                  const clickUserId = item.userId;
                  if (userIdInfo.find(item => item.userId === clickUserId)) {
                    return (
                      setUserInfo(
                        userInfo.filter(
                          user => user.username !== item.username,
                        ),
                      ),
                      setUserIdInfo(
                        userIdInfo.filter(user => user.userId !== item.userId),
                      )
                    );
                  } else {
                    setUserInfo([...userInfo, { username: item.username }]);
                    setUserIdInfo([...userIdInfo, { userId: item.userId }]);
                  }
                }}
                key={item.userId}
              >
                {item.username}
              </ScheduleUser>
            ))}
          </UserList>
        </ScheduleUsers>
      </>
      <ReservationCheck
        param={param}
        selectDay={selectDay}
        clickReservation={clickReservation}
        userName={userInfo}
        mrName={mrName}
      />
      <CheckContainBox>
        <StSubmitButton
          marginTop="0px"
          marginLeft="0px"
          onClick={() => {
            dispatch(__addReservation({ reqDatas, param, selectDay }));
            navi(`/detail/${userId}`);
          }}
        >
          예약 완료
        </StSubmitButton>
      </CheckContainBox>
    </SchContain>
  );
}

export default ReservationTime;
