import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Reservation from '../pages/Reservation/Reservation';
import Welcome from '../pages/Welcome';
import Login from '../pages/user/Login';
import SignUpAdmin from '../pages/user/SignUpAdmin';
import SignUpUser from '../pages/user/SignUpUser';
import AdminSpace from '../pages/space/AdminSpace';
import Space from '../pages/space/Space';
import ReservationDetail from '../pages/Reservation/ReservationDetail';
import NotFound from '../pages/NotFound';
import Header from '../components/Header'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { cookies } from './cookies';


function Router() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <BrowserRouter>
        <Header/>
        <Routes>
        {/* 토큰이 있는지 없는지 조절가능 설정은 loginSlice에서 해줌 */}
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />

        {/* 로그인하지 않은 사용자만 접근 가능 */}
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUpAdmin />} />
            <Route path="/signupuser" element={<SignUpUser />} />
          </>


        {/* 로그인한 사용자만 접근 가능 */}
          <>
            {/* 일반 사용자 권한만 접근 가능 */}
            <Route path="/reservation/:id" element={<Reservation />} />
            <Route path="/detail/:userId" element={<ReservationDetail />} />

            {/* 관리자 권한만 접근 가능 */}
            <Route path="/adminspace" element={<AdminSpace />} />
            <Route path="/space" element={<Space />} />
          </>
            <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
