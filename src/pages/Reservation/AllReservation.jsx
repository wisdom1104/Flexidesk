import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { __getAllReservation } from '../../redux/modules/allReservationSlice';
import { cookies } from '../../shared/cookies';

function AllReservation() {
    const { reservationList, isLoading, isError } = useSelector((state) => state.reservationList);
    // console.log(reservationList.data.reservationList);

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(__getAllReservation());
    },[])

    return (
    <div>
        안녕
        {reservationList.map(item => (
            <div key={item.id}>
                이름:
                {item.username} <br />
                예약:
                {item.start.split('T')[0]} {item.start.split('T')[1]} - <br /> 
                {item.end.split('T')[0]} {item.end.split('T')[1]} <br /><br />
            </div>
        ))}
        </div>
  )
}

export default AllReservation