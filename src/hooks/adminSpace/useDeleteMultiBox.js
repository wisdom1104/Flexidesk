import { useDispatch } from 'react-redux';
import { __deleteMultiBox } from '../../redux/modules/MultiBoxSlice';

export const useDeleteMultiBox = () => {
  const dispatch = useDispatch();

  const submitDelete = (multiBoxId, spaceId) => {
    dispatch(
      __deleteMultiBox({
        multiBoxId,
        spaceId,
      }),
    );
  };

  return {
    submitDelete,
  };
};
