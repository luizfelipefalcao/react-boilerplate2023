import { Routes, Route } from "react-router-dom";

import Header from "../presentation/screens/Header";
import Home from "../presentation/screens/Home";
import ScreenOne from "../presentation/screens/ScreenOne";
import ScreenTwo from "../presentation/screens/ScreenTwo";

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
