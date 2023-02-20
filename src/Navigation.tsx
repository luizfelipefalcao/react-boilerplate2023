import { Routes, Route } from "react-router-dom";

import Header from "./screens/Header";
import Home from "./screens/Home";
import ScreenOne from "./screens/ScreenOne";
import ScreenTwo from "./screens/ScreenTwo";

function Navigation() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/screenone" element={<ScreenOne />} />
        <Route path="/screentwo" element={<ScreenTwo />} />
      </Routes>
    </>
  );
};

export default Navigation;
