import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Row } from "../components/Flex";

const Test1 = () => {
  const [boxes, setBoxes] = useState([
    { id: 1, left: 20, top: 20 },
    { id: 2, left: 20, top: 50 },
  ]);
  const [moveBoxes, setMoveBoxes] = useState([]);
  const [newBoxes, setNewBoxes] = useState([]);
  const elRef = useRef([]);

  //박스 요소를 마우스로 클릭하여 이동할 때 발생하는 이벤트 함수
  //마우스 클릭한 위치와 박스 요소의 현재 위치를 계산하여, 마우스 이동에 따라 박스 요소를 이동
  const handleMouseDown = (e, boxIndex) => {
    const currentBox = boxes[boxIndex];
    //마우스 시작점의 좌표
    const mouseX = e.clientX;
    const mouseY = e.clientY;
// 현재 박스의 위치 정보
    const diffX = mouseX - currentBox.left;
    const diffY = mouseY - currentBox.top;
    //현재 마우스 위치와 클릭한 박스의 초기 위치를 이용하여 새로운 박스의 위치를 계산
    //이후 setBoxes 함수를 이용하여 새로운 상태를 업데이트
    //마우스가 움직일때마다 호출됨.
    const handleMouseMove = (e) => {
      //현재 마우스의 좌표값
      const newMouseX = e.clientX;
      const newMouseY = e.clientY; 
//기존에 선택한 요소의 위치와 마우스 커서 위치 간의 차이 구함
      const newLeft = newMouseX - diffX; 
      const newTop = newMouseY - diffY;

      setMoveBoxes((prevBoxes) => {
        // const moveBoxes = [...prevBoxes]; //이전 상태의 박스 배열을 복사하여 새로운 배열을 생성
        moveBoxes[boxIndex] = { ...currentBox, left: newLeft, top: newTop };
        //현재 선택한 박스의 인덱스에 해당하는 요소의 위치 정보를 새로 계산한 위치로 갱신하여 새로운 상태로 설정
        console.log("-----------------------");
        return moveBoxes;
      });
      return;
    };

    // 이벤트 리스너를 제거
    const handleMouseUp = (e) => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      console.log("222222222222222");
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return;
  };
  //박스 요소를 드래그하여 드롭할 때 발생하는 이벤트 함수
  //드래그한 박스 요소의 id 값을 가져와, 새로운 박스 요소를 생성하여 화면에 추가
  const handleDrop = (e) => {
    e.preventDefault();
    // const boxId = e.dataTransfer.getData("boxId"); //드래그되는 박스의 ID를 가져옴
    // const boxIndex = moveBoxes.findIndex((box) => box.id === Number(boxId));
    //드래그되는 박스의 ID를 통해 boxes 배열에서 해당 박스의 index를 찾음
    const currentBox = moveBoxes;
    console.log("currentBox", currentBox); //-------> 오류 잡아라
    //그 박스의 정보를 새로운 id를 가진 박스 정보로 복제하고
    const newBox = { ...currentBox, id: newBoxes.length + 1 }; //id에 +1을 함
    setNewBoxes((prevBoxes) => [...prevBoxes, newBox]);
    // console.log("newBoxes", newBoxes);
  };

  //박스 요소를 드래그하여 드롭할 때, 드롭할 수 있는 영역 위에 마우스 커서가 위치했을 때 발생하는 이벤트 함수
  //기본 동작을 막아 드롭이 가능한 상태로 만듬
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  //박스 요소를 드래그하기 시작할 때 발생하는 이벤트 함수
  //드래그한 박스 요소의 id 값을 저장
  const handleDragStart = (e, boxId) => {
    e.dataTransfer.setData("boxId", boxId);
  };
  console.log("boxes", boxes);
  console.log("moveBoxes", moveBoxes);
  console.log("newBoxes", newBoxes);

  return (
    <>
      <Row>
        <StSelect>
          <span>test1</span>
          {boxes.map((box, index) => (
            <StBox
              key={box.id}
              ref={(el) => (elRef.current[index] = el)}
              onMouseDown={(e) => handleMouseDown(e, index)}
              style={{ transform: `translate(${box.left}px, ${box.top}px)` }}
              draggable
              onDragStart={(e) => handleDragStart(e, box.id)}
            >
              기존{box.id}
            </StBox>
          ))}
        </StSelect>
        <StBoard onDragOver={handleDragOver} onDrop={handleDrop}>
          {newBoxes.map((box, index) => (
            <StBox
              key={box.id}
              ref={(el) => (elRef.current[index] = el)}
              onMouseDown={(e) => handleMouseDown(e, index)}
              style={{ transform: `translate(${box.left}px, ${box.top}px)` }}
              draggable
              onDragStart={(e) => handleDragStart(e, box.id)}
            >
              추가{box.id}
            </StBox>
          ))}
        </StBoard>
      </Row>
    </>
  );
};

export default Test1;

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
