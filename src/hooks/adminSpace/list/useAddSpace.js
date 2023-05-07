import { useDispatch } from 'react-redux';
import { __addSpace } from '../../../redux/modules/spacesSlice';

export const useAddSpace = () => {
  const dispatch = useDispatch();

  const onSubmitAddSpace = () => {
    const newSpace = {
      spaceName: 'New 스페이스',
    };
    dispatch(__addSpace(newSpace));
  };

  return { onSubmitAddSpace };
};
