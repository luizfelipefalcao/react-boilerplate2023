import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Header from "./presentation/screens/Header";
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
