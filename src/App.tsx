import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Header from "./screens/Header";
import Navigation from "./Navigation";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="Navigation">
          <Navigation />
        </div>
      </BrowserRouter>
    </div>
  );
}
