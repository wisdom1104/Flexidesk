import React from 'react';
import { useDeleteMultiBox } from '../../hooks/adminSpace/box/useDeleteMultiBox';
import { useEditMultiBox } from '../../hooks/adminSpace/box/useEditMultiBox';
import { useDADMultiBox } from '../../hooks/adminSpace/box/useDADMultiBox';
import { StBox, StBtnBox } from '../../shared/SpaceStyles';
import Text from '../../components/Text';
import MainMintBtn from '../../components/button/MainMintBtn';
import SubMintBtn from '../../components/button/SubMintBtn';
import { Input } from '../../components/Input';

function AdminMultiBoxItem({ multiBox, boardEl, spaceId, multiBoxList }) {
  const { submitDelete } = useDeleteMultiBox();

  const {
    submitEdit,
    isEditMultiBox,
    changeEditModeHandler,
    editMultiBoxName,
    changeNameHandler,
  } = useEditMultiBox(multiBox, spaceId);

  const { elRef, multiBoxMouseDownHandler } = useDADMultiBox(
    spaceId,
    boardEl,
    multiBoxList,
  );

  return (
    <>
      {!isEditMultiBox ? (
        <StBox
          key={multiBox.multiBoxId}
          ref={el => (elRef.current[multiBox.multiBoxId] = el)}
          onMouseDown={e => multiBoxMouseDownHandler(e, multiBox.multiBoxId)}
          transformValue={`translate(${multiBox.x}px, ${multiBox.y}px)`}
        >
          <Text shape="T16_600" color="var(--grey_002)">
            {multiBox.multiBoxName}
          </Text>
          <StBtnBox>
            <MainMintBtn
              h="23px"
              pd="2px 6px"
              br="4px"
              onClick={() => changeEditModeHandler()}
            >
              <Text shape="T14_700_17" color="var(--white)">
                수정
              </Text>
            </MainMintBtn>
            <SubMintBtn
              h="23px"
              pd="2px 6px"
              br="4px"
              onClick={() => {
                submitDelete(multiBox.multiBoxId, spaceId);
              }}
            >
              <Text shape="T14_700_17" color="var(--mint_002)">
                삭제
              </Text>
            </SubMintBtn>
          </StBtnBox>
        </StBox>
      ) : (
        <StBox
          key={multiBox.multiBoxId}
          transformValue={`translate(${multiBox.x}px, ${multiBox.y}px)`}
        >
          <Input
            w="60px"
            h="20px"
            br="2px"
            maxLength={6}
            type="text"
            value={editMultiBoxName}
            onChange={e => changeNameHandler(e.target.value)}
          />
          <StBtnBox>
            <MainMintBtn h="23px" pd="2px 6px" br="4px" onClick={submitEdit}>
              <Text shape="T14_700_17" color="var(--white)">
                완료
              </Text>
            </MainMintBtn>
            <SubMintBtn
              h="23px"
              pd="2px 6px"
              br="4px"
              onClick={() => changeEditModeHandler()}
            >
              <Text shape="T14_700_17" color="var(--mint_002)">
                취소
              </Text>
            </SubMintBtn>
          </StBtnBox>
        </StBox>
      )}
    </>
  );
}

export default AdminMultiBoxItem;
