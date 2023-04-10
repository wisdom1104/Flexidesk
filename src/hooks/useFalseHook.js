import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { cookies } from '../shared/cookies';

function useFalseHook(url) {
    const navi = useNavigate();

    useEffect(()=> {
        const token = cookies.get("token");
        const role = cookies.get("role");
        console.log(role);
//navi 보내버리는 함수 , '갈수있다'라는 의미는 사용x
//조건이 성립할 때 .. 여기서 조정x 컴포넌트에서 조정해주기
        if(token && role) {
            console.log('일반 사용자!!!');
            //일반 사용자만 접근가능
            navi('/space')
        } else if(token && !role) {
            console.log('관리자!!!');
            //사업자만 접근가능
            navi(url)
        }
    },[url])
    return null;
}

export default useFalseHook