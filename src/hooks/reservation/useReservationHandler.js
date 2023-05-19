import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCookie } from '../../shared/cookies';
import {
  __addReservation,
  __getUserData,
} from '../../redux/modules/reservationSlice';

export const useReservationHandler = (
  clickReservation,
  setClickReservation,
  userIdInfo,
  setUserIdInfo,
  reqDatas,
  param,
  selectDay,
) => {
  const [isCheckOut, setIsCheckOut] = useState('false');
  const [userInfo, setUserInfo] = useState([]);
  const navi = useNavigate();
  const userId = getCookie('userId');
  const dispatch = useDispatch();

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

  const onSelectUserHandler = item => {
    const clickUserId = item.userId;
    if (userIdInfo.find(item => item.userId === clickUserId)) {
      return (
        setUserInfo(userInfo.filter(user => user.username !== item.username)),
        setUserIdInfo(userIdInfo.filter(user => user.userId !== item.userId))
      );
    } else {
      setUserInfo([...userInfo, { username: item.username }]);
      setUserIdInfo([...userIdInfo, { userId: item.userId }]);
    }
  };

  const onSubmitHandler = () => {
    dispatch(__addReservation({ reqDatas, param, selectDay }));
    navi(`/detail/${userId}`);
  };

  const onChangeHandler = e => {
    dispatch(__getUserData(e.target.value));
  };

  return {
    onclickHandler,
    onSelectUserHandler,
    onSubmitHandler,
    onChangeHandler,
    userInfo,
  };
};
