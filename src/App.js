import React from "react";
// import Login from "./components/Login";
import './App.css'
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="backgroundPic">
      <div className="loginPhase">
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/Signup" element={<Signup />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
