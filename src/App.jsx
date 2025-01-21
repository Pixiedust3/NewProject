import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import UserHome from "./pages/userhome";


function Button() {
  return (
    <button>Click me</button>
  );
}
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/userhome" element={<UserHome />} />
  
      </Routes>
      <Button />
    </Router>
  );
};



export default App;
