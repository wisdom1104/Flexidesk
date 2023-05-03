import { useDispatch } from 'react-redux';
import { __addInnerSpace } from '../../../redux/modules/spacesSlice';

export const useAddInnerSpace = () => {
  const dispatch = useDispatch();

  const submitAddInnerSpace = floor => {
    const InnserSpace = {
      floorId: floor.floorId,
      spaceName: 'New 스페이스',
    };
    dispatch(__addInnerSpace(InnserSpace));
  };

  return { submitAddInnerSpace };
};
