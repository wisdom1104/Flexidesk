import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCookie } from '../shared/cookies';

export const useSkltDsptTimeout = (token,dispatchValue) => {
  const [showSkeleton, setShowSkeleton] = useState(true);

  const navi = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      navi('/');
    } else {
      const loadData = async () => {
        try {
          dispatch(dispatchValue);
        } catch (error) {
          console.log(error);
        }
      };

      const timer = setTimeout(() => {
        loadData();
        setShowSkeleton(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  return { showSkeleton };
};

export const useSkltTimeout = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const token = getCookie('token');
  const navi = useNavigate();

  useEffect(() => {
    if (!token) {
      navi('/');
    } else {
      const timer = setTimeout(() => {
        setShowSkeleton(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  return {showSkeleton}
}