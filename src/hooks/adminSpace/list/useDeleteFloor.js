import { useDispatch } from 'react-redux';
import { __deleteFloor } from '../../../redux/modules/floorSlice';

// floor 삭제
export const useDeleteFloor = () => {
  const dispatch = useDispatch();
  const submitDeleteFloor = floorId => dispatch(__deleteFloor(floorId));
  return { submitDeleteFloor };
};
