
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Reservation from '../pages/Reservation/Reservation'
import Welcome from '../pages/Welcome'
import Login from '../pages/user/Login'
import SignUpAdmin from '../pages/user/SignUpAdmin'
import SignUpUser from '../pages/user/SignUpUser'
import AdminSpace from "../pages/AdminSpace";
import ReservationDetail from '../pages/Reservation/ReservationDetail'


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation/:id" element={<Reservation />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpAdmin />} />
        <Route path="/signupuser" element={<SignUpUser />} />
        <Route path="/adminspace" element={<AdminSpace />} />
        <Route path="/detail/:userId" element={<ReservationDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
