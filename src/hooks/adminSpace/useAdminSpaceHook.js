import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCookie } from '../../shared/cookies';
import { __getSpaces } from '../../redux/modules/spacesSlice';
import { __getFloors } from '../../redux/modules/floorsSlice';
import { __getSpace } from '../../redux/modules/spaceSlice';
import { __deleteMr, __editMr } from '../../redux/modules/spaceMrSlice';
import { __deleteBox, __editBox } from '../../redux/modules/spaceBoxSlice';
import {
  __deleteMultiBox,
  __editMultiBox,
} from '../../redux/modules/MultiBoxSlice';

//space 선택
export function useSpaceSelect(spaces) {
  const [selectedSpace, setSelectedSpace] = useState(null);
  const [isModal, setIsModal] = useState(false);

  // 초기 space 설정
  useEffect(() => {
    setSelectedSpace(spaces[0]);
  }, [spaces]);

  //space 선택 핸들러
  const onClickSpaceListHandler = id => {
    const space = spaces.find(space => space.spaceId === id);
    setSelectedSpace(space);
    setIsModal(!isModal);
  };

  return {
    selectedSpace,
    setSelectedSpace,
    onClickSpaceListHandler,
    isModal,
    setIsModal,
  };
}

//select box 선택
export function useBoxs() {
  const [mrBoxes] = useState([{ mrId: 1, x: 1000, y: 1000, inner: '회의실' }]);
  const [boxes] = useState([{ boxId: 2, x: 1000, y: 1000, inner: '자리' }]);
  const [multiBoxes] = useState([
    { multiBoxId: 3, x: 1000, y: 1000, inner: '공용공간' },
  ]);
  const elRef = useRef([]);
  const handleDragStart = (e, boxId) => {
    e.dataTransfer.setData('boxId', boxId);
  };
  return { mrBoxes, boxes, multiBoxes, elRef, handleDragStart };
}

// space & floor 조회
export function useFloorsAndSpaces(navi) {
  const { spaces } = useSelector(state => state.spaces);
  const { floors } = useSelector(state => state.floors);
  const dispatch = useDispatch();
  // const navi = useNavigate();

  // token 유무에 따른 가드
  useEffect(() => {
    const token = getCookie('token');
    const role = getCookie('role');

    if (token === undefined) {
      navi('/');
    } else if (role === 'ADMIN' || role === 'MANAGER') {
      dispatch(__getSpaces());
      dispatch(__getFloors());
    } else {
      navi('/space');
    }
    // cleanup 함수
    return () => {
      // setSelectedSpace(null);
      window.location.reload();
    };
  }, []);
  return { spaces, floors };
}

// space 조회 & 각 리스트 조회
export function useSpace(dispatch, selectedSpace, id, spaces) {
  const { space } = useSelector(state => state.space);
  // space 조회
  useEffect(() => {
    const foundSpace = spaces.find(space => space.spaceId === id);
    if (foundSpace) {
      dispatch(__getSpace(id));
    }
  }, [selectedSpace]);
  // mrList와 boxList를 계산하는 useEffect
  const [mrList, setMrList] = useState([]);
  const [boxList, setBoxList] = useState([]);
  const [multiBoxList, setMultiBoxList] = useState([]);

  useEffect(() => {
    const newMrList = space?.map(item => item.mrList) || [];
    const newBoxList = space?.map(item => item.boxList) || [];
    const newMultiBoxList = space?.map(item => item.multiBoxList) || [];
    setMrList(newMrList);
    setBoxList(newBoxList);
    setMultiBoxList(newMultiBoxList);
  }, [space]);
  return { space, mrList, boxList, multiBoxList };
}

// 회의실 수정 & 삭제
export function useMrDeleteAndEdit(dispatch, mr, spaceId) {
  // mr 삭제
  const onClickDeleteMrHandler = async mrId => {
    const payload = {
      mrId,
      spaceId,
    };
    dispatch(__deleteMr(payload));
  };
  //mr name 수정
  const [mrEdit, setMrEdit] = useState(false);
  const [editMrName, setEditMrName] = useState(mr.mrName);

  const onEditMrNameHandler = async () => {
    const payload = {
      spaceId,
      mrId: mr.mrId,
      mrName: editMrName,
      x: mr.x,
      y: mr.y,
    };
    dispatch(__editMr(payload));
    setMrEdit(!mrEdit);
  };
  return {
    onClickDeleteMrHandler,
    onEditMrNameHandler,
    mrEdit,
    setMrEdit,
    editMrName,
    setEditMrName,
  };
}

// 자리 수정 & 삭제
export function useBoxDeleteAndEdit(dispatch, box, spaceId) {
  //box 삭제
  const onClickDeleteBoxHandler = async boxId => {
    const payload = {
      boxId,
      spaceId,
    };
    dispatch(__deleteBox(payload));
  };

  //box name 수정
  const [boxEdit, setBoxEdit] = useState(false);
  const [editBoxName, setEditBoxName] = useState(box.boxName);

  const onEditBoxNameHandler = async () => {
    const payload = {
      spaceId,
      boxId: box.boxId,
      boxName: editBoxName,
      x: box.x,
      y: box.y,
    };
    dispatch(__editBox(payload));
    setBoxEdit(!boxEdit);
  };
  return {
    onClickDeleteBoxHandler,
    onEditBoxNameHandler,
    boxEdit,
    setBoxEdit,
    editBoxName,
    setEditBoxName,
  };
}

// 공용공간 수정 & 삭제
export function useMultiBoxDeleteAndEdit(dispatch, multiBox, spaceId) {
  //multiBox 삭제
  const onClickDeleteBoxHandler = async multiBoxId => {
    const payload = {
      multiBoxId,
      spaceId,
    };
    dispatch(__deleteMultiBox(payload));
  };

  //multiBox name 수정
  const [multiBoxEdit, setMultiBoxEdit] = useState(false);
  const [editMultiBoxName, setEditMultiBoxName] = useState(
    multiBox.multiBoxName,
  );

  const onEditBoxNameHandler = async () => {
    const payload = {
      spaceId,
      multiBoxId: multiBox.multiBoxId,
      multiBoxName: editMultiBoxName,
      x: multiBox.x,
      y: multiBox.y,
    };
    dispatch(__editMultiBox(payload));
    setMultiBoxEdit(!multiBoxEdit);
  };
  return {
    onClickDeleteBoxHandler,
    onEditBoxNameHandler,
    multiBoxEdit,
    setMultiBoxEdit,
    editMultiBoxName,
    setEditMultiBoxName,
  };
}
