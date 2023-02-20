import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Navigation from "./Navigation";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </div>
  );
}
