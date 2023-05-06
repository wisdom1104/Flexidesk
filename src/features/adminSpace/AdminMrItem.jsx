import React from 'react';
import { useDeleteMrBox } from '../../hooks/adminSpace/box/useDeleteMrBox';
import { useEditMrBox } from '../../hooks/adminSpace/box/useEditMrBox';
import { useDADMrBox } from '../../hooks/adminSpace/box/useDADMrBox';
import { StBox, StBtnBox } from '../../shared/SpaceStyles';
import Text from '../../components/Text';
import MainMintBtn from '../../components/button/MainMintBtn';
import SubMintBtn from '../../components/button/SubMintBtn';
import { Input } from '../../components/Input';

function AdminMrItem({ mr, mrList, boardEl, spaceId }) {
  const { submitDelete } = useDeleteMrBox();

  const {
    submitEdit,
    isEditMr,
    changeEditModeHandler,
    editMrName,
    changeNameHandler,
  } = useEditMrBox(mr, spaceId);

  const { elRef, mrMouseDownHandler } = useDADMrBox(spaceId, boardEl, mrList);

  return (
    <>
      {!isEditMr ? (
        <StBox
          key={mr.mrId}
          ref={el => (elRef.current[mr.mrId] = el)}
          onMouseDown={e => mrMouseDownHandler(e, mr.mrId)}
          transformValue={`translate(${mr.x}px, ${mr.y}px)`}
        >
          <Text shape="T16_600" color="var(--grey_002)" ta="center">
            {mr.mrName}
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
                submitDelete(mr.mrId, spaceId);
              }}
            >
              <Text shape="T14_700_17" color="var(--mint_002)">
                삭제
              </Text>
            </SubMintBtn>
          </StBtnBox>
        </StBox>
      ) : (
        <StBox key={mr.mrId} transformValue={`translate(${mr.x}px, ${mr.y}px)`}>
          <Input
            w="60px"
            h="20px"
            br="2px"
            maxLength={6}
            type="text"
            value={editMrName}
            onChange={e => {
              changeNameHandler(e.target.value);
            }}
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

export default AdminMrItem;
