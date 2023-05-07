import { useDispatch } from 'react-redux';
import { __addFloor } from '../../../redux/modules/floorsSlice';

export const useAddFloor = () => {
  const dispatch = useDispatch();

  const onSubmitAddFloor = () => {
    const newFloor = {
      floorName: 'New 층',
    };
    dispatch(__addFloor(newFloor));
  };

  return { onSubmitAddFloor };
};
