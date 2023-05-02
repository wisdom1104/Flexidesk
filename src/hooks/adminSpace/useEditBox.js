import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { __editBox } from '../../redux/modules/spaceBoxSlice';

/**
 * 회의실 이름 수정
 */
export const useEditBox = (box, spaceId) => {
  const dispatch = useDispatch();

  // 변경상태
  const [isEditBox, setisBoxEdit] = useState(false);
  // 변경 이름
  const [editBoxName, setEditBoxName] = useState(box.boxName);

  const changeNameHandler = value => {
    setEditBoxName(value);
  };

  const changeEditModeHandler = () => {
    setisBoxEdit(pre => !pre);
  };

  const submitEdit = async () => {
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
    submitEdit,

    // 상태 값
    isEditBox,
    changeEditModeHandler,
    // 이름
    editBoxName,
    changeNameHandler,
  };
};
