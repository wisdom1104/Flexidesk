import React, { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi2';
import {
  ModalFullBackground,
  MoveModal,
  MoveModalSubTitle,
  MoveModalSubbtn,
  MoveModalbtn,
} from '../shared/SpaceStyles';
import {
  DropdownButton,
  DropdownContent,
  DropdownItem,
  DropdownMenu,
} from '../pages/user/UserStyled';
import { useDispatch } from 'react-redux';
import {  __patchAllManagement } from '../redux/modules/allManagementSlice';

const SelectModal = ({ setIsModal, role, userId }) => {
  const choose = e => {
    setFav(e.target.value);
    setList(false);
  };

  const [list, setList] = useState(false);
  const [fav, setFav] = useState(role);

  const dispatch = useDispatch();

  const closeModal = () => {
    setIsModal(false);
  };

  const onPatchButtonHandler = () => {
    setIsModal(false);
    dispatch(__patchAllManagement({ userId ,role: fav , updateRole:true}));
  };

  return (
    <ModalFullBackground>
      <MoveModal>
        <MoveModalSubTitle width="65px">권한수정</MoveModalSubTitle> <br />
        <DropdownMenu>
          <DropdownButton onClick={e => setList(pre => !pre)}>
            {fav}
            <HiChevronDown />
          </DropdownButton>
          {list ? (
            <DropdownContent>
              <DropdownItem onClick={choose} value="MANAGER">
                MANAGER
              </DropdownItem>

              <DropdownItem
                onClick={choose}
                value="USER"
                borderRadius="0 0 8px 8px"
              >
                USER
              </DropdownItem>
            </DropdownContent>
          ) : null}
        </DropdownMenu>
        <MoveModalSubbtn
          onClick={onPatchButtonHandler}
          width="80px"
          height="35px"
          left="18px"
          top="130px"
          padding="8px, 16px, 8px, 16px"
        >
          수정하기
        </MoveModalSubbtn>
        <MoveModalbtn
          onClick={closeModal}
          width="79px"
          height="35px"
          left="100px"
          top="130px"
          padding="8px, 16px, 8px, 16px"
        >
          닫기
        </MoveModalbtn>
      </MoveModal>
    </ModalFullBackground>
  );
};

export default SelectModal;
