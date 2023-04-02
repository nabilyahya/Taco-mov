import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import MoveDetiles from "./pages/MoveDetiles";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<MoveDetiles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
