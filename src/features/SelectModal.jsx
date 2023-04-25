import React, { useState } from 'react';
import styled from 'styled-components';
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

const SelectModal = ({ setIsModal, role }) => {
  const choose = e => {
    setFav(e.target.value);
    setList(false);
  };

  const [list, setList] = useState(false);
  const [fav, setFav] = useState(role);

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <ModalFullBackground>
      <MoveModal>
        <MoveModalSubTitle width="65px">권한수정</MoveModalSubTitle> <br />
        <DropdownMenu>
          <DropdownButton onClick={e => setList(pre => !pre)}>
            <div>{fav}</div>
            <HiChevronDown />
          </DropdownButton>
          {list ? (
            <DropdownContent>
              <DropdownItem onClick={choose} value="ADMIN">
                ADMIN
              </DropdownItem>
              {/* <DropdownItem onClick={choose} value="MANAGER" borderRadius="0">
                MANAGER
              </DropdownItem> */}
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
          onClick={closeModal}
          width="80px"
          height="35px"
          left="18px"
          top="130px"
          padding='8px, 16px, 8px, 16px'
        >
          수정하기
        </MoveModalSubbtn>
        <MoveModalbtn
          onClick={closeModal}
          width="79px"
          height="35px"
          left="100px"
          top="130px"
          padding='8px, 16px, 8px, 16px'
        >
          닫기
        </MoveModalbtn>
      </MoveModal>
    </ModalFullBackground>
  );
};

export default SelectModal;
