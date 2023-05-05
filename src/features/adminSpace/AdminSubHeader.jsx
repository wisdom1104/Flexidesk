import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Row } from '../../components/Flex';
import {
  StBtn,
  StSubBtn,
  StSubHeader,
  SubIcon,
  SubTitle,
} from '../../shared/SpaceStyles';

function AdminSubHeader({ space, isModal, setIsModal }) {
  const navigate = useNavigate();

  return (
    <StSubHeader>
      {/* space name 부분 */}
      <Row>
        {space?.map(item => {
          if (item && item.floorId !== null)
            return (
              <Row key={item.spaceId}>
                <SubTitle key={item.floorId}>{item.floorName}</SubTitle>
                <SubIcon>&gt;</SubIcon>
                <SubTitle key={item.spaceId}>{item.spaceName}</SubTitle>
              </Row>
            );
          if (item && item.floorId === null)
            return (
              <SubTitle key={item.spaceId}>
                {/* if(item.floorId) */}
                {item.spaceName}
              </SubTitle>
            );
        })}
      </Row>
      <Row>
        <StSubBtn
          onClick={() => {
            setIsModal(!isModal);
          }}
        >
          스페이스 관리하기
        </StSubBtn>
        <StBtn onClick={() => navigate('/space')}>완료</StBtn>
      </Row>
    </StSubHeader>
  );
}

export default AdminSubHeader;
