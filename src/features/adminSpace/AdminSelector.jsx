import React from 'react';
import { StSelect, StSelectBox, StSelectTitle } from '../../shared/SpaceStyles';

function AdminSelector({ mrBoxes, boxes, multiBoxes, elRef, handleDragStart }) {
  return (
    <StSelect>
      <StSelectTitle>AdminSpace</StSelectTitle>
      {/* 회의실 셀렉터 */}
      <div>
        {mrBoxes.map((box, i) => (
          <StSelectBox
            key={box.mrId}
            ref={el => (elRef.current[i] = el)}
            draggable={true}
            onDragStart={e => handleDragStart(e, box.mrId)}
          >
            {box.inner}
          </StSelectBox>
        ))}
      </div>
      {/* 박스 셀렉터 */}
      <div>
        {boxes.map((box, i) => (
          <StSelectBox
            key={box.boxId}
            ref={el => (elRef.current[i] = el)}
            draggable={true}
            onDragStart={e => handleDragStart(e, box.boxId)}
          >
            {box.inner}
          </StSelectBox>
        ))}
      </div>
      {/* 공용공간 셀렉터 */}
      <div>
        {multiBoxes.map((box, i) => (
          <StSelectBox
            key={box.multiBoxId}
            ref={el => (elRef.current[i] = el)}
            draggable={true}
            onDragStart={e => handleDragStart(e, box.multiBoxId)}
          >
            {box.inner}
          </StSelectBox>
        ))}
      </div>
    </StSelect>
  );
}

export default AdminSelector;
