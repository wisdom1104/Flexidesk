import React from 'react';
import { useDeleteMultiBox } from '../../hooks/adminSpace/box/useDeleteMultiBox';
import { useEditMultiBox } from '../../hooks/adminSpace/box/useEditMultiBox';
import { useDADMultiBox } from '../../hooks/adminSpace/box/useDADMultiBox';
import Text from '../../components/Text';
import MainMintBtn from '../../components/button/MainMintBtn';
import SubMintBtn from '../../components/button/SubMintBtn';
import { Input } from '../../components/Input';
import { StBox, StBtnBox } from '../../pages/space/SpaceStyles';

function AdminMultiBoxItem({ multiBox, boardEl, spaceId, multiBoxList }) {
  const { onSubmitDelete } = useDeleteMultiBox();

  const {
    onSubmitEdit,
    isEditMultiBox,
    onChangeEditModeHandler,
    editMultiBoxName,
    onChangeNameHandler,
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
          <Text shape="T16_600" color="var(--grey_002)" ta="center">
            {multiBox.multiBoxName}
          </Text>
          <StBtnBox>
            <MainMintBtn
              h="23px"
              pd="2px 6px"
              br="4px"
              onClick={() => onChangeEditModeHandler()}
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
                onSubmitDelete(multiBox.multiBoxId, spaceId);
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
            onChange={e => onChangeNameHandler(e.target.value)}
          />
          <StBtnBox>
            <MainMintBtn h="23px" pd="2px 6px" br="4px" onClick={onSubmitEdit}>
              <Text shape="T14_700_17" color="var(--white)">
                완료
              </Text>
            </MainMintBtn>
            <SubMintBtn
              h="23px"
              pd="2px 6px"
              br="4px"
              onClick={() => onChangeEditModeHandler()}
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
