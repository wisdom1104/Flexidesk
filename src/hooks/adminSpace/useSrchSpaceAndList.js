import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getSpace } from '../../redux/modules/spaceSlice';

export const useSrchSpaceAndList = (selectedSpace, spaceId, spaces) => {
  const dispatch = useDispatch();
  const { space } = useSelector(state => state.space);
  // space 조회
  useEffect(() => {
    const foundSpace = spaces.find(space => space.spaceId === spaceId);
    if (foundSpace) {
      dispatch(__getSpace(spaceId));
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
};
