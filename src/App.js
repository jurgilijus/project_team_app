import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar.js";
import Home from "./Pages/Home";
import Bookshop from "./Pages/Bookshop/bookshop";
import "./App.css";
import UseState1 from "./Pages/toturial/1-useState/final/5-useState-counter";

function App() {
  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/bookshop" element={<Bookshop />} />
          <Route path="/tutorial" element={<UseState1 />} />
        </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;
