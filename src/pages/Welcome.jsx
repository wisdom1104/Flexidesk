import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { cookies } from '../shared/cookies';

function Welcome() {
    
    const navi = useNavigate();
    
    // 가드
    useEffect(() => {
    const token = cookies.get("token");
    if (token) {
      navi("/");
    }
  }, []);

    return (
        <div>
          <h1>웰컴페이지</h1>
          <button onClick={()=> {
            navi('/signup')
          }}>관리자</button>
          <button onClick={()=> {
            navi('/signupuser')
          }}>일반</button>
        </div>
      )
}

export default Welcome

