import React from 'react';
import {
  StBox,
  StSelect,
  StSelectBox,
  StSelectTitle,
} from '../../shared/SpaceStyles';

function AdminSelector({ mrBoxes, boxes, multiBoxes, elRef, handleDragStart }) {
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
