import styled from 'styled-components';

//space 페이지-----------------------------------------------------------
export const StSpace = styled.div`
  position: relative;
  /* width: 1440px;
  height: 810px; */
  /* width: 100vw; */
  height: 100vh;
  max-width: 1200px;
  min-width: 800px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  gap: 10px;
`;

// space 리스트
export const StSpaceList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 10px;
  margin: 16px;
  /* position: absolute; */
  min-width: 213px;
  /* height: 312px; */
  height: 530px;

  overflow: scroll;
  overflow-x: hidden;
  gap: 10px;
  /* 스크롤바 스타일 변경 */
  ::-webkit-scrollbar {
    width: 5px; /* 스크롤바 너비 */
  }

  /* 스크롤바 썸네일 스타일 변경 */
  ::-webkit-scrollbar-thumb {
    background-color: #b6dfdd;
    border-radius: 50px; /* 스크롤바 모양 */
  }
`;

export const StListTitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: -0.03em;
  color: #000000;
  margin: 16px;

  /* color: #ffffff; */
`;

export const SpaceInnerList = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  gap: 10px;
  margin-top: 20px;
`;

export const ListItem = styled.div`
  cursor: pointer;
  padding: 5px 10px;
`;

export const ListFloor = styled.div`
  cursor: default;
  padding: 5px 10px;
`;

export const ClisckedListItem = styled.div`
  cursor: pointer;
  padding: 5px 10px;
  background: #def1ef;
  border: 1px solid #b6dfdd;
  border-radius: 8px;
`;

export const EditInput = styled.input`
  padding: 5px 10px;
`;

// space 서브헤더+보더
export const Stmainspace = styled.div`
  position: relative;
  /* width: 1162px; */
  height: 686px;
  /* width: 60.5208vw; */
  /* width: 100%; */
  min-width: 1020px;
  /* height: 35.7292vh; */
  /* background: #f4fbf9; */
  background: steelblue;
  border-radius: 8px;
  margin-top: 16px;
`;

// 서브 헤더 부분
export const StSubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 77px;
`;

export const SubTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 67px;
  margin: 16px;
  margin-right: 0px;
  background: #ffffff;
  border: 1px solid #b4bac6;
  border-radius: 8px;
  align-items: center;
  padding: 12px 24px;
  gap: 67px;
`;

export const SubIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 16px 0px;
  margin-left: 16px;
  background: transparent;
  align-items: center;
`;

export const StBtn = styled.button`
  //버튼
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 5px;
  width: 107px;
  height: 43px;
  background: #65bab6;
  border-radius: 8px;
  border: none;
  margin: 0px 16px;
  //글자
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
  color: #ffffff;
`;

//보더 부분
export const StBoard = styled.div`
  position: relative;
  /* width: 1130px; */
  height: 593px;
  /* width: 58.8542vw; */
  width: 97%;
  min-width: 989.93px;
  /* height: 30.8854vh; */
  background: #fcfcfc;
  box-shadow: 0px 5px 40px rgba(140, 159, 157, 0.25);
  border-radius: 8px;
  margin: auto;
`;

// 회의실
export const StMr = styled.div`
  //글자
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #8b93a6;
  //박스
  position: absolute;
  background: #f1f2f4;
  border: 1px solid #8b93a6;
  border-radius: 4px;
  width: 90px;
  height: 90px;
  margin: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  &:hover {
    background: #8b93a6;
    color: #f1f2f4;
  }
`;

// 박스
export const StBox = styled.div`
  //글자
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #8b93a6;
  //박스
  position: absolute;
  background: #f1f2f4;
  border: 1px solid #8b93a6;
  border-radius: 4px;
  width: 90px;
  height: 90px;
  margin: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  &:hover {
    background: #8b93a6;
    color: #f1f2f4;
  }
`;

// 유저 있는 박스
export const StUseBox = styled.div`
  //글자
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #2ed775;

  //박스
  position: absolute;
  background: #caf5dc;
  border: 1px solid #2ed775;
  border-radius: 4px;
  width: 90px;
  height: 90px;
  margin: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  &:hover {
    background: #8b93a6;
    color: #f1f2f4;
  }
  &:focus {
    background: #2ed775;
    border: 1px solid #2ed775;
    color: #ffffff;
  }
`;

// 유저네임
export const StUser = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #5c6373;
`;

// Admin space 페이지 ------------------------------------------
// select 박스
export const StSelect = styled.div`
  width: 130px;
  height: 346px;
  background: #07133b;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 50px 29px;
`;

export const StSelectTitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #ffffff;
  margin: 16px 13px;
`;

export const StSelectBox = styled.div`
  //글자
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #8b93a6;
  //박스
  background: #f1f2f4;
  border: 1px solid #8b93a6;
  border-radius: 4px;
  width: 90px;
  height: 90px;
  margin: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  &:hover {
    background: #8b93a6;
    color: #f1f2f4;
  }
`;
// 서브 헤더
export const StSubBtn = styled.button`
  //버튼
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 5px;
  width: 107px;
  height: 43px;
  background: #def1ef;
  border: 1px solid #65bab6;
  border-radius: 8px;
  //글자
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
  color: #65bab6;
`;

// 회의실
export const StDropMr = styled.div`
  //글자
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #8b93a6;
  //박스
  position: absolute;
  background: #f1f2f4;
  /* background: #fab8de; */
  border: 1px solid #8b93a6;
  border-radius: 4px;
  width: 90px;
  height: 90px;
  margin: 10px;
  cursor: grab;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  &:hover {
    background: #8b93a6;
    color: #f1f2f4;
  }
`;

// 박스
export const StDropBox = styled.div`
  //글자
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #8b93a6;
  //박스
  position: absolute;
  background: #f1f2f4;
  /* background: #ead089; */
  border: 1px solid #8b93a6;
  border-radius: 4px;
  width: 90px;
  height: 90px;
  margin: 10px;
  cursor: grab;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  &:hover {
    background: #8b93a6;
    color: #f1f2f4;
  }
`;

//버튼들
export const StBtnBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  gap: 5px;
`;
//수정 & 완료 버튼
export const BoxBtn = styled.button`
  //버튼
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 7px;
  height: 23px;
  background: #5c6373;
  border: 0.5px solid #5c6373;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  //글자
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  color: #ffffff;
  &:hover {
    background: #ffffff;
    color: #5c6373;
    border: 0.5px solid #5c6373;
  }
`;
//삭제 & 취소 버튼
export const BoxSubBtn = styled.button`
  //버튼
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 7px;
  height: 23px;
  background: #f1f2f4;
  border: 0.5px solid #5c6373;
  border-radius: 4px;
  cursor: pointer;
  //글자
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  color: #5c6373;
  &:hover {
    background: #5c6373;
    color: #f1f2f4;
    border: 0.5px solid #5c6373;
  }
`;

//잔상
export const StDrag = styled.div`
  background: #8b93a6;
  border-radius: 4px;
  opacity: 0.2;
  width: 90px;
  height: 90px;
  margin: 10px;
  cursor: grab;
  position: absolute;
  cursor: pointer;
`;

// admin space 모달창 ---------------
export const ModalBackground = styled.div`
  position: fixed;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  background: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: 50;
`;

export const Modal = styled.div`
  position: absolute;
  /* top: 134px; */
  /* left: 802px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
  border-radius: 8px;
  padding: 2px;
  width: 322px;
  /* height: 445px; */
  height: 620px;
  margin: 20px;
`;

export const ModalList = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  padding: 22px;
  width: 100%;
  height: 100%;
  gap: 20px;
  box-sizing: border-box;
  overflow: scroll;
  overflow-x: hidden;

  /* 스크롤바 스타일 변경 */
  ::-webkit-scrollbar {
    width: 5px; /* 스크롤바 너비 */
  }

  /* 스크롤바 썸네일 스타일 변경 */
  ::-webkit-scrollbar-thumb {
    background-color: #b6dfdd;
    border-radius: 50px; /* 스크롤바 모양 */
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e0e5e8;
  padding-bottom: 16px;
`;

export const ModalTitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #314563;
`;

export const Modalbtn = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const InnerList = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  gap: 20px;
`;

//유저 이동 모달 --------------------------------------------
export const MoveModalBackground = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  background: rgba(0, 0, 0, 0.2);
  /* opacity: 0.3; */
  top: 0px;
  z-index: 50;
  box-sizing: border-box;
  height: 593px;
  min-width: 990px;
  max-width: 990px;

  /* min-width: 989.93px; */
  /* height: 30.8854vh; */
  /* background: #fcfcfc; */
  /* box-shadow: 0px 5px 40px rgba(140, 159, 157, 0.25); */
  border-radius: 8px;
  margin: auto;
`;

export const MoveModal = styled.div`
  position: absolute;
  /* top: 134px; */
  /* left: 802px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
  border: 1px solid #def1ef;
  box-shadow: 0px 5px 40px rgba(140, 159, 157, 0.25);
  border-radius: 8px;
  padding: 2px;
  width: 188px;
  height: 174px;
`;
export const MoveModalSubTitle = styled.div`
  position: absolute;
  width: 52px;
  height: 17px;
  left: 16px;
  top: 16px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #8b93a6;
`;

export const MoveModalTitle = styled.div`
  position: absolute;
  width: 142px;
  height: 54px;
  left: 23px;
  top: 41px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: #07133b;
`;

export const MoveModalbtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 5px;
  position: absolute;
  width: 61px;
  height: 41px;
  left: 16px;
  top: 117px;
  background: #65bab6;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  //글자
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  color: #ffffff;
`;

export const MoveModalSubbtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 5px;
  position: absolute;
  width: 87px;
  height: 41px;
  left: 85px;
  top: 117px;
  background: #def1ef;
  border: 1px solid #65bab6;
  border-radius: 8px;
  cursor: pointer;
  //글자
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  color: #65bab6;
`;

export const MoveModalErrorbtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 5px;
  position: absolute;
  width: 157px;
  height: 41px;
  left: 16px;
  top: 117px;
  background: #65bab6;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  //글자
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  color: #ffffff;
`;
