import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getAllReservation } from '../../redux/modules/allReservationSlice';

function AllReservation() {
  const { reservationList } = useSelector(
    state => state.reservationList,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getAllReservation());
  }, []);

  return (
    <div>
      {reservationList.map(item => (
        <div key={item.reservationId}>
          이름:
          {item.username} <br />
          회의실 번호:
          {item.mrId} <br />
          예약:
          {item.start.split('T')[0]} {item.start.split('T')[1]} - <br />
          {item.end.split('T')[0]} {item.end.split('T')[1]} <br />
          <br />
        </div>
      ))}
    </div>
  );
}

export default AllReservation;
