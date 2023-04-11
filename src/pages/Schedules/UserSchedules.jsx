import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { __getUserSchedules } from '../../redux/modules/userSchedules';

function UserSchedules() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getUserSchedules());
  });

  return <div>하이</div>;
}

export default UserSchedules;
