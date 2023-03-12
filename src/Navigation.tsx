import { Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import Casting from "./screens/Casting";
import Season1 from "./screens/Seasons/Season1";
import Season2 from "./screens/Seasons/Season2";
import Season3 from "./screens/Seasons/Season3";
import Season4 from "./screens/Seasons/Season4";
import Season5 from "./screens/Seasons/Season5";
import Season6 from "./screens/Seasons/Season6";
import Season7 from "./screens/Seasons/Season7";
import Season8 from "./screens/Seasons/Season8";

function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route path="/casting" element={<Casting />} />
      <Route path="/season-1" element={<Season1 />} />
      <Route path="/season-2" element={<Season2 />} />
      <Route path="/season-3" element={<Season3 />} />
      <Route path="/season-4" element={<Season4 />} />
      <Route path="/season-5" element={<Season5 />} />
      <Route path="/season-6" element={<Season6 />} />
      <Route path="/season-7" element={<Season7 />} />
      <Route path="/season-8" element={<Season8 />} />
    </Routes>
  );
};

export default Navigation;
