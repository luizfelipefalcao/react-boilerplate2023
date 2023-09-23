import { Routes, Route } from "react-router-dom";

import Home from "./presentation/screens/Home";
import Red from "./presentation/screens/Red";
import Blue from "./presentation/screens/Blue";

function Navigation() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/red" element={<Red />} />
      <Route path="/blue" element={<Blue />} />
    </Routes>
  );
};

export default Navigation;
