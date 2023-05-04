import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from '../pages/welcome/Welcome';
import Login from '../pages/user/Login';
import SignUpAdmin from '../pages/user/SignUpAdmin';
import SignUpUser from '../pages/user/SignUpUser';
import AdminSpace from '../pages/space/AdminSpace';
import Space from '../pages/space/Space';
import ReservationDetail from '../pages/reservation/ReservationDetail';
import NotFound from '../pages/NotFound';
import Header from '../components/Header';
import Calendar from '../pages/reservation/Calendar';
import SchedulesCalendar from '../pages/schedules/SchedulesCalendar';
import SchedulesDetail from '../pages/schedules/SchedulesDetail';
import Management from '../pages/user/Management';
import PathSchedulesCalendar from '../pages/pathScedules/PathSchedulesCalendar';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpAdmin />} />
        <Route path="/signupuser" element={<SignUpUser />} />
        <Route path="/management" element={<Management />} />
        <Route path="/calender/:id" element={<Calendar />} />
        <Route
          path="/schedulescalendar/:userId"
          element={<SchedulesCalendar />}
        />
        <Route path="/scheduledetail/:userId" element={<SchedulesDetail />} />
        <Route
          path="/pathschedules/:scId"
          element={<PathSchedulesCalendar />}
        />
        <Route path="/detail/:userId" element={<ReservationDetail />} />
        <Route path="/adminspace" element={<AdminSpace />} />
        <Route path="/space" element={<Space />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
