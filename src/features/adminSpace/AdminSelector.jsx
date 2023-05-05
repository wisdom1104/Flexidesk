import React, { useRef } from 'react';
import { handleDragStart } from '../../utils/dragStartHandler';
import { useSelectDropBoxs } from '../../hooks/adminSpace/box/useSelectDropBoxs';
import { StBox, StSelect, StSelectTitle } from '../../shared/SpaceStyles';
import Text from '../../components/Text';

function AdminSelector() {
  const { mrBoxes, boxes, multiBoxes } = useSelectDropBoxs();
  const elRef = useRef([]);
  return (
    <StSelect>
      <Text shape="T14_600" color="var(--white)">
        AdminSpace
      </Text>
      {/* 회의실 셀렉터 */}
      {mrBoxes.map((box, i) => (
        <StBox
          key={box.mrId}
          ref={el => (elRef.current[i] = el)}
          draggable={true}
          onDragStart={e => handleDragStart(e, box.mrId)}
          position="relative"
        >
          <Text shape="T16_600" color="var(--grey_002)">
            {box.inner}
          </Text>
        </StBox>
      ))}
      {/* 박스 셀렉터 */}
      {boxes.map((box, i) => (
        <StBox
          key={box.boxId}
          ref={el => (elRef.current[i] = el)}
          draggable={true}
          onDragStart={e => handleDragStart(e, box.boxId)}
          position="relative"
        >
          <Text shape="T16_600" color="var(--grey_002)">
            {box.inner}
          </Text>
        </StBox>
      ))}
      {/* 공용공간 셀렉터 */}
      {multiBoxes.map((box, i) => (
        <StBox
          key={box.multiBoxId}
          ref={el => (elRef.current[i] = el)}
          draggable={true}
          onDragStart={e => handleDragStart(e, box.multiBoxId)}
          position="relative"
        >
          <Text shape="T16_600" color="var(--grey_002)">
            {box.inner}
          </Text>
        </StBox>
      ))}
    </StSelect>
  );
}

export default AdminSelector;
