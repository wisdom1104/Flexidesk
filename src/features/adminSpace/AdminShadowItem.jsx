import React from 'react';
import { StDrag } from '../../shared/SpaceStyles';

function AdminShadowItem({ newMrBoxes, newBoxes, newMultiBoxes, elRef }) {
  return (
    <>
      {/* 회의실 잔상 */}
      {newMrBoxes?.map((box, index) => (
        <StDrag
          key={box.mrId}
          ref={el => (elRef.current[index] = el)}
          style={{ transform: `translate(${box.x}px, ${box.y}px)` }}
        ></StDrag>
      ))}
      {/* 박스 잔상 */}
      {newBoxes?.map((box, index) => (
        <StDrag
          key={box.boxId}
          ref={el => (elRef.current[index] = el)}
          style={{ transform: `translate(${box.x}px, ${box.y}px)` }}
        ></StDrag>
      ))}
      {/* 공용공간 잔상 */}
      {newMultiBoxes?.map((box, index) => (
        <StDrag
          key={box.multiBoxId}
          ref={el => (elRef.current[index] = el)}
          style={{ transform: `translate(${box.x}px, ${box.y}px)` }}
        ></StDrag>
      ))}
    </>
  );
}

export default AdminShadowItem;
