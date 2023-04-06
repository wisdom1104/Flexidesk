import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Reservation from '../pages/Reservation/Reservation';
import Welcome from '../pages/Welcome';
import Login from '../pages/user/Login';
import SignUpAdmin from '../pages/user/SignUpAdmin';
import SignUpUser from '../pages/user/SignUpUser';
import AdminSpace from '../pages/space/AdminSpace';
import Space from '../pages/space/Space';
import ReservationDetail from '../pages/Reservation/ReservationDetail'
import AdminSpace from '../pages/AdminSpace';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function Router() {
  const [loginStatus, setLoginStatus] = useState(false);
  // const isLogin = useSelector(state => state.login.isLogin);

  // useEffect(() => {
  //   setLoginStatus(isLogin);
  // }, [isLogin]);

  return (
    <BrowserRouter>
      <Routes>
        {/* 토큰이 있는지 없는지 조절가능 설정은 loginSlice에서 해줌 */}
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
        {!loginStatus ? (
          <>
        <Route path="/reservation/:id" element={<Reservation />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpAdmin />} />
        <Route path="/signupuser" element={<SignUpUser />} />
        <Route path="/adminspace" element={<AdminSpace />} />
        <Route path="/space" element={<Space />} />
        <Route path="/detail/:userId" element={<ReservationDetail />} />   
          </>
        ) : null}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;




