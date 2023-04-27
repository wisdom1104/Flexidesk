import React from 'react';
import AdminSpaceBox from '../../features/adminSpace/AdminSpaceBox';
import { useNavigate } from 'react-router-dom';
import {
  StBoard,
  StBtn,
  StSubBtn,
  StSubHeader,
  Stmainspace,
} from '../../shared/SpaceStyles';
import { Row } from '../../components/Flex';
import AdminList from '../../features/adminSpace/AdminList';
import {
  useBoxs,
  useFloorsAndSpaces,
  useSpaceSelection,
} from '../../hooks/useAdminSpaceHook';
import AdminSelector from '../../features/adminSpace/AdminSelector';
import Page from '../../components/Page';

function AdminSpace() {
  const navi = useNavigate();
  const { spaces, floors } = useFloorsAndSpaces(navi);

  const { mrBoxes, boxes, multiBoxes, elRef, handleDragStart } = useBoxs();

  const { selectedSpace, onClickSpaceListHandler, isModal, setIsModal } =
    useSpaceSelection(spaces);

  return (
    <Page>
      {/* 리스트 영역 */}
      <AdminList
        isModal={isModal}
        setIsModal={setIsModal}
        spaces={spaces}
        floors={floors}
        onClickSpaceListHandler={onClickSpaceListHandler}
      />
      {/* 셀렉터 영역 */}
      <AdminSelector
        mrBoxes={mrBoxes}
        boxes={boxes}
        multiBoxes={multiBoxes}
        elRef={elRef}
        handleDragStart={handleDragStart}
      />
      {/* 보더 영역 */}
      {spaces.length > 0 ? (
        <>
          {selectedSpace && (
            <AdminSpaceBox
              spaceId={selectedSpace.spaceId}
              selectedSpace={selectedSpace}
              handleDragStart={handleDragStart}
              isModal={isModal}
              setIsModal={setIsModal}
              spaces={spaces}
              id={selectedSpace.spaceId}
              mrBoxes={mrBoxes}
              boxes={boxes}
              multiBoxes={multiBoxes}
            />
          )}
        </>
      ) : (
        <>
          {/* 초기 화면 */}
          <Stmainspace>
            <StSubHeader>
              <Row>{/* space name 부분 */}</Row>
              <Row>
                <StSubBtn
                  onClick={() => {
                    setIsModal(!isModal);
                  }}
                >
                  스페이스 관리하기
                </StSubBtn>
                <StBtn onClick={() => navi('/space')}>완료</StBtn>
              </Row>
            </StSubHeader>
            <StBoard>{/* board 부분 */}</StBoard>
          </Stmainspace>
        </>
      )}
    </Page>
  );
}

export default AdminSpace;
