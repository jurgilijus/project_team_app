import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar.js";
import Home from "./Pages/Home";
import Bookshop from "./Pages/Bookshop/bookshop";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/bookshop" element={<Bookshop />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
