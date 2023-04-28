import React, { createContext, useEffect, useState } from 'react';
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
  StReserCountBox,
  StReserCountButton,
  ReservationCheckContain,
  FinButton,
  SchContain,
  StSubTitle,
  StIcon,
  ScheduleInput,
  ScheduleUser,
  FontSt,
  ScheduleUsers,
  UserList,
  CheckContainBox,
  StSubmitButton,
} from './CalendarStyled';
import ReservationCheck from './ReservationCheck';
import { Input } from '../../components/Input';
import { Column, Row } from '../../components/Flex';

function ReservationTime({ param, selectDay, mrName }) {
  const now = new Date();
  const date = `${now.getFullYear()}-${(now.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}T`;

  const [isCheckOut, setIsCheckOut] = useState('false');
  const [clickReservation, setClickReservation] = useState([]);
  const [userInfo, setUserInfo] = useState([]); //예약인원에 이름 묶음 state
  const [userIdInfo, setUserIdInfo] = useState([]);
  const { userData } = useSelector(state => state.reservation);

  // const [choseReservationTime, setChoseReservationTime] = useState('false');

  const [count, setCount] = useState(1);
  // const reqData = { start: clickReservation[0], userList: [] };

  //연속되는 시간 추가하기 위한 request정리
  let reqData = [];

  const dataList = () => {
    clickReservation.map((_, index) => {
      reqData.push({ start: clickReservation[index] });
    });
    return reqData;
    // for (let i = 0; i < clickReservation.length; i++) {
    //   reqData.push({ start: clickReservation[i] });
    // }
    // return reqData;
  };

  const reqDatas = { startList: dataList(), userList: userIdInfo };
  const dispatch = useDispatch();

  const { reservation } = useSelector(state => state.reservation);
  const { timeList } = reservation;
  const userId = cookies.get('userId');
  const navi = useNavigate();

  const addCount = () => {
    setCount(count + 1);
  };

  const delCount = () => {
    if (count === 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };

  const onclickHandler = e => {
    if (clickReservation.find(item => item === e.target.value)) {
      return setClickReservation(
        clickReservation.filter(item => item !== e.target.value),
      );
    } else {
      setClickReservation([...clickReservation, e.target.value]);
    }
    setIsCheckOut(!isCheckOut);
    // setChoseReservationTime(!choseReservationTime);
  };

  const userClickHandler = e => {
    if (userInfo.find(item => item === e.target.value)) {
      return (
        setUserInfo(userInfo.filter(item => item !== e.value.tartget)),
        setUserIdInfo(userIdInfo.filter(item => item !== e.target.value))
      );
    } else {
      setUserInfo([...userInfo, e.target.value]);
      setUserIdInfo([...userIdInfo, e.value.target]);
    }
  };

  useEffect(() => {
    if (selectDay) {
      dispatch(__getReservation({ param, selectDay }));
    } else {
      dispatch(__getReservation({ param, selectDay: date.slice(0, -1) }));
    }
    setClickReservation([]);
  }, [selectDay]);

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
            {/* <ScheduleUsers> */}
            {/* <Column> */}
            <Input
              width="280px"
              height="40px"
              margin="0px 10px"
              onChange={e => {
                dispatch(__getUserData(e.target.value));
              }}
            />

            {/* <StReserCountBox>
            <StReserCountButton onClick={delCount}>-</StReserCountButton>
            <div>{count}</div>
            <StReserCountButton onClick={addCount}>+</StReserCountButton>
          </StReserCountBox> */}
            {/* </Column> */}
            {/* </ScheduleUsers> */}
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
