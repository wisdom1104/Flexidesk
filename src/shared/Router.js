import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Reservation from '../pages/Reservation/Reservation'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
