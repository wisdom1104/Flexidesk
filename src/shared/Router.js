import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Reservation from '../pages/Reservation/Reservation';
import Welcome from '../pages/Welcome/Welcome';
import Login from '../pages/user/Login';
import SignUpAdmin from '../pages/user/SignUpAdmin';
import SignUpUser from '../pages/user/SignUpUser';
import AdminSpace from '../pages/space/AdminSpace';
import Space from '../pages/space/Space';
import ReservationDetail from '../pages/Reservation/ReservationDetail';
import NotFound from '../pages/NotFound';
import Header from '../components/Header';
import React from 'react';
import Calendar from '../pages/Reservation/Calendar';

function Router() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpAdmin />} />
        <Route path="/signupuser" element={<SignUpUser />} />
          <Route path="/calender/:id" element={ <Calendar/>}/>
          <Route path="/detail/:userId" element={<ReservationDetail />} />
          <Route path="/adminspace" element={<AdminSpace />} />
          <Route path="/space" element={<Space />} />
          <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
