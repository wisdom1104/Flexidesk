import styled from 'styled-components';

export const StListbox = styled.div`
  border-top: 1px solid var(--darkgrey);
  border-bottom: 1px solid var(--darkgrey);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 180px;
  margin: 0px 23px;
`;

export const StSpaceList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 180px;
  height: 500px;
  overflow: scroll;
  overflow-x: hidden;
  gap: 10px;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--darkgrey);
    border-radius: 50px;
  }
`;

export const ClisckedListItem = styled.div`
  background: #def1ef;
  border: 1px solid #b6dfdd;
  border-radius: 8px;
`;

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
  margin: 16px;
  max-width: 200px;
  max-height: 20px;
  overflow: hidden;
  margin-right: 0px;
  background: var(--white);
  border: 1px solid #b4bac6;
  border-radius: 8px;
  align-items: center;
  padding: 12px 24px;
  gap: 67px;
`;

export const SubIcon = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0px;
  margin-left: 16px;
  background: transparent;
  align-items: center;
`;

export const StBox = styled.div`
  color: ${props => props.color || '#8b93a6'};
  position: ${props => props.position || 'absolute'};
  background: ${props => props.background || '#f1f2f4'};
  border: 1px solid ${props => props.color || '#8b93a6'};
  border-radius: 4px;
  width: 90px;
  height: 90px;
  margin: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  gap: 20px;
  transform: ${props => props.transformValue};
  &:hover {
    background: ${props => props.hoverBackground || '#ffffff'};
    border: 1px solid ${props => props.color || '#8b93a6'};
  }
`;

export const StSelect = styled.div`
  width: 130px;
  height: 400px;
  background: #07133b;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0px 29px;
  padding: 10px;
`;

export const StBtnBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  gap: 5px;
`;

export const ModalBackground = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: 50;
`;

export const ModalContain = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--white);
  border-radius: 8px;
  padding: 2px;
  width: 326px;
  height: 489px;
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
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #b6dfdd;
    border-radius: 50px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e0e5e8;
  padding-bottom: 16px;
`;

export const Modalbtn = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StListBtnBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0px 10px;
`;

export const StList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid var(--grey);
  border-radius: 8px;
  width: 290px;
  height: 45px;
  padding: 10px;
  cursor: pointer;
`;

export const StOpenBtn = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StOpenList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background: var(--white);
  border: 1px solid #c9cdd6;
  border-radius: 8px 8px 0px 0px;
  width: 290px;
  height: 45px;
  position: relative;
  padding: 10px;
  cursor: pointer;
`;

export const StInnerList = styled.div`
  box-sizing: border-box;
  width: 290px;
  background: var(--lightgrey);
  border: 1px solid var(--lightgrey);
  border-radius: 0px 0px 8px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
`;

export const StInner = styled.div`
  border-top: 1px solid #e0e5e8;
  height: 47px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 274px;
  cursor: pointer;
`;

export const MoveModalSubTitle = styled.div`
  position: absolute;
  width: ${props => props.width || '52px'};
  height: 17px;
  left: 16px;
  top: 16px;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: var(--darkgrey);
`;

export const MoveModalTitle = styled.div`
  position: absolute;
  width: 142px;
  height: 54px;
  left: 23px;
  top: 41px;
`;

export const MoveModalList = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 16px;
  top: 108px;
  margin-left: 10px;
  padding: 10px 0px;
  width: 140px;
  height: 80px;
  gap: 5px;
  overflow: scroll;
  overflow-x: hidden;
  border-top: 1px solid var(--lightgrey);
  border-bottom: 1px solid var(--lightgrey);
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #b6dfdd;
    border-radius: 50px;
  }
`;
