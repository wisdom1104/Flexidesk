import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { cookies } from '../shared/cookies';

function TrueGuard() {
    const navi = useNavigate();

    useEffect(()=> {
        const token = cookies.get("token");
        if(token) {
            navi('/welcome')
        }
    },[])
  return ;
}

export default TrueGuard