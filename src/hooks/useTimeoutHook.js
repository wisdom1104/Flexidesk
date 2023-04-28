import React, { useEffect, useState } from 'react'
import { cookies } from '../shared/cookies';
import { useNavigate } from 'react-router-dom';

function useTimeoutHook(dispatchFunc) {
    const [showSkeleton, setShowSkeleton] = useState(true);

    const token = cookies.get('token');
    const navi = useNavigate();
    
    useEffect(() => {
        if (!token) {
          navi('/');
        } else {
          const loadData = async () => {
            try {
            dispatchFunc();
            } catch (error) {
              console.log(error);
            }
          };
    
          const timer = setTimeout(() => {
            loadData();
            setShowSkeleton(false);
          }, 2000);
          return () => clearTimeout(timer);
        }
      }, []);

  return {}
}

export default useTimeoutHook
