import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { cookies } from '../shared/cookies';
import styled from 'styled-components';
import Slider from '../features/Slider';
import TrueGrard from '../hooks/TrueGuard'

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

          {/* <Slider/> */}

        </div>
      )
}

export default Welcome
