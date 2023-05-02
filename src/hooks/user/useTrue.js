import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCookie } from '../../shared/cookies';

function useTrue() {
    const navi = useNavigate();

    useEffect(()=> {
        const token = getCookie("token");
        if(token) {
            navi('/')
        }
    },[])
  return ;
}

export default useTrue