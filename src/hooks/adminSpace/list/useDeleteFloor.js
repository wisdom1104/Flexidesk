import { useDispatch } from 'react-redux';
import { __deleteFloor } from '../../../redux/modules/floorSlice';

export const useDeleteFloor = () => {
  const dispatch = useDispatch();
  const onSubmitDeleteFloor = floorId => dispatch(__deleteFloor(floorId));
  return { onSubmitDeleteFloor };
};
