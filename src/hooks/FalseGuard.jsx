import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { cookies } from '../shared/cookies';

function FalseGuard() {
    const navi = useNavigate();

    useEffect(()=> {
        const token = cookies.get("token");
        if(!token) {
            navi('/login')
        }
    },[])
  return ;
}

export default FalseGuard