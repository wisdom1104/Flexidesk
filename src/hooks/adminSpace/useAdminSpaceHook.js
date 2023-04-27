import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cookies } from '../../shared/cookies';
import { __getSpaces } from '../../redux/modules/spacesSlice';
import { __getFloors } from '../../redux/modules/floorsSlice';

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
    const token = cookies.get('token');
    const role = cookies.get('role');

    if (token === undefined) {
      navi('/');
    } else if (role === 'ADMIN') {
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
