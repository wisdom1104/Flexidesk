import { useDispatch } from 'react-redux';
import { __addFloor } from '../../../redux/modules/floorsSlice';

// floor 추가
export const useAddFloor = () => {
  const dispatch = useDispatch();

  const submitAddFloor = () => {
    const newFloor = {
      floorName: 'New 층',
    };
    dispatch(__addFloor(newFloor));
  };

  return { submitAddFloor };
};
