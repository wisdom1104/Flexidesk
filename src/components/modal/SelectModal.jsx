import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { HiChevronDown } from 'react-icons/hi2';
import { __patchAllManagement } from '../../redux/modules/allManagementSlice';
import {
  ModalFullBackground,
  MoveModal,
  MoveModalSubTitle,
} from '../../shared/SpaceStyles';
import SubMintBtn from '../button/SubMintBtn';
import MainMintBtn from '../button/MainMintBtn';
import Text from '../Text';

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
    dispatch(__patchAllManagement({ userId, role: fav, updateRole: true }));
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
        <SubMintBtn
          onClick={onPatchButtonHandler}
          position="absolute"
          w="80px"
          h="35px"
          left="18px"
          top="121px"
          pd="4px 10px"
        >
          수정하기
        </SubMintBtn>
        <MainMintBtn
          onClick={closeModal}
          position="absolute"
          w="79px"
          h="35px"
          left="100px"
          top="121px"
          pd="4px 10px"
        >
          <Text shape="T14_700_17" color="var(--white)">
            닫기
          </Text>
        </MainMintBtn>
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
color: #15161a;
padding: 12px;
margin-bottom: 45px;

font-weight: 700;
font-size: 16px;
line-height: 19px;

border: 1px solid #65bab6;
border-radius: 8px;
display: grid;
grid-template-columns: 5fr 1fr 1fr;
`;

const DropdownContent = styled.div`
width: 160px;
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
z-index: 1;
margin-top: -45px;

border: 1px solid #65bab6;
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
  background-color: #e9f6f4;
  color: #65bab6;
}
`;