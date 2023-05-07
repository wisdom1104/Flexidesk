import { useDispatch } from 'react-redux';
import { __deleteBox } from '../../../redux/modules/spaceBoxSlice';

export const useDeleteBox = () => {
  const dispatch = useDispatch();

  const onSubmitDelete = (boxId, spaceId) => {
    dispatch(
      __deleteBox({
        boxId,
        spaceId,
      }),
    );
  };

  return {
    onSubmitDelete,
  };
};
