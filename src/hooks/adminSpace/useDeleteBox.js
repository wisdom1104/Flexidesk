import { useDispatch } from 'react-redux';
import { __deleteBox } from '../../redux/modules/spaceBoxSlice';

export const useDeleteBox = () => {
  const dispatch = useDispatch();

  const submitDelete = (boxId, spaceId) => {
    dispatch(
      __deleteBox({
        boxId,
        spaceId,
      }),
    );
  };

  return {
    submitDelete,
  };
};
