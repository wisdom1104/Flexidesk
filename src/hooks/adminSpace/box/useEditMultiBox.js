import { useState } from 'react';
import { __editMultiBox } from '../../../redux/modules/multiBoxSlice';
import { useDispatch } from 'react-redux';

/**
 * 멀티박스 이름 수정
 */
export const useEditMultiBox = (multiBox, spaceId) => {
  const dispatch = useDispatch();

  // 변경상태
  const [isEditMultiBox, setisMultiBoxEdit] = useState(false);
  // 변경 이름
  const [editMultiBoxName, setEditMultiBoxName] = useState(
    multiBox.multiBoxName,
  );

  const onChangeNameHandler = value => {
    setEditMultiBoxName(value);
  };

  const onChangeEditModeHandler = () => {
    setisMultiBoxEdit(pre => !pre);
  };

  const onSubmitEdit = async () => {
    const payload = {
      spaceId,
      multiBoxId: multiBox.multiBoxId,
      multiBoxName: editMultiBoxName,
      x: multiBox.x,
      y: multiBox.y,
    };
    dispatch(__editMultiBox(payload));
    setisMultiBoxEdit(!isEditMultiBox);
  };

  return {
    onSubmitEdit,
    isEditMultiBox,
    onChangeEditModeHandler,
    editMultiBoxName,
    onChangeNameHandler,
  };
};
