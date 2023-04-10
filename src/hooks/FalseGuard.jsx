import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { cookies } from '../shared/cookies';

function FalseGuard() {
    const navi = useNavigate();

    useEffect(()=> {
        const token = cookies.get("token");
        const roll = cookies.get("roll");

        if(token && roll) {
            //일반 사용자만 접근가능
            navi('/space')
        } else if(token && !roll) {
            //사업자만 접근가능
            // navi('/adminspace')
            navi([
                {pathname:'/adminspace'},
                {pathname:'/reservation/:id'},
                {pathname:'/detail/:userId'},
            ])
        }
    },[])

  return ;
}

export default FalseGuard