import { useDispatch } from 'react-redux';
import { __deleteMr } from '../../../redux/modules/spaceMrSlice';

export const useDeleteMrBox = () => {
  const dispatch = useDispatch();

  const onSubmitDelete = (mrId, spaceId) => {
    dispatch(
      __deleteMr({
        mrId,
        spaceId,
      }),
    );
  };

  return {
    onSubmitDelete,
  };
};
