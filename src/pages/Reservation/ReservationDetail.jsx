import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  __deleteRervation,
  __getReservationDetail,
} from '../../redux/modules/detail';
import { getCookie } from '../../shared/cookies';
import useFalseHook from '../../hooks/useFalseHook';

function ReservationDetail() {
  useFalseHook();
  const dispatch = useDispatch();
  const { reservationDetail } = useSelector(state => state.detail);
  const deleteHandler = id => {
    dispatch(__deleteRervation(id));
    console.log('패치보내기전', id);
  };

  const token = getCookie('userId');
  useEffect(() => {
    if (token) {
      dispatch(__getReservationDetail());
    }
  }, []);

  return (
    <>
      <div>내가 예약한 회의실</div>
      <div>
        {reservationDetail?.map(item => (
          <div key={item.reservationId}>
            <div>{item.username}</div>
            <div>회의실 번호 : {item.mrId}</div>
            <div>
              예약시간 : {item.start}~{item.end}
            </div>
            <div>
              <button>수정</button>
              <button onClick={() => deleteHandler(item.reservationId)}>
                삭제
              </button>
            </div>
            --------------------------------
          </div>
        ))}
      </div>
    </>
  );
}

export default ReservationDetail;
