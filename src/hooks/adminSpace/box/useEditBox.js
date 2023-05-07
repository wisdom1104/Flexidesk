import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { __editBox } from '../../../redux/modules/spaceBoxSlice';

/**
 * 회의실 이름 수정
 */
export const useEditBox = (box, spaceId) => {
  const dispatch = useDispatch();

  // 변경상태
  const [isEditBox, setisBoxEdit] = useState(false);
  // 변경 이름
  const [editBoxName, setEditBoxName] = useState(box.boxName);

  const onChangeNameHandler = value => {
    setEditBoxName(value);
  };

  const onChangeEditModeHandler = () => {
    setisBoxEdit(pre => !pre);
  };

  const onSubmitEdit = async () => {
    const payload = {
      spaceId,
      boxId: box.boxId,
      boxName: editBoxName,
      x: box.x,
      y: box.y,
    };
    dispatch(__editBox(payload));
    setisBoxEdit(!isEditBox);
  };

  return {
    onSubmitEdit,
    isEditBox,
    onChangeEditModeHandler,
    editBoxName,
    onChangeNameHandler,
  };
};
