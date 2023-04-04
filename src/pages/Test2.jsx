import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Row } from "../components/Flex";

const Test2 = () => {
  const [boxes, setBoxes] = useState([
    { id: 1, left: 20, top: 20 },
    { id: 2, left: 20, top: 50 },
  ]);
  const [moveBoxes, setMoveBoxes] = useState([]);
  const [newBoxes, setNewBoxes] = useState([]);

  // Refs to hold the refs of the box elements
  const elRef = useRef([]);
//----------------------------------------------------------
  const handleMouseDown = (e, boxIndex) => {
    const currentBox = boxes[boxIndex];
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const diffX = mouseX - currentBox.left;
    const diffY = mouseY - currentBox.top;

    const handleMouseMove = (e) => {
      const newMouseX = e.clientX;
      const newMouseY = e.clientY;

      const newLeft = newMouseX - diffX;
      const newTop = newMouseY - diffY;

      setMoveBoxes((prevBoxes) => {
        // Copying previous boxes array and returning a new array with updated box position
        const newBoxes = [...prevBoxes];
        newBoxes[boxIndex] = { ...currentBox, left: newLeft, top: newTop };
        console.log("22222222222222");
        return newBoxes;
      });
    };
    const handleMouseUp = (e) => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const boxId = e.dataTransfer.getData("boxId");
    const boxIndex = moveBoxes.findIndex((box) => box.id === Number(boxId));
    const currentBox = moveBoxes[boxIndex];
    const newBox = { ...currentBox, id: newBoxes.length + 1 };
    setNewBoxes((prevBoxes) => [...prevBoxes, newBox]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragStart = (e, boxId) => {
    e.dataTransfer.setData("boxId", boxId);
  };

//----------------------------------------------------------

  const spaceMouseDownHandler = (e, boxIndex) => {
    const currentBox = newBoxes[boxIndex];
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const diffX = mouseX - currentBox.left;
    const diffY = mouseY - currentBox.top;

    const spaceMouseMoveHandler = (e) => {
      const newMouseX = e.clientX;
      const newMouseY = e.clientY;

      const newLeft = newMouseX - diffX;
      const newTop = newMouseY - diffY;

      setNewBoxes((prevBoxes) => {
        const newBoxes = [...prevBoxes];
        newBoxes[boxIndex] = { ...currentBox, left: newLeft, top: newTop };
        console.log("111111111");
        document.addEventListener("mouseup", spaceMouseUpHandler);
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
    console.log("boxes", boxes);
    console.log("moveBoxes", moveBoxes);
    console.log("newBoxes", newBoxes);
  };

//----------------------------------------------------------

  return (
    <>
      <Row>
        <StSelect>
          <span>test2</span>
          {boxes.map((box, i) => (
            <StBox
              key={box.id}
              ref={(el) => (elRef.current[i] = el)}
              draggable={true}
              onMouseDown={(e) => handleMouseDown(e, i)}
              onDragStart={(e) => handleDragStart(e, box.id)}
              left={box.left}
              top={box.top}
            >
              {box.id}
            </StBox>
          ))}
        </StSelect>
        <StBoard
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          left={200}
          top={20}
        >
          {newBoxes.map((box, index) => (
            <StBox
              key={box.id}
              ref={(el) => (elRef.current[index] = el)}
              onMouseDown={(e) => spaceMouseDownHandler(e, index)}
              onDragStart={(e) => handleDragStart(e, box.id)}
              style={{ transform: `translate(${box.left}px, ${box.top}px)` }}
            >
              {box.id}
            </StBox>
          ))}
        </StBoard>
      </Row>
    </>
  );
};

export default Test2;

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
  flex-wrap: wrap;
  background: #867395;
  width: 700px;
  height: 700px;
  margin: 10px;
`;
