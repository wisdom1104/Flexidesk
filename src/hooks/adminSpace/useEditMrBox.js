import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { __editMr } from '../../redux/modules/spaceMrSlice';

/**
 * 회의실 이름 수정
 */
export const useEditMrBox = (mr, spaceId) => {
  const dispatch = useDispatch();

  // 변경상태
  const [isEditMr, setisMrEdit] = useState(false);
  // 변경 이름
  const [editMrName, setEditMrName] = useState(mr.mrName);

  const changeNameHandler = value => {
    setEditMrName(value);
  };

  const changeEditModeHandler = () => {
    setisMrEdit(pre => !pre);
  };

  const submitEdit = async () => {
    const payload = {
      spaceId,
      mrId: mr.mrId,
      mrName: editMrName,
      x: mr.x,
      y: mr.y,
    };
    dispatch(__editMr(payload));
    setisMrEdit(!isEditMr);
  };

  return {
    submitEdit,

    // 상태 값
    isEditMr,
    changeEditModeHandler,
    // 이름
    editMrName,
    changeNameHandler,
  };
};
