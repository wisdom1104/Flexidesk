import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../shared/cookies';
import { useEffect } from 'react';
import { __getSpaces } from '../../redux/modules/spacesSlice';
import { __getFloors } from '../../redux/modules/floorsSlice';

export const useSrchFloorsAndSpaces = (type, setSelectedSpace) => {
  const { spaces } = useSelector(state => state.spaces);
  const { floors } = useSelector(state => state.floors);
  const dispatch = useDispatch();
  const navi = useNavigate();

  const token = getCookie('token');
  const role = getCookie('role');

  useEffect(() => {
    if (token !== undefined) {
      if (type === 'admin') {
        if (role === 'ADMIN' || role === 'MANAGER') {
          dispatch(__getSpaces());
          dispatch(__getFloors());
        } else {
          navi('/space');
        }
      } else {
        dispatch(__getSpaces());
        dispatch(__getFloors());
      }
    }
    // cleanup 함수
    return () => {
      setSelectedSpace(null);
    };
  }, []);

  return { spaces, floors };
};
