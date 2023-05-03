import React, { useRef } from 'react';
import { StBox, StSelect, StSelectTitle } from '../../shared/SpaceStyles';
import { handleDragStart } from '../../utils/dragStartHandler';
import { useSelectDropBoxs } from '../../hooks/adminSpace/box/useSelectDropBoxs';

function AdminSelector() {
  const { mrBoxes, boxes, multiBoxes } = useSelectDropBoxs();
  const elRef = useRef([]);
  return (
    <StSelect>
      <StSelectTitle>AdminSpace</StSelectTitle>
      {/* 회의실 셀렉터 */}
      <div>
        {mrBoxes.map((box, i) => (
          <StBox
            key={box.mrId}
            ref={el => (elRef.current[i] = el)}
            draggable={true}
            onDragStart={e => handleDragStart(e, box.mrId)}
            position="relative"
          >
            {box.inner}
          </StBox>
        ))}
      </div>
      {/* 박스 셀렉터 */}
      <div>
        {boxes.map((box, i) => (
          <StBox
            key={box.boxId}
            ref={el => (elRef.current[i] = el)}
            draggable={true}
            onDragStart={e => handleDragStart(e, box.boxId)}
            position="relative"
          >
            {box.inner}
          </StBox>
        ))}
      </div>
      {/* 공용공간 셀렉터 */}
      <div>
        {multiBoxes.map((box, i) => (
          <StBox
            key={box.multiBoxId}
            ref={el => (elRef.current[i] = el)}
            draggable={true}
            onDragStart={e => handleDragStart(e, box.multiBoxId)}
            position="relative"
          >
            {box.inner}
          </StBox>
        ))}
      </div>
    </StSelect>
  );
}

export default AdminSelector;
