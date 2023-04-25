import React, { useState } from "react";
import styled from "styled-components";
import {
  ModalFullBackground,
  MoveModal,
  MoveModalErrorbtn,
  MoveModalSubbtn,
  MoveModalTitle,
  MoveModalbtn,
} from '../features/space/SpaceStyles';


const SelectModal = ({ setIsModal, role }) => {
  const choose = (e) => {
    setFav(e.target.value);
    setList(false);
  };

  const [list, setList] = useState(false);
  const [fav, setFav] = useState(role);
  console.log('fav',fav);

    const closeModal = () => {
    setIsModal(false);
  };

  const openModal = () => {
    setIsModal(true);
  };



  return (
    <ModalFullBackground>
      <MoveModal>
        <MoveModalTitle>권한수정</MoveModalTitle> <br />
    <DropdownMenu>
      <DropdownButton onClick={(e) => setList((pre) => !pre)}>
        <div>{fav}</div>
        {/* <div>▼</div> */}
      </DropdownButton>
      {list ? (
        <DropdownContent>
          <DropdownItem onClick={choose} value="ADMIN">
          ADMIN
          </DropdownItem>
          <DropdownItem onClick={choose} value="MANAGER"
          borderRadius='0'
          >
          MANAGER
          </DropdownItem>
          <DropdownItem onClick={choose} value="USER"
          borderRadius='0 0 8px 8px'
          >
          USER
          </DropdownItem>
        </DropdownContent>
      ) : null}
    </DropdownMenu>
    <MoveModalSubbtn onClick={closeModal}
    width='80px'
    height='33px'
    left= '18px'
    top= '130px'
    >수정하기</MoveModalSubbtn>

    <MoveModalbtn onClick={closeModal}
    width='80px'
    height='33px'
    left= '100px'
    top= '130px'>닫기</MoveModalbtn>

    </MoveModal>
    </ModalFullBackground>
  );
};

export default SelectModal;

const DropdownMenu = styled.div`
  display: inline-block;
  margin-left: 15px;
`;

const DropdownButton = styled.button`
  width: 160px;
  height: 40px;
  background-color: white;
  color: black;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #65BAB6;
  border-radius: 8px;
  /* display: grid;
  grid-template-columns: 1.5fr 1fr 1fr; */
`;

const DropdownContent = styled.div`
  width: 160px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;

  border: 1px solid #65BAB6;
  border-radius: 8px;
`;

const DropdownItem = styled.button`
  color: black;
  width: 160px;
  padding: 12px 16px;
  text-decoration: none;

  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  display: block;
  background-color: #fff;
  border: 1px transparent;
  border-radius: ${props => props.borderRadius || '8px 8px 0 0'};

  &:hover {
    background-color: #E9F6F4;
    color: #65BAB6;
  }
`;

