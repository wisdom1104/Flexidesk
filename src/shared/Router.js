import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Welcome from '../pages/Welcome'
import Login from '../pages/user/Login'
import SignUpAdmin from '../pages/user/SignUpAdmin'
import SignUpUser from '../pages/user/SignUpUser'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpAdmin />} />
        <Route path="/signupuser" element={<SignUpUser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
