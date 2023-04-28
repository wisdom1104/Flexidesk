import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { cookies } from '../../shared/cookies';

function useTrueHook() {
    const navi = useNavigate();

    useEffect(()=> {
        const token = cookies.get("token");
        if(token) {
            navi('/')
        }
    },[])
  return ;
}

export default useTrueHook