import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Row } from "../components/Flex";
import Test1 from "./Test1";
import Test2 from "./Test2";
import Test3 from "./Test3";

const AdminSpace = () => {
  const [boxes, setBoxes] = useState([
    { id: 1, left: 20, top: 20 },
    { id: 2, left: 20, top: 50 },
    { id: 3, left: 20, top: 70 },
  ]);
  const elRef = useRef([]);

  const spaceMouseDownHandler = (e, boxIndex) => {
    const currentBox = boxes[boxIndex];
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const diffX = mouseX - currentBox.left;
    const diffY = mouseY - currentBox.top;

    const spaceMouseMoveHandler = (e) => {
      const newMouseX = e.clientX;
      const newMouseY = e.clientY;

      const newLeft = newMouseX - diffX;
      const newTop = newMouseY - diffY;

      setBoxes((prevBoxes) => {
        const newBoxes = [...prevBoxes];
        newBoxes[boxIndex] = { ...currentBox, left: newLeft, top: newTop };
        console.log("111111111");
        return newBoxes;
      });
    };

    const spaceMouseUpHandler = (e) => {
      document.removeEventListener("mousemove", spaceMouseMoveHandler);
      document.removeEventListener("mouseup", spaceMouseUpHandler);
    };

    document.addEventListener("mousemove", spaceMouseMoveHandler);
    document.addEventListener("mouseup", spaceMouseUpHandler);
    console.log(mouseX, mouseY);
  };

  return (
    <>
      {/* <Test1 /> */}
      {/* <Test2 /> */}
      <Test3 />
      {/* <Row>
        <StSelect>
          {boxes.map((box, index) => (
            <StBox
              key={box.id}
              ref={(el) => (elRef.current[index] = el)}
              onMouseDown={(e) => spaceMouseDownHandler(e, index)}
              style={{ transform: `translate(${box.left}px, ${box.top}px)` }}
            >
              {box.id}
            </StBox>
          ))}
        </StSelect>
        <StBoard></StBoard>
      </Row> */}
    </>
  );
};

export default AdminSpace;
const StBox = styled.div`
  background: steelblue;
  width: 100px;
  height: 100px;
  margin: 10px;
  cursor: grab;
`;
const StSelect = styled.div`
  background: #759573;
  width: 150px;
  height: 700px;
  padding: 10px;
`;

const StBoard = styled.div`
  display: flex;
  background: #867395;
  width: 700px;
  height: 700px;
  margin: 10px;
`;
