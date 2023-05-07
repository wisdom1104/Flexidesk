import React, { useRef } from 'react';
import { useSelectDropBoxs } from '../../hooks/adminSpace/box/useSelectDropBoxs';
import { handleDragStart } from '../../utils/dragStartHandler';
import Text from '../../components/Text';
import { StBox, StSelect } from '../../pages/space/SpaceStyles';

function AdminSelector() {
  const { mrBoxes, boxes, multiBoxes } = useSelectDropBoxs();
  const elRef = useRef([]);
  return (
    <StSelect>
      <Text shape="T14_600" color="var(--white)">
        AdminSpace
      </Text>
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
