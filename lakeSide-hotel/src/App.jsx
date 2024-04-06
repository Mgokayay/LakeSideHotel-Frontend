import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import ExistingRoom from "./components/room/ExistingRoom.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import EditRoom from "./components/room/EditRoom.jsx";
import AddRoom from "./components/room/AddRoom.jsx";
import Navbar from "./components/layout/Navbar.jsx";

function App() {
  return (
    <>
      <main>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit-room/:roomId" element={<EditRoom />} />
            <Route path="/existing-room" element={<ExistingRoom />} />
            <Route path="/add-room" element={<AddRoom />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
