import React from 'react';
import { useDeleteBox } from '../../hooks/adminSpace/box/useDeleteBox';
import { useEditBox } from '../../hooks/adminSpace/box/useEditBox';
import { useDADBox } from '../../hooks/adminSpace/box/useDADBox';
import Text from '../../components/Text';
import MainMintBtn from '../../components/button/MainMintBtn';
import SubMintBtn from '../../components/button/SubMintBtn';
import { Input } from '../../components/Input';
import { StBox, StBtnBox } from '../../pages/space/SpaceStyles';

function AdminBoxItem({ box, boardEl, spaceId, boxList }) {
  const { onSubmitDelete } = useDeleteBox();

  const {
    onSubmitEdit,
    isEditBox,
    onChangeEditModeHandler,
    editBoxName,
    onChangeNameHandler,
  } = useEditBox(box, spaceId);

  const { elRef, boxMouseDownHandler } = useDADBox(spaceId, boardEl, boxList);

  return (
    <>
      {!isEditBox ? (
        <StBox
          key={box.boxId}
          ref={el => (elRef.current[box.boxId] = el)}
          onMouseDown={e => boxMouseDownHandler(e, box.boxId)}
          transformValue={`translate(${box.x}px, ${box.y}px)`}
        >
          <Text shape="T16_600" color="var(--grey_002)" ta="center">
            {box.boxName}
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
                onSubmitDelete(box.boxId, spaceId);
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
          key={box.boxId}
          transformValue={`translate(${box.x}px, ${box.y}px)`}
        >
          <Input
            w="60px"
            h="20px"
            br="2px"
            maxLength={6}
            type="text"
            value={editBoxName}
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

export default AdminBoxItem;
