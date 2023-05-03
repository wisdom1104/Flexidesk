import { useDispatch } from 'react-redux';
import { __addSpace } from '../../../redux/modules/spacesSlice';

// space 추가
export const useAddSpace = () => {
  const dispatch = useDispatch();

  const submitAddSpace = () => {
    const newSpace = {
      spaceName: 'New 스페이스',
    };
    dispatch(__addSpace(newSpace));
  };

  return { submitAddSpace };
};
