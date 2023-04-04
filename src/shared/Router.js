import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AdminSpace from "../pages/AdminSpace";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminspace" element={<AdminSpace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
