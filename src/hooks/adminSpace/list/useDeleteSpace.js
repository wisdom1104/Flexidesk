import { useDispatch } from 'react-redux';
import { __deleteSpace } from '../../../redux/modules/spaceSlice';

export const useDeleteSpace = () => {
  const dispatch = useDispatch();
  const submitDeleteSpace = spaceId => dispatch(__deleteSpace(spaceId));
  return { submitDeleteSpace };
};
