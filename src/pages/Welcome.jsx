import React from 'react'
import { useNavigate } from "react-router-dom";

function Welcome() {
    
    const navi = useNavigate();

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

